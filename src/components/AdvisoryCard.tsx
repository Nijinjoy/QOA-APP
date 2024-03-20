import { View, Text, Image } from 'react-native'
import React from 'react'
import { programs } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const AdvisoryCard = (props) => {
    const { cardImage, name, subTitle, Designation } = props
    return (
        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 }}>
            <Image
                source={{ uri: cardImage }}
                style={{ width: WIDTH * 0.4, height: HEIGHT * 0.215, borderRadius: WIDTH * 0.03, margin: HEIGHT * 0.01 }}
                resizeMode='cover'
            />
            <View style={{ marginLeft: WIDTH * 0.01, justifyContent: 'center', }}>
                <Text style={{ fontSize: 17, color: colors.black, width: WIDTH * 0.38 }}>{name}</Text>
                <Text style={{ fontSize: 13, color: colors.grey, width: WIDTH * 0.38 }}>{subTitle}</Text>
                <Text style={{ fontSize: 13, color: colors.black }}>{Designation}</Text>
            </View>
        </View>
    )
}

export default AdvisoryCard


{/* <View style={{ borderWidth: 0, justifyContent: "center", alignItems: 'center' }}>
<Image source={{ uri: cardImage }} style={{ width: WIDTH * 0.4, height: HEIGHT * 0.215, borderRadius: WIDTH * 0.03, margin: HEIGHT * 0.01 }} resizeMode='cover' />
<View style={{ height: HEIGHT * 0.15 }}>
    <Text style={{ fontSize: 17, color: colors.black, width: WIDTH * 0.38 }}>{name}</Text>
    <Text style={{ fontSize: 13, color: colors.grey, width: WIDTH * 0.38 }}>{subTitle}</Text>
    <Text style={{ fontSize: 13, color: colors.black }}>{Designation}</Text>
</View>
</View> */}