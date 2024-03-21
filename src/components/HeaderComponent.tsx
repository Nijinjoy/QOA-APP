import { View, Text, Pressable, Image, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { backarrow, bell, drawericon, headerintersection, notification } from '../assets/images'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'

const HeaderComponent = (props) => {
    const { title = "Label", onPress, icon, rightIconStyle, rightIcon, onNavigate, headerTitle, containerStyle, iconBackground } = props
    return (
        <ImageBackground source={headerintersection} style={{ backgroundColor: colors.skyblue, borderBottomWidth: 4, borderColor: colors.grey, ...containerStyle }}>
            <View style={{ flexDirection: "row", alignItems: 'center', marginTop: HEIGHT * 0.06, marginHorizontal: WIDTH * 0.05, justifyContent: 'space-between' }}>
                <Pressable onPress={onPress}>
                    <View style={{ width: WIDTH * 0.09, height: WIDTH * 0.09, alignItems: "center", justifyContent: "center", borderRadius: WIDTH * 0.02, backgroundColor: iconBackground }}>
                        <Image source={icon} style={{ ...rightIconStyle }} resizeMode='contain' />
                    </View>
                </Pressable>
                <View>
                    <Text style={{ color: colors.purewhite, fontSize: 18 }}>{headerTitle}</Text>
                </View>
                <Pressable onPress={onNavigate}>
                    <Image source={rightIcon} style={{ width: WIDTH * 0.08, height: HEIGHT * 0.06 }} resizeMode='contain' tintColor={colors.purewhite} />
                </Pressable>
            </View>
        </ImageBackground>
    )
}

export default HeaderComponent

