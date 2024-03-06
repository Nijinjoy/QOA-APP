import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'

const HeaderBtmComponent = (props) => {
    const { onPress, HeaderTitle, rightIcon, backArrow, headerImage, imageStyle } = props
    return (
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.02 }}>
            <Pressable style={{ flex: 0.5 }} onPress={onPress}>
                <View style={{ borderColor: colors.lightgrey, borderWidth: 0.5, padding: WIDTH * 0.015, width: WIDTH * 0.08, borderRadius: WIDTH * 0.02, alignItems: 'center', justifyContent: "center" }}>
                    <Image source={backArrow} style={{ ...imageStyle }} resizeMode='contain' tintColor={colors.black} />
                </View>
            </Pressable>
            <View style={{ flex: 0.6, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                {headerImage && (
                    <Image source={headerImage} style={{ marginLeft: WIDTH * 0.03, width: WIDTH * 0.05, height: HEIGHT * 0.04 }} resizeMode='contain' />
                )}
                <Text style={{ color: colors.black, fontSize: 16, fontWeight: 500, marginHorizontal: WIDTH * 0.01 }}>{HeaderTitle}</Text>
            </View>
            <Pressable style={{ flex: 0.5, alignItems: "flex-end", justifyContent: "center" }}>
                <Image source={rightIcon} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.04 }} resizeMode='contain' />
            </Pressable>
        </View>
    )
}

export default HeaderBtmComponent