import { View, Text, Image, ScrollView, TouchableOpacity, Pressable, Alert, ImageBackground } from 'react-native'
import React from 'react'
import { backarrow, programs } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import PhotosComponent from './PhotosComponent'

const CarouselHeaderComponent = (props) => {
    const { backgroundImage, title, date, backgroundcolor } = props
    const navigation = useNavigation()
    return (
        <ImageBackground /* source={{ uri: backgroundImage }} */ source={backgroundImage} style={{ width: WIDTH, height: HEIGHT * 0.35 }} resizeMode='cover' >
            <View style={{ marginHorizontal: WIDTH * 0.05, position: 'absolute', bottom: HEIGHT * 0.02 }}>
                <Pressable onPress={() => navigation.goBack()} style={{ width: WIDTH * 0.1, justifyContent: 'center', alignItems: 'center', height: HEIGHT * 0.052, borderRadius: WIDTH * 0.02, position: "absolute", bottom: HEIGHT * 0.22, backgroundColor: backgroundcolor, left: WIDTH * 0.0 }}>
                    <Image source={backarrow} style={{ width: WIDTH * 0.04, height: HEIGHT * 0.03 }} resizeMode='contain' />
                </Pressable>
                <Text style={{ fontSize: 12, color: colors.black }}>{date}</Text>
                <Text style={{ fontSize: 16, color: colors.black, marginTop: HEIGHT * 0.01 }}>{title}</Text>
            </View>
        </ImageBackground >
    )
}


export default CarouselHeaderComponent