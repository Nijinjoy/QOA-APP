import { View, Text, Image, FlatList, Pressable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { arrowintersection, backarrow, certificates, diploma, higherstudy, nextarrow, programs } from '../assets/images'
import CalenderComponent from '../components/CalenderComponent'

const programFlatlist = [
    {
        id: 1,
        icon: higherstudy,
        title: 'Higher Studies',
        arrow: nextarrow,
        intersection: arrowintersection,
        background: colors.yellow,
        path: 'HigherStudyScreen'
    },
    {
        id: 2,
        icon: certificates,
        title: 'Certificates',
        arrow: nextarrow,
        intersection: arrowintersection,
        background: colors.skyblue,
        path: 'CertificateScreen'
    },
    {
        id: 3,
        icon: diploma,
        title: 'Diplomas',
        arrow: nextarrow,
        intersection: arrowintersection,
        background: colors.darkred,
        path: 'DiplomaScreen'
    },
]

const ProgramScreen = () => {
    const navigation = useNavigation()
    console.log("hight===>", HEIGHT * 0.36);

    return (
        <View>
            <HeaderComponent
                title="Programs"
                headerStyle={{ height: HEIGHT * 0.13 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <Image source={programs} style={{ width: WIDTH, height: HEIGHT * 0.32, }} resizeMode='cover' />
            <View style={{ position: 'absolute', width: WIDTH, justifyContent: "center", alignItems: 'center', top: HEIGHT * 0.4 }}>
                <CalenderComponent />
            </View>
            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <Text style={{ fontSize: 15, color: colors.black, marginTop: HEIGHT * 0.07 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual . Lorem ipsum may be used as a placeholder before the final copy is available.</Text>
                <FlatList
                    data={programFlatlist}
                    // showsVerticalScrollIndicator={false} 
                    scrollEnabled={false}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable onPress={() => navigation.navigate(item.path)} style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: item.background, flexDirection: 'row', alignItems: "center", padding: HEIGHT * 0.023, marginTop: HEIGHT * 0.01 }}>
                                <View style={{ marginHorizontal: WIDTH * 0.02, flex: 0.2 }}>
                                    <Image source={item.icon} style={{ width: WIDTH * 0.1 }} resizeMode='contain' />
                                </View>
                                <View style={{ flex: 0.7 }}>
                                    <Text style={{ color: colors.purewhite, fontSize: 15, fontWeight: "500" }}>{item.title}</Text>
                                </View>
                                <View>
                                    <View style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Image source={item.intersection} resizeMode='contain' />
                                    </View>
                                    <Image source={item.arrow} />
                                </View>
                            </Pressable>
                        )
                    }}
                />
            </View>
        </View >
    )
}

export default ProgramScreen