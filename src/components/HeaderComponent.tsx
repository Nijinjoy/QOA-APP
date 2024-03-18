import { View, Text, Pressable, Image, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { backarrow, drawericon, headerintersection } from '../assets/images'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'

const HeaderComponent = (props) => {
    // const { onPress, HeaderTitle, rightIcon, backArrow, headerImage, imageStyle, navigate } = props

    const { title = "Label", icon, onPress, iconStyle = { backgroundColor: colors.darkViolet, width: WIDTH * 0.07, height: HEIGHT * 0.03, borderRadius: WIDTH * 0.02 }, titleStyle = { color: colors.white }, containerStyle = { width: WIDTH * 0.15, height: HEIGHT * 0.06 }, headerStyle = {
        height: HEIGHT
            * 0.22
    } } = props;


    return (
        <ImageBackground source={headerintersection} style={{ backgroundColor: colors.skyblue, borderBottomWidth: 4, borderColor: colors.grey, ...headerStyle }}>
            <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.06 }}>
                <Pressable onPress={onPress} style={{ flex: 0.2 }}>
                    <Image source={icon} />
                </Pressable>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 0.6 }}>
                    <Text style={{ color: colors.purewhite, fontSize: 18 }}>{title}</Text>
                </View>
            </SafeAreaView>
        </ImageBackground >
    )
}

export default HeaderComponent

{/* <ImageBackground source={headerintersection} style={{ backgroundColor: colors.skyblue, borderBottomWidth: 4, borderColor: colors.grey, ...headerStyle }}>
<SafeAreaView style={{ flexDirection: 'row', marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.06 }}>
    <Pressable style={{ padding: 8, borderRadius: WIDTH * 0.02, ...containerStyle }} onPress={onPress}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={icon} style={{ ...iconStyle }} resizeMode='contain' />
        </View>
    </Pressable>
    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, color: colors.purewhite, ...titleStyle }}>{title}</Text>
    </View>
</SafeAreaView>
</ImageBackground > */}

10001078696