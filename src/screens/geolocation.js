import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  Button,
  Linking,
  PermissionsAndroid,
  Platform,
  ScrollView,
  StyleSheet,
  Switch,
  ToastAndroid,
  View,
} from 'react-native';
import Text from '../components/default_text'
import Geolocation from 'react-native-geolocation-service';
import VIForegroundService from '@voximplant/react-native-foreground-service';
import appConfig from '../../app.json';
import inside from 'point-in-polygon-hao';

export default function App() {
    const [forceLocation, setForceLocation] = useState(true);
    const [highAccuracy, setHighAccuracy] = useState(true);
    const [locationDialog, setLocationDialog] = useState(true);
    const [significantChanges, setSignificantChanges] = useState(false);
    const [observing, setObserving] = useState(false);
    const [foregroundService, setForegroundService] = useState(false);
    const [useLocationManager, setUseLocationManager] = useState(false);
    const [location, setLocation] = useState(null);
    const [testValue, setTestValue] = useState(0);
    const [mapMarkers, setMapMarkers] = useState([{
        position:{
            lng: -58.44806,
            lat: -34.6
        },
        icon: '🏁',
        size: [24,24]
    }])
    const [mapShapes, setMapShapes] = useState([{
        /* shapeType: MapShapeType.CIRCLE,
        color: "#123123",
        center: { lat: -34.6, lng: -58.44806 },
        radius: 2 */
    }])
    const [centerMap, setCenterMap] = React.useState({
        lng: -58.44806,
        lat: -34.6
      })

  const watchId = useRef(null);
  const testPolygon = [[
    [-58.55924762120434,-34.49711945528657],
    [-58.52584631341022,-34.51237002817314],
    [-58.51867394608755,-34.51779068077002],
    [-58.51094484992538,-34.52704752492391],
    [-58.49661144935197,-34.5461040364797],
    [-58.49227471860328,-34.54400367852772],
    [-58.5121016852624,-34.51867210218435],
    [-58.52175158052049,-34.51037317479219],
    [-58.55262075154931,-34.49510053507863],
    [-58.55924762120434,-34.49711945528657]
]]

  useEffect(() => {
    return () => {
      removeLocationUpdates();
    };
  }, [removeLocationUpdates]);

  useEffect(() => {
    console.log(location?.timestamp
      ? new Date(location.timestamp).toLocaleString()
      : '')
    locationCoords = [
      location?.coords?.longitude,
      location?.coords?.latitude
    ]

    console.log('locationCoords:', locationCoords);

    if(inside(locationCoords, testPolygon)){
      setTestValue(testValue +1)
      /* newShape = {
          shapeType: MapShapeType.CIRCLE,
          color: "#123123",
          center: { lat: location?.coords?.latitude || 0, lng: location?.coords?.longitude || 0 },
          radius: 2,
          } */
    setMapShapes([...mapShapes, 
        newShape
    ])
    setCenterMap({lng: location?.coords?.longitude, lat: location?.coords?.latitude})
    }
    else{
      setTestValue(testValue +1)
      /* newShape = {
          shapeType: MapShapeType.CIRCLE,
          color: "#FFFFFF",
          center: { lat: location?.coords?.latitude || 0, lng: location?.coords?.longitude || 0 },
          radius: 2,
          } */
    setMapShapes([...mapShapes, 
        newShape
    ])
    setCenterMap({lng: location?.coords?.longitude, lat: location?.coords?.latitude})
    }
  }, [location]);

  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
        '',
        [
          { text: 'Go to Settings', onPress: openSetting },
          { text: "Don't Use Location", onPress: () => {} },
        ],
      );
    }

    return false;
  };

  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }

    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }
    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();

    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
        console.log(position);
      },
      (error) => {
        Alert.alert(`Code ${error.code}`, error.message);
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        //maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
      },
    );
  };

  const getLocationUpdates = async () => {
    const hasPermission = await hasLocationPermission();
    if (!hasPermission) {
      return;
    }
    if (Platform.OS === 'android' && foregroundService) {
      await startForegroundService();
    }
    setObserving(true);

    watchId.current = Geolocation.watchPosition(
      (position) => {
        setLocation(position);
        console.log(position);
      },
      (error) => {
        setLocation(null);
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        distanceFilter: 0,
        interval: 5000,
        fastestInterval: 2000,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
        useSignificantChanges: significantChanges,
      },
    );
  };

  const removeLocationUpdates = useCallback(() => {
    if (watchId.current !== null) {
      stopForegroundService();
      Geolocation.clearWatch(watchId.current);
      watchId.current = null;
      setObserving(false);
    }
  }, [stopForegroundService]);

  const startForegroundService = async () => {
    if (Platform.Version >= 26) {
      await VIForegroundService.getInstance().createNotificationChannel({
        id: 'locationChannel',
        name: 'Location Tracking Channel',
        description: 'Tracks location of user',
        enableVibration: false,
      });
    }

    return VIForegroundService.getInstance().startService({
      channelId: 'locationChannel',
      id: 420,
      title: appConfig.displayName,
      text: 'Tracking location updates',
      icon: 'ic_launcher',
    });
  };

  const stopForegroundService = useCallback(() => {
    VIForegroundService.getInstance().stopService().catch((err) => err);
  }, []);

  return (
    <View style={styles.mainContainer}>
        {/* <View style={{width: '100%', height: 500, flex: 1}}>
            <LeafletView
                mapMarkers={mapMarkers}
                mapLayers={[DEFAULT_MAP_LAYER]}
                mapShapes={mapShapes}
                mapCenterPosition={centerMap}
                zoom={11}
            />
        </View> */}
       
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <View style={styles.option}>
            <Text>Enable High Accuracy</Text>
            <Switch onValueChange={setHighAccuracy} value={highAccuracy} />
          </View>

          {Platform.OS === 'ios' && (
            <View style={styles.option}>
              <Text>Use Significant Changes</Text>
              <Switch
                onValueChange={setSignificantChanges}
                value={significantChanges}
              />
            </View>
          )}

          {Platform.OS === 'android' && (
            <>
              <View style={styles.option}>
                <Text>Show Location Dialog</Text>
                <Switch
                  onValueChange={setLocationDialog}
                  value={locationDialog}
                />
              </View>
              <View style={styles.option}>
                <Text>Force Location Request</Text>
                <Switch
                  onValueChange={setForceLocation}
                  value={forceLocation}
                />
              </View>
              <View style={styles.option}>
                <Text>Use Location Manager</Text>
                <Switch
                  onValueChange={setUseLocationManager}
                  value={useLocationManager}
                />
              </View>
              <View style={styles.option}>
                <Text>Enable Foreground Service</Text>
                <Switch
                  onValueChange={setForegroundService}
                  value={foregroundService}
                />
              </View>
            </>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Get Location" onPress={getLocation} />
          <View style={styles.buttons}>
            <Button
              title="Start Observing"
              onPress={getLocationUpdates}
              disabled={observing}
            />
            <Button
              title="Stop Observing"
              onPress={removeLocationUpdates}
              disabled={!observing}
            />
          </View>
        </View>
        <View style={styles.result}>
          <Text>Latitude: {location?.coords?.latitude || ''}</Text>
          <Text>Longitude: {location?.coords?.longitude || ''}</Text>
          <Text>Heading: {location?.coords?.heading}</Text>
          <Text>Accuracy: {location?.coords?.accuracy}</Text>
          <Text>Altitude: {location?.coords?.altitude}</Text>
          <Text>Altitude Accuracy: {location?.coords?.altitudeAccuracy}</Text>
          <Text>Speed: {location?.coords?.speed}</Text>
          <Text>Provider: {location?.provider || ''}</Text>
          <Text>Location access count: {testValue}</Text>
          <Text>
            Timestamp:{' '}
            {location?.timestamp
              ? new Date(location.timestamp).toLocaleString()
              : ''}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    padding: 12,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  result: {
    borderWidth: 1,
    borderColor: '#666',
    width: '100%',
    padding: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
    width: '100%',
  },
});
