import { View, Text, Image } from 'react-native'
import React from 'react'
import { logo } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const LogoComponent = () => {
    return (
        <View style={{ borderWidth: 0, padding: WIDTH * 0.03, borderRadius: WIDTH * 0.06, backgroundColor: colors.purewhite }}>
            <View style={{ borderWidth: 0, padding: HEIGHT * 0.05, borderRadius: WIDTH * 0.06, backgroundColor: colors.lightwhite }}>
                <Image source={logo} style={{ width: WIDTH * 0.225, height: HEIGHT * 0.24 }} resizeMode='contain' />
            </View>
        </View>
    )
}

export default LogoComponent