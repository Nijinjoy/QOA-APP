import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { hands, programs, translation } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const CommonComponent = (props) => {
    const { typeStyle, imageUrl, category, title, date, customView, containerStyle } = props
    return (
        <View style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: colors.white, ...containerStyle }}>
            <Image source={{ uri: imageUrl }} style={{ height: HEIGHT * 0.2, borderTopLeftRadius: WIDTH * 0.02, width: WIDTH * 0.9, borderTopRightRadius: WIDTH * 0.02 }} />
            <View style={{ /* marginTop: HEIGHT * 0.02, */ margin: HEIGHT * 0.02, width: WIDTH * 0.8 }}>
                <Text style={{ fontSize: 13, color: colors.skyblue }}>{date}</Text>
                <Text style={{ fontSize: 15, color: colors.black, fontWeight: "500", width: WIDTH * 0.8, marginTop: HEIGHT * 0.005 }}>{title}</Text>
                {customView}
            </View>
            {/* <View style={{ backgroundColor: colors.white, position: "absolute", top: HEIGHT * 0.1, left: WIDTH * 0.06, }}>
                <View style={{ borderWidth: 0, justifyContent: "center", alignItems: 'center', padding: HEIGHT * 0.013, backgroundColor: colors.white, transform: [{ rotate: '10deg' }] }}>
                    <Text style={{ color: colors.darkred }}>50</Text>
                    <Text>Online</Text>
                </View>
            </View> */}
        </View >
    )
}

export default CommonComponent