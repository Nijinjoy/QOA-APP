import { View, Text, Pressable, Image, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { backarrow, drawericon, headerintersection } from '../assets/images'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'

const HeaderComponent = (props) => {
    const { title = "Label", icon, onPress, iconStyle = { backgroundColor: colors.darkViolet, width: WIDTH * 0.07, height: HEIGHT * 0.03, borderRadius: WIDTH * 0.02 }, titleStyle = { color: colors.white }, containerStyle = { width: WIDTH * 0.15, height: HEIGHT * 0.06 }, headerStyle = {
        height: HEIGHT
            * 0.22
    } } = props;
    return (
        <ImageBackground source={headerintersection} style={{ backgroundColor: colors.skyblue, /* height: HEIGHT * 0.19, */ borderBottomWidth: 4, borderColor: colors.grey, ...headerStyle }}>
            <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: WIDTH * 0.02, marginTop: HEIGHT * 0.04, borderWidth: 0 }}>
                <Pressable style={{ padding: 8, borderRadius: WIDTH * 0.02, ...containerStyle }} onPress={onPress}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={icon} style={{ ...iconStyle }} resizeMode='contain' />
                    </View>
                </Pressable>
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: colors.purewhite, ...titleStyle }}>{title}</Text>
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}


export default HeaderComponent

