import { View, Text, Image, ScrollView, TouchableOpacity, Pressable, Alert } from 'react-native'
import React from 'react'
import { backarrow, programs } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const CarouselHeaderComponent = (props) => {
    const { backArrow, date, title, count, photos, onPress, backgroundImage } = props
    const navigation = useNavigation()

    return (
        <View style={{}}>
            <Image source={backgroundImage} resizeMode='cover' style={{ width: WIDTH, height: HEIGHT * 0.33 }} />
            <View style={{ marginHorizontal: WIDTH * 0.05, position: 'absolute', top: HEIGHT * 0.06 }}>
                <Pressable style={{ borderWidth: 0, padding: 8, borderRadius: WIDTH * 0.02, backgroundColor: colors.grey }} onPress={onPress}>
                    <Image source={backArrow} style={{ width: WIDTH * 0.04, height: HEIGHT * 0.025 }} resizeMode='contain' />
                </Pressable>
            </View>
            <View style={{ flexDirection: 'row', position: 'absolute', bottom: HEIGHT * 0.02, alignItems: 'center', marginHorizontal: WIDTH * 0.05 }}>
                <View>
                    <Text style={{ fontSize: 12, color: colors.white, fontWeight: "bold", width: WIDTH * 0.65 }}>{date}</Text>
                    <Text style={{ fontSize: 16, color: colors.white, width: WIDTH * 0.6, marginTop: HEIGHT * 0.01 }}>{title}</Text>
                </View>
                <View style={{ borderWidth: 1, marginLeft: WIDTH * 0.10, borderColor: colors.purewhite, borderRadius: WIDTH * 0.015, justifyContent: 'center', alignItems: 'center', width: WIDTH * 0.15, height: HEIGHT * 0.07, backgroundColor: colors.purewhite }}>
                    <Text style={{ color: colors.red, fontSize: 16 }}>{count}</Text>
                    <Text style={{ color: colors.btnbackground, fontSize: 10 }}>{photos}</Text>
                </View>
            </View>
        </View >
    )
}

export default CarouselHeaderComponent
