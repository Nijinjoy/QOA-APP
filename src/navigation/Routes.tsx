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
import LatestNewsScreen from '../screens/LatestNewsScreen';
import NewsDetailScreen from '../screens/NewsDetailScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import MediaScreen from '../screens/MediaScreen';
import MediaDetailScreen from '../screens/MediaDetailScreen';
import MonthPrgmScreen from '../screens/MonthPrgmScreen';
import BottomScreen from '../screens/BottomScreen';
import DiplomaListingScreen from '../screens/DiplomaDetailScreen';
import DiplomaDetailScreen from '../screens/DiplomaDetailScreen';
import CertificateDetailScreen from '../screens/CertificateDetailScreen';
import CourseRegistrationScreen from '../screens/CourseRegistrationScreen';
import AboutusScreen from '../screens/AboutusScreen';
import PartnerScreen from '../screens/PartnerScreen';

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
            {/* <Drawer.Screen name='AboutusScreen' component={AboutusScreen} /> */}
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
                <Stack.Screen name='LatestNewsScreen' component={LatestNewsScreen} />
                <Stack.Screen name='NewsDetailScreen' component={NewsDetailScreen} />
                <Stack.Screen name='ContactUsScreen' component={ContactUsScreen} />
                <Stack.Screen name='MediaScreen' component={MediaScreen} />
                <Stack.Screen name='MediaDetailScreen' component={MediaDetailScreen} />
                <Stack.Screen name='MonthPrgmScreen' component={MonthPrgmScreen} />
                <Stack.Screen name='DiplomaDetailScreen' component={DiplomaDetailScreen} />
                <Stack.Screen name='CertificateDetailScreen' component={CertificateDetailScreen} />
                <Stack.Screen name='CourseRegistrationScreen' component={CourseRegistrationScreen} />
                <Stack.Screen name='AboutusScreen' component={AboutusScreen} />
                <Stack.Screen name='PartnerScreen' component={PartnerScreen} />
                <Stack.Screen name='HomeScreen' component={Drawers} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes