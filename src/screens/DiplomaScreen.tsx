import { View, Text, FlatList, Image, Pressable, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { backarrow, filter, olympics, programs } from '../assets/images'
import { useNavigation } from '@react-navigation/native'
import SearchComponent from '../components/SearchComponent'
import fetchData from './apiService'
import { timestampToDate } from '../constants/Helpers'
import HTML from 'react-native-render-html';

const DiplomaScreen = () => {
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [diploma, setDiploma] = useState([]);

    useEffect(() => {
        fetchDiploma();
    }, []);

    const fetchDiploma = async () => {
        setIsFetching(true);
        try {
            const body = { pager: page, keyword: '' };
            const response = await fetchData('/diploma', body);
            const newNewsData = response?.data || [];
            setDiploma(prevNews => [...prevNews, ...newNewsData]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching news data:', error);
        } finally {
            setIsFetching(false);
            console.log('Finished fetching news data.');
        }
    };

    const navigateToDetailScreen = (item) => {
        navigation.navigate('DiplomaDetailScreen', { nid: item.nid });
    };

    const renderListItem = (props) => {
        const { item } = props
        const registrationStartDate = timestampToDate(item.start_date);
        const registrationEndDate = timestampToDate(item.end_date);
        return (
            <Pressable onPress={() => navigateToDetailScreen(item)} style={{ borderWidth: 0.3, marginHorizontal: WIDTH * 0.05, borderRadius: WIDTH * 0.02, backgroundColor: colors.purewhite, marginTop: HEIGHT * 0.03, borderColor: `${colors.shadowcolor}25` }}>
                <View style={{ padding: HEIGHT * 0.03 }}>
                    <Image source={item.icon ? item.icon : olympics} />
                    <View style={{ borderBottomWidth: 1, borderBottomColor: colors.black, width: WIDTH * 0.7, marginTop: HEIGHT * 0.02 }}>
                        <Text style={{ fontSize: 16, fontWeight: '400', color: colors.black, width: WIDTH * 0.8 }}>{item.title}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignItems: 'center', marginTop: HEIGHT * 0.02 }}>
                        <View>
                            <Text style={{ fontSize: 13, color: colors.grey }}>{registrationStartDate} - <Text style={{ fontSize: 13, color: colors.grey }}>{registrationEndDate}</Text></Text>
                        </View>
                        <View style={{ marginLeft: WIDTH * 0.1 }}>
                            <Text style={{ fontSize: 13, color: colors.black }}>Qar <Text style={{ fontSize: 13, color: colors.darkred, fontWeight: 'bold' }}>{item?.price}</Text></Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: HEIGHT * 0.03 }}>
                        <Pressable style={{ borderWidth: 0.5, width: WIDTH * 0.35, padding: WIDTH * 0.02, justifyContent: 'center', alignItems: 'center', borderRadius: WIDTH * 0.01, borderColor: colors.grey }} onPress={() => { setModalVisible(true) }}>
                            <Text style={{ fontSize: 13, fontWeight: "500", color: colors.black }}>View Details</Text>
                        </Pressable>
                        <Pressable
                            onPress={() => navigation.navigate("CourseRegistrationScreen")}
                            style={{ borderWidth: 0, width: WIDTH * 0.35, padding: WIDTH * 0.02, justifyContent: 'center', alignItems: 'center', marginHorizontal: WIDTH * 0.05, borderRadius: WIDTH * 0.01, backgroundColor: colors.darkred }}>
                            <Text style={{ fontSize: 13, color: colors.purewhite, fontWeight: "bold" }}>Apply</Text>
                        </Pressable>
                    </View>
                </View>
            </Pressable >
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: `${colors.screenbackgrounnd}50` }}>
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
            <ScrollView style={{ marginTop: HEIGHT * 0.02 }} showsVerticalScrollIndicator={false}>
                <FlatList
                    data={diploma}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ marginTop: HEIGHT * 0.03 }}
                    keyExtractor={item => item.nid.toString()}
                    renderItem={renderListItem}
                />
            </ScrollView>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                style={{ flex: 1, backgroundColor: colors.green }}
                onDismiss={() => {
                    setModalVisible(false);
                }}
            >
                <Pressable onPress={() => setModalVisible(false)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: 'white', padding: HEIGHT * 0.02, borderRadius: WIDTH * 0.01, marginHorizontal: WIDTH * 0.05, width: WIDTH * 0.85, height: HEIGHT * 0.7, }}>
                        <ScrollView style={{ backgroundColor: colors.purewhite }} contentContainerStyle={{ flexGrow: 1 }}>
                            <View style={{ backgroundColor: colors.lightgrey, padding: WIDTH * 0.01, alignItems: 'center', borderRadius: WIDTH * 0.02 }}>
                                <Text style={{ fontSize: 14, color: colors.black, textAlign: 'center' }}>{diploma.length > 0 ? diploma[0].description : ''}</Text>
                            </View>
                            <HTML source={{ html: diploma.length > 0 ? diploma[0].detail : '' }} contentWidth={WIDTH * 0.6} />
                        </ScrollView >
                    </View>

                </Pressable>
            </Modal>

        </View >
    )
}

export default DiplomaScreen;