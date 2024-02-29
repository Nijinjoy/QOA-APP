import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { hands, programs, translation } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const CommonComponent = ({ imageUrl, category, title, date, language }) => {
    return (
        <View style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: colors.white, }}>
            <Image source={imageUrl} style={{ width: WIDTH * 0.9, height: HEIGHT * 0.2, borderTopLeftRadius: WIDTH * 0.02, borderTopRightRadius: WIDTH * 0.02 }} resizeMode='cover' />
            <View style={{ padding: WIDTH * 0.05 }}>
                <Pressable style={{ backgroundColor: colors.darkred, width: WIDTH * 0.2, borderRadius: WIDTH * 0.01, alignItems: 'center', justifyContent: "center", padding: WIDTH * 0.01, position: 'absolute', bottom: HEIGHT * 0.21, left: WIDTH * 0.05 }}>
                    <Text style={{ fontSize: 13, color: colors.white }}>Online</Text>
                </Pressable>
                <Text style={{ fontSize: 13, color: colors.skyblue }}>{title}</Text>
                <Text style={{ fontSize: 16, color: colors.black, marginTop: HEIGHT * 0.01 }}>{category}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT * 0.02 }}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ fontSize: 13, color: colors.grey }}>{date}</Text>
                    </View>
                    <Pressable style={{ borderWidth: 0.9, padding: HEIGHT * 0.01, borderRadius: WIDTH * 0.01, borderStyle: 'dotted', borderColor: colors.grey, flexDirection: 'row', alignItems: 'center', flex: 0.45 }}>
                        <Text style={{ fontSize: 13, color: colors.darkred, fontWeight: 0 }}>{language}</Text>
                        <Image source={hands} style={{ width: WIDTH * 0.06, height: HEIGHT * 0.02, marginLeft: WIDTH * 0.05 }} />
                        <Image source={hands} style={{ width: WIDTH * 0.06, height: HEIGHT * 0.02, marginLeft: WIDTH * 0.02 }} />
                    </Pressable>
                </View>
            </View>
        </View >
    )
}

export default CommonComponent