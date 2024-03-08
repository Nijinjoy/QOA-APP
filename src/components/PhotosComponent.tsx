import { View, Text } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { WIDTH } from '../constants/Dimension'

const PhotosComponent = () => {
    return (
        <View style={{ backgroundColor: colors.white, borderRadius: WIDTH * 0.02, }}>
            <View style={{ borderWidth: 1, borderColor: colors.white, backgroundColor: colors.purewhite, padding: WIDTH * 0.02, justifyContent: "center", alignItems: "center", borderRadius: WIDTH * 0.02 }}>
                <Text style={{ fontSize: 16, color: colors.red, fontWeight: "500" }}>21</Text>
                <Text style={{ fontSize: 10, color: colors.black }}>Photos</Text>
            </View>
        </View>
    )
}


export default PhotosComponent