import { View, Text, Image } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, bookshelf, dotintersection } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import CalenderComponent from '../components/CalenderComponent'

const HigherStudyScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ backgroundColor: '#FAFAFA' }}>
            <HeaderComponent
                headerTitle="Higher Studies"
                containerStyle={{ height: HEIGHT * 0.15 }}
                // containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <Image source={bookshelf} style={{ width: WIDTH, height: HEIGHT * 0.32, }} resizeMode='cover' />
            <Image source={dotintersection} style={{ position: "absolute", top: HEIGHT * 0.4, right: WIDTH * 0.2 }} resizeMode='contain' />
            <View style={{ marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.06 }}>
                <Text style={{ fontSize: 17, color: colors.darkred, }}>Higher Studies</Text>
                <Text style={{ fontSize: 15, color: colors.black, marginTop: HEIGHT * 0.02 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual . Lorem ipsum may be used as a placeholder before the final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </Text>
                <View style={{ marginTop: HEIGHT * 0.05 }}>
                    <CalenderComponent />
                </View>
            </View>
        </View>
    )
}

export default HigherStudyScreen