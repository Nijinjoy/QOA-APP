import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreen from '../screens/DrawerScreen';
import { WIDTH } from '../constants/Dimension';
import HelpScreen from '../screens/HelpScreen';
import ProgramScreen from '../screens/ProgramScreen';
import HigherStudyScreen from '../screens/HigherStudyScreen';
import CertificateScreen from '../screens/CertificateScreen';
import DiplomaScreen from '../screens/DiplomaScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator()

const Drawers = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerScreen {...props} />}
            screenOptions={{
                headerShown: false,
                overlayColor: 'transparent',
                drawerStyle: { width: WIDTH * 0.75 },
            }}
            initialRouteName="HomeScreen"
        >

            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="HelpScreen" component={HelpScreen} />
        </Drawer.Navigator>
    );
};

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='SplashScreen' component={SplashScreen} />
                <Stack.Screen name='GetStartedScreen' component={GetStartedScreen} />
                <Stack.Screen name='ProgramScreen' component={ProgramScreen} />
                <Stack.Screen name='HigherStudyScreen' component={HigherStudyScreen} />
                <Stack.Screen name='CertificateScreen' component={CertificateScreen} />
                <Stack.Screen name='DiplomaScreen' component={DiplomaScreen} />
                <Stack.Screen name='HomeScreen' component={Drawers} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Routes