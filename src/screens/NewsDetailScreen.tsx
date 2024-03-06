import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import CarouselHeaderComponent from '../components/CarouselHeaderComponent'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { backarrow } from '../assets/images'

const NewsDetailScreen = () => {
    const navigation = useNavigation()
    return (
        <View>

            <CarouselHeaderComponent />
        </View>
    )
}

export default NewsDetailScreen