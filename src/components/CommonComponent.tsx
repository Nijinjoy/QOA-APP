import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { hands, programs, translation } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const CommonComponent = (props) => {
    const { typeStyle, imageUrl, category, title, date, language, type } = props
    return (
        <View style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: colors.white }}>
            <Image source={imageUrl} style={{ height: HEIGHT * 0.2, borderTopLeftRadius: WIDTH * 0.02, width: WIDTH * 0.9, borderTopRightRadius: WIDTH * 0.02 }} />
            <View style={{ marginHorizontal: WIDTH * 0.04, marginTop: HEIGHT * 0.02, padding: HEIGHT * 0.01 }}>
                <Text style={{ fontSize: 13, color: colors.skyblue }}>{title}</Text>
                <Text style={{ fontSize: 16, color: colors.black, marginTop: HEIGHT * 0.01 }}>{category}</Text>
            </View >
            <View style={{ marginHorizontal: WIDTH * 0.04, flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                <View style={{ flex: 0.9 }}>
                    <Text>{date}</Text>
                </View>
                <Pressable style={{ flexDirection: 'row', borderWidth: 1, borderStyle: 'dotted', padding: WIDTH * 0.018, borderRadius: WIDTH * 0.01, flex: 0.6 }}>
                    <Text>{language}</Text>
                    <Image source={hands} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.015 }} resizeMode='contain' />
                    <Image source={hands} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.01 }} resizeMode='contain' />
                </Pressable>
            </View>
        </View >
    )
}

export default CommonComponent