import React from 'react';
import { View, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { cart, drawericon, home, homefocussed, love, profilee } from '../assets/images';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import colors from '../constants/Colors';

const Tab = createBottomTabNavigator();

const HomeScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HomeScreen</Text>
    </View>
);

const ProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProfileScreen</Text>
    </View>
);
const HelpScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>HelpScreen</Text>
    </View>
);
const SplashScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        <Text>SplashScreen</Text>
    </View>
);

const Separator = () => (
    <View style={{ width: WIDTH * 0.1, height: 20, backgroundColor: colors.white }}>
        <Text>wuycdg</Text>
    </View>
);

const BottomTabComponent = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    let icon;
                    if (route.name === 'Home') {
                        icon = focused ? homefocussed : home;
                    } else if (route.name === 'Profile') {
                        icon = focused ? cart : cart;
                    } else if (route.name === 'HelpScreen') {
                        icon = focused ? love : love;
                    } else if (route.name === 'SplashScreen') {
                        icon = focused ? homefocussed : profilee;
                    }
                    return (
                        <View style={{ borderRadius: 50, padding: 5, borderColor: colors.white }}>
                            <Image source={icon} style={{ width: 20, height: 20 }} />
                        </View>
                    )
                },
                tabBarLabel: '',
                tabBarStyle: { backgroundColor: colors.black, height: HEIGHT * 0.1 },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Separator2" component={Separator} options={{ headerShown: false }} />
            <Tab.Screen name="HelpScreen" component={HelpScreen} options={{ headerShown: false }} />
            <Tab.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        </Tab.Navigator >
    );
}


export default BottomTabComponent;


