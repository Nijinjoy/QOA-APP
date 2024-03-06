import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import colors from '../constants/Colors'
import { crossintersection, logo } from '../assets/images'
import LogoComponent from '../components/LogoComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { useNavigation } from '@react-navigation/native'

const SplashScreen = () => {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("GetStartedScreen")
        }, 2000)
    }, [])

    const coloredViews = [
        { backgroundColor: colors.skyblue, width: WIDTH * 0.5 },
        { backgroundColor: colors.red, width: WIDTH * 0.3 },
        { backgroundColor: colors.yellow, width: WIDTH * 0.3 }
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.lightwhite }}>
            <Image source={crossintersection} style={{ position: 'absolute', bottom: HEIGHT * 0.4 }} />
            <View>
                <LogoComponent />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', top: HEIGHT * 0.22 }}>
                <Text style={{ color: colors.grey }}>Version 1.0</Text>
                <Text style={{ fontSize: 14, marginTop: HEIGHT * 0.015, color: colors.blacks }}>Qatar Olympic Academy</Text>
            </View>
            <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row' }}>
                {coloredViews.map((view, index) => (
                    <View key={index} style={{ backgroundColor: view.backgroundColor, width: view.width, height: HEIGHT * 0.01 }} />
                ))}
            </View>
        </View>
    )
}

export default SplashScreen