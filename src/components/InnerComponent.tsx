import { View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { hands } from '../assets/images'

const InnerComponent = ({ date, language, startDate, endDate }) => {
    return (
        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: HEIGHT * 0.02 }}>
            <View style={{ borderWidth: 0, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{ fontSize: 13, color: colors.grey }}>{startDate}</Text>
                <Text style={{ fontSize: 13, color: colors.grey }}>-{endDate}</Text>
            </View>
            <View style={{ borderWidth: 1, flexDirection: 'row', padding: WIDTH * 0.01, justifyContent: 'center', alignItems: 'center', borderRadius: WIDTH * 0.01, borderStyle: 'dashed', borderColor: colors.lightgrey }}>
                <Text style={{ fontSize: 13, color: colors.darkred, fontWeight: '400' }}>{language}</Text>
                <Image source={hands} resizeMode='contain' style={{ marginHorizontal: WIDTH * 0.02 }} />
                <Image source={hands} resizeMode='contain' />
            </View>
        </View>

    )
}

export default InnerComponent