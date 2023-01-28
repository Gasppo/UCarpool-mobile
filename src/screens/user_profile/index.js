import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native';
import { Avatar, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../../components/AuthProvider';
import Text from '../../components/default_text';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import { UCA_BLUE } from '../../utils/constants';
import { styles } from './styles';

export default function UserProfile(props) {
    const { logout } = useContext(AuthContext)

    const userData = props.authentication.user
    return (
        <>
            <FocusAwareStatusBar
                animated={false}
                backgroundColor={UCA_BLUE}
                barStyle={'light-content'}
            />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.topBar}>
                    <Text style={styles.myProfileText}>Mi Perfil</Text>
                </View>
                <View style={styles.containerBox}>
                    <View style={styles.nameMailContainer}>
                        <Avatar.Text style={{ margin: 10 }} backgroundColor={'green'} size={72} label={userData.name[0] + userData.surname[0]} />
                        <View style={styles.nameContainer}>
                            <Title style={styles.titleText}>{userData.name} {userData.surname}</Title>
                            <Title style={styles.titleText}>{userData.email}</Title>
                        </View>
                    </View>
                    <View style={styles.userModesContainer}>
                        <Text style={{ ...styles.defaultText, color: 'white' }}>Modos habilitados</Text>
                        <View style={styles.innerUserModesContainer}>
                            <View style={[styles.userModeRectangles, { backgroundColor: props.authentication.userType === 'passenger' ? UCA_BLUE : 'white' }]}>
                                <Text style={{ fontSize: 20, textAlign: 'center', color: props.authentication.userType === 'passenger' ? 'white' : UCA_BLUE }}>Conductor</Text>
                            </View>
                            {userData.isDriver ?
                                <View style={[styles.userModeRectangles, { backgroundColor: props.authentication.userType === 'driver' ? UCA_BLUE : 'white' }]}>
                                    <Text style={{ fontSize: 20, textAlign: 'center', color: props.authentication.userType === 'driver' ? 'white' : UCA_BLUE }}>Pasajero</Text>
                                </View>
                                : <></>
                            }
                        </View>
                    </View>
                </View>
                <ScrollView style={{ backgroundColor: 'rgb(245,245,248)', paddingTop: 10 }}>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.profileButton}
                            onPress={() => props.navigation.navigate('user_stats')}
                        >
                            <View style={styles.iconContainer}>
                                <Icon name={'chart-bar'} size={20} style={styles.optionIcon} />
                            </View>
                            <Text style={styles.defaultText}>Estadísticas de {props.authentication.userType === 'driver' ? 'conductor' : 'pasajero'}</Text>
                        </TouchableOpacity>
                        {userData.isDriver ?
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={styles.profileButton}
                                onPress={() => props.navigation.navigate('driver_vehicles')}
                            >
                                <View style={styles.iconContainer}>
                                    <Icon name={'car-multiple'} size={20} style={styles.optionIcon} />
                                </View>
                                <Text style={styles.defaultText}>Vehículos</Text>
                            </TouchableOpacity>
                            : <></>
                        }
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.profileButton}
                            onPress={() => props.navigation.navigate('user_trip_history')}
                        >
                            <View style={styles.iconContainer}>
                                <Icon name={'history'} size={20} style={styles.optionIcon} />
                            </View>
                            <Text style={styles.defaultText}>Historial de viajes como {props.authentication.userType === 'driver' ? 'conductor' : 'pasajero'}</Text>
                        </TouchableOpacity>
                        {
                            !(userData.isDriver) ?
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={styles.profileButton}
                                    onPress={() => props.navigation.navigate('about_app')}
                                >
                                    <View style={styles.iconContainer}>
                                        <Icon name={'id-card'} size={20} style={styles.optionIcon} />
                                    </View>
                                    <Text style={styles.defaultText}>Registrarse como conductor</Text>
                                </TouchableOpacity>
                                : <></>
                        }
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={styles.profileButton}
                            onPress={() => props.navigation.navigate('about_app')}
                        >
                            <View style={styles.iconContainer}>
                                <Icon name={'information-outline'} size={20} style={styles.optionIcon} />
                            </View>

                            <Text style={styles.defaultText}>Acerca de la aplicación</Text>
                        </TouchableOpacity>
                        {
                            userData.isDriver && props.authentication.userType === 'passenger' ?
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={[styles.profileButton, { backgroundColor: UCA_BLUE }]}
                                    onPress={() => { props.switchToDriver(userData) }}
                                >
                                    <View style={styles.iconContainer}>
                                        <Icon name={'account-key'} size={20} style={[styles.optionIcon, { color: 'white' }]} />
                                    </View>
                                    <Text style={{ margin: 5, color: 'white' }}>Cambiar a Modo Conductor</Text>
                                </TouchableOpacity>
                                :
                                <></>
                        }
                        {
                            userData.isDriver && props.authentication.userType === 'driver' ?
                                <TouchableOpacity
                                    activeOpacity={0.5}
                                    style={[styles.profileButton, { backgroundColor: UCA_BLUE }]}
                                    onPress={() => props.switchToPassenger()}
                                >
                                    <View style={styles.iconContainer}>
                                        <Icon name={'seat-passenger'} size={20} style={[styles.optionIcon, { color: 'white' }]} />
                                    </View>
                                    <Text style={styles.passengerModeSwitchText}>Cambiar a Modo Pasajero</Text>
                                </TouchableOpacity>
                                :
                                <></>
                        }
                        <TouchableOpacity
                            activeOpacity={0.5}
                            style={[styles.profileButton, { borderBottomWidth: 0 }]}
                            onPress={() => props.logOutUser(logout)}
                        >
                            <View style={styles.iconContainer}>
                                <Icon name={'account-remove'} size={20} style={[styles.optionIcon, { color: 'red' }]} />
                            </View>
                            <Text style={{ margin: 5, color: 'red' }}>Cerrar Sesión</Text>
                        </TouchableOpacity>
                    </View>
                    <View id="test" style={{ width: '100%', height: 20 }} />
                </ScrollView>

            </SafeAreaView>
        </>

    );
}
