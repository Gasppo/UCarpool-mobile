import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Animated, FlatList, NativeModules, ScrollView, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Button as PaperButton, IconButton } from 'react-native-paper';
import { UCA_BLUE } from '../../../utils/constants';
import Text from '../../../components/default_text';
import TripItem from '../../../components/trip_item';
import { styles } from '../styles';


const TripList = ({
    style,
    availableTripList,
    height, topBarHeight,
    bottomTabHeight,
    arrowSpinValue,
    showBottomBox,
    setShowBottomBox,
    selectedStartRadius,
    setSelectedStartRadius,
    selectedStartTime,
    setSelectedStartTime,
    refreshing,
    handleGetSearchResults,
}) => {
    const [showFilters, setShowFilters] = React.useState(false);
    const [dateModalOpen, setDateModalOpen] = React.useState(false);
    const myLocale = NativeModules.I18nManager.localeIdentifier;
    const spin = arrowSpinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0 deg', '180 deg'],
    })

    function handleDateShown(yourDate) {
        return new Date(yourDate).toLocaleDateString(myLocale.replace('_', '-'), { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
    }

    return (
        <Animated.View style={[styles.searchResultsHome, { ...style }]}>
            <View style={styles.searchResultsContainer}>
                <View style={styles.numberOfTripsCircleIndicator}>
                    <Text style={styles.tripNumberIndicator}>{availableTripList.length}</Text>
                </View>
                <Animated.View style={{ transform: [{ rotate: spin }], margin: 5 }}>
                    <IconButton icon={'arrow-down'} disabled={showFilters && !availableTripList} size={22} color="rgb(0,53,108)" onPress={() => { setShowBottomBox(!showBottomBox) }} />
                </Animated.View>
                <View style={{ margin: 5 }}>
                    <IconButton icon={'filter'} size={22} color={UCA_BLUE} mode="contained" onPress={() => { setShowFilters(!showFilters); if (!showBottomBox) { setShowBottomBox(true) } }} />
                </View>
            </View>
            <View>
                <>
                    {showFilters ?
                        <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }} style={{ height: height - topBarHeight - bottomTabHeight - 55 }}>
                            <View style={{ marginTop: 10 }}>
                                <Text style={styles.boxLabel}>Radio de búsqueda</Text>
                            </View>
                            <View style={styles.defaultPicker}>
                                <Picker
                                    selectedValue={selectedStartRadius}
                                    onValueChange={(value) => setSelectedStartRadius(value)}
                                    style={styles.radiusPicker}
                                    dropdownIconColor="white"
                                >
                                    <Picker.Item label={'500 m'} value={500} key={'_'} />
                                    <Picker.Item label={'1 Km'} value={1000} key={'_'} />
                                    <Picker.Item label={'2 Km'} value={2000} key={'_'} />
                                    <Picker.Item label={'5 Km'} value={5000} key={'_'} />
                                </Picker>
                            </View>
                            <View>
                                <Text style={styles.boxLabel}>Fecha de inicio de viaje</Text>
                            </View>
                            <PaperButton
                                mode="contained"
                                onPress={() => setDateModalOpen(true)}
                                style={styles.datePicker}
                            >
                                {handleDateShown(selectedStartTime)}
                            </PaperButton>
                            <DateTimePicker
                                isVisible={dateModalOpen}
                                onConfirm={(date) => {
                                    setDateModalOpen(false);
                                    setSelectedStartTime(date.toISOString())
                                }}
                                onCancel={() => setDateModalOpen(false)}
                                mode={'date'}
                                minimumDate={new Date(new Date().setHours(3, 0, 0, 0))}
                                date={new Date(selectedStartTime)}

                            />
                        </ScrollView> :
                        <>
                            <FlatList
                                extraData={refreshing}
                                data={availableTripList}
                                style={{ height: height - topBarHeight - bottomTabHeight - 90 }}
                                contentContainerStyle={{ borderRadius: 6, padding: 5, backgroundColor: 'rgb(245,245,248)' }}
                                refreshing={refreshing}
                                bounces={false}
                                overScrollMode={'never'}
                                keyExtractor={(item, index) => { return index.toString() }}
                                ListEmptyComponent={
                                    <View
                                        style={styles.container}
                                    >
                                        <Text>
                                            No hay viajes en la zona seleccionada!
                                        </Text>
                                    </View>
                                }
                                renderItem={({ item, index }) =>
                                    <TripItem item={item} key={index + '_' + Math.random()} refreshFn={handleGetSearchResults} />
                                }
                            />
                        </>
                    }
                </>

            </View>

        </Animated.View>
    )
}

export default TripList
