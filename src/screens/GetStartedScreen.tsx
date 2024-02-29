import { View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { crossintersection } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import LogoComponent from '../components/LogoComponent'
import ButtonComponent from '../components/ButtonComponent'
import { useNavigation } from '@react-navigation/native'

const GetStartedScreen = () => {
    const navigation = useNavigation()

    const coloredViews = [
        { backgroundColor: colors.skyblue, width: WIDTH * 0.5 },
        { backgroundColor: colors.red, width: WIDTH * 0.3 },
        { backgroundColor: colors.yellow, width: WIDTH * 0.3 }
    ];

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.lightwhite }}>
            <Image source={crossintersection} style={{ position: 'absolute', bottom: HEIGHT * 0.3 }} />
            <LogoComponent />
            <View style={{ padding: HEIGHT * 0.04, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: '400', marginHorizontal: WIDTH * 0.03, textAlign: 'center', color: colors.black }}>Leading Academy in the field of Sports and Olympic Education</Text>
                <View style={{ backgroundColor: colors.red, width: WIDTH * 0.06, height: HEIGHT * 0.01, borderRadius: WIDTH * 0.02, marginTop: HEIGHT * 0.04 }} />
                <View style={{ marginTop: HEIGHT * 0.05 }}>
                    <ButtonComponent containerStyle={{ width: WIDTH * 0.6, height: HEIGHT * 0.086 }} label="Get Started" onPress={() => navigation.navigate('HomeScreen')} />
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 0, flexDirection: 'row' }}>
                {coloredViews.map((view, index) => (
                    <View key={index} style={{ backgroundColor: view.backgroundColor, width: view.width, height: HEIGHT * 0.01 }} />
                ))}
            </View>
        </View>
    )
}

export default GetStartedScreen