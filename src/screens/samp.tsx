import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { backarrow, olympics } from '../assets/images'
import { useNavigation } from '@react-navigation/native'
import SearchComponent from '../components/SearchComponent'

const diplomaflatlist = [
    {
        id: 1,
        icon: olympics,
        title: 'Advanced Sport Management Course',
        daterange: "16 Jan 2022 - 18 Jan 2023",
        price: '1089',
    },
    {
        id: 2,
        icon: olympics,
        title: 'Advanced Sport Management Course',
        daterange: "16 Jan 2022 - 18 Jan 2023",
        price: '1089',
    },
    {
        id: 3,
        icon: olympics,
        title: 'Advanced Sport Management Course',
        daterange: "16 Jan 2022 - 18 Jan 2023",
        price: '1089',
    },
    {
        id: 4,
        icon: olympics,
        title: 'Advanced Sport Management Course',
        daterange: "16 Jan 2022 - 18 Jan 2023",
        price: '1089',
    }
]
const DiplomaScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: colors.screenbackgrounnd }}>
            <View>
                <HeaderComponent
                    title="Certificates"
                    headerStyle={{ height: HEIGHT * 0.17 }}
                    containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                    onPress={() => navigation.goBack()}
                    icon={backarrow} />
                <SearchComponent
                    containerStyle={{ position: 'absolute', width: WIDTH * 0.89, top: HEIGHT * 0.13, borderRadius: WIDTH * 0.02, backgroundColor: colors.purewhite, borderColor: colors.grey }} tintColor={colors.black} placeholderTextColor={colors.lightgrey} />
            </View>
            <FlatList
                data={diplomaflatlist}
                contentContainerStyle={{ paddingTop: HEIGHT * 0.05, paddingBottom: HEIGHT * 0.05 }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <View style={{ borderWidth: 0, marginHorizontal: WIDTH * 0.05, borderRadius: WIDTH * 0.02, backgroundColor: colors.white, marginTop: HEIGHT * 0.03 }}>
                            <View style={{ padding: HEIGHT * 0.03 }}>
                                <Image source={olympics} />
                                <Text style={{ fontSize: 16, fontWeight: '400', color: colors.black, marginTop: HEIGHT * 0.02, width: WIDTH * 0.7 }}>{item.title}</Text>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Text style={{ fontSize: 13, fontWeight: '400', color: colors.black, marginTop: HEIGHT * 0.02 }}>{item.daterange}</Text>
                                    <View />
                                    <Text style={{ fontSize: 13, color: colors.black, marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.1 }}>Qar<Text style={{ fontSize: 13, color: colors.darkred, fontWeight: "bold" }}> {item.price}</Text></Text>
                                </View>
                                <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.03 }}>
                                    <Pressable style={{ borderWidth: 0.5, width: WIDTH * 0.35, padding: WIDTH * 0.02, justifyContent: 'center', alignItems: 'center', borderRadius: WIDTH * 0.01, borderColor: colors.grey }}>
                                        <Text style={{ fontSize: 13, fontWeight: "500", color: colors.black }}>View Details</Text>
                                    </Pressable>
                                    <Pressable style={{ borderWidth: 0, width: WIDTH * 0.35, padding: WIDTH * 0.02, justifyContent: 'center', alignItems: 'center', marginHorizontal: WIDTH * 0.05, borderRadius: WIDTH * 0.01, backgroundColor: colors.darkred }}>
                                        <Text style={{ fontSize: 13, color: colors.purewhite, fontWeight: "bold" }}>Apply</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default DiplomaScreen