import { View, Text, Image, ScrollView, TouchableOpacity, Pressable, Alert } from 'react-native'
import React from 'react'
import { backarrow, programs } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'

const CarouselHeaderComponent = () => {
    const navigation = useNavigation()

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={programs} style={{ width: WIDTH, height: HEIGHT * 0.3 }} resizeMode='cover' />
                <Pressable style={{ position: 'absolute', borderWidth: 0, top: HEIGHT * 0.05, padding: 5, left: WIDTH * 0.04, justifyContent: "center", alignItems: 'center', borderRadius: WIDTH * 0.02, backgroundColor: colors.grey, width: WIDTH * 0.1 }} onPress={() => navigation.goBack()}>
                    <Image source={backarrow} style={{ width: WIDTH * 0.08, height: HEIGHT * 0.03, marginLeft: 10, alignSelf: "center" }} resizeMode='contain' />
                </Pressable>
            </View>
        </View >
    )
}

export default CarouselHeaderComponent