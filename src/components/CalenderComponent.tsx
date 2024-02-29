import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const CalenderComponent = () => {
    return (
        <View style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, flexDirection: "row", padding: HEIGHT * 0.02, alignItems: 'center', justifyContent: "center", backgroundColor: colors.purewhite }}>
            <View style={{ flex: 0.7, marginHorizontal: WIDTH * 0.03 }}>
                <Text style={{ fontSize: 13, color: colors.black, }}>Explore over 27 Programs</Text>
            </View>
            <Pressable style={{ borderWidth: 0, padding: WIDTH * 0.02, backgroundColor: colors.darkred, borderRadius: WIDTH * 0.015 }}>
                <Text style={{ fontSize: 13, color: colors.purewhite }}>Download 2022 Calender</Text>
            </Pressable>
        </View>
    )
}

export default CalenderComponent