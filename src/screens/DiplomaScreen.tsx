import { View, Text, ScrollView, FlatList, Image, Pressable, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { backarrow, filter, olympics } from '../assets/images'
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
    const [modalVisible, setModalVisible] = useState(false);

    const renderListItem = (props) => {
        const { item } = props
        return (
            <View style={{ borderWidth: 0, marginHorizontal: WIDTH * 0.05, borderRadius: WIDTH * 0.02, backgroundColor: colors.white, marginTop: HEIGHT * 0.03 }}>
                <View style={{ padding: HEIGHT * 0.03 }}>
                    <Image source={item.icon} />
                    <Text style={{ fontSize: 16, fontWeight: '400', color: colors.black, marginTop: HEIGHT * 0.02, width: WIDTH * 0.7 }}>{item.title}</Text>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={{ fontSize: 13, fontWeight: '400', color: colors.black, marginTop: HEIGHT * 0.02 }}>{item.daterange}</Text>
                        <View />
                        <Text style={{ fontSize: 13, color: colors.black, marginTop: HEIGHT * 0.02, marginLeft: WIDTH * 0.1 }}>Qar<Text style={{ fontSize: 13, color: colors.darkred, fontWeight: "bold" }}> {item.price}</Text></Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.03 }}>
                        <Pressable style={{ borderWidth: 0.5, width: WIDTH * 0.35, padding: WIDTH * 0.02, justifyContent: 'center', alignItems: 'center', borderRadius: WIDTH * 0.01, borderColor: colors.grey }} onPress={() => { setModalVisible(true) }}>
                            <Text style={{ fontSize: 13, fontWeight: "500", color: colors.black }}>View Details</Text>
                        </Pressable>
                        <Pressable style={{ borderWidth: 0, width: WIDTH * 0.35, padding: WIDTH * 0.02, justifyContent: 'center', alignItems: 'center', marginHorizontal: WIDTH * 0.05, borderRadius: WIDTH * 0.01, backgroundColor: colors.darkred }}>
                            <Text style={{ fontSize: 13, color: colors.purewhite, fontWeight: "bold" }}>Apply</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: colors.screenbackgrounnd }}>
            <HeaderComponent
                title="Diploma"
                headerStyle={{ height: HEIGHT * 0.17 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow}
            />
            <View style={{ position: 'absolute', top: HEIGHT * 0.13, width: '100%', paddingHorizontal: WIDTH * 0.05, alignItems: 'center' }}>
                <SearchComponent
                    containerStyle={{ width: '100%', borderRadius: WIDTH * 0.02, backgroundColor: colors.purewhite, borderColor: colors.grey }}
                    tintColor={colors.black}
                    placeholderTextColor={colors.lightgrey}
                    filterBackground={colors.darkred}
                    filterLogo={filter}
                />
            </View>
            <ScrollView style={{ marginTop: HEIGHT * 0.02 }}>
                <FlatList
                    data={diplomaflatlist}
                    contentContainerStyle={{ marginTop: HEIGHT * 0.03 }}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderListItem}
                />
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(false);
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    onPress={() => setModalVisible(false)}
                >
                    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: WIDTH * 0.01, marginHorizontal: WIDTH * 0.05 }}>
                        <View style={{ backgroundColor: colors.lightgrey, padding: WIDTH * 0.01, alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: colors.black, textAlign: 'center' }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document </Text>
                        </View>
                        <Text style={{ textAlign: 'center' }}>Admission Requirements</Text>
                    </View>
                </TouchableOpacity>
            </Modal>

        </View>
    )
}

export default DiplomaScreen;