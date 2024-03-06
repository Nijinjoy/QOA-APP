import { View, Text, Pressable, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { useNavigation } from '@react-navigation/native'
import { backarrow, programs } from '../assets/images'
import colors from '../constants/Colors'
import API_CONFIG from './apiConfig'
import fetchData from './apiService'

const MediaScreen = () => {
    const navigation = useNavigation()
    const [selectedTab, setSelectedTab] = useState('video');
    const [mediaData, setMediaData] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchMediaData();
    }, [page]);

    const fetchMediaData = async () => {
        setIsLoading(true);
        try {
            const responseData = await fetchData(`/media?page=${page}`);
            const newData = responseData?.data ?? [];
            const filteredData = newData.filter(newItem => !mediaData.find(existingItem => existingItem.nid === newItem.nid));
            setMediaData(prevData => [...prevData, ...filteredData]);
        } catch (error) {
            console.error('Error fetching media data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleTabPress = (tab) => {
        setSelectedTab(tab);
    };

    const navigateToDetailScreen = (item) => {
        navigation.navigate('MediaDetailScreen', { nid: item.nid });
    };

    const handleLoadMore = () => {
        if (!isLoading) {
            setPage(page => page + 1);
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent
                title="Media"
                headerStyle={{ height: HEIGHT * 0.15 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />

            <View style={{ borderWidth: 0, marginTop: HEIGHT * 0.02, flexDirection: 'row', padding: 2, backgroundColor: `${colors.btnbackground}50`, borderRadius: WIDTH * 0.01, marginHorizontal: WIDTH * 0.05 }}>
                <Pressable style={{ borderWidth: 0, flex: 0.5, padding: 5, margin: 2, justifyContent: "center", alignItems: 'center', backgroundColor: selectedTab === 'video' ? colors.purewhite : `${colors.btnbackground}15`, borderRadius: WIDTH * 0.01 }} onPress={() => handleTabPress('video')}>
                    <Text style={{ fontSize: 15, color: selectedTab === 'video' ? colors.blue : colors.black }}>Video Gallery</Text>
                </Pressable>
                <Pressable style={{ borderWidth: 0, flex: 0.5, padding: 5, margin: 2, justifyContent: "center", alignItems: 'center', backgroundColor: selectedTab === 'image' ? colors.purewhite : `${colors.btnbackground}15`, borderRadius: WIDTH * 0.01 }} onPress={() => handleTabPress('image')}>
                    <Text style={{ fontSize: 15, color: selectedTab === 'image' ? colors.blue : colors.black }}>Image Gallery</Text>
                </Pressable>
            </View>
            {/* <ScrollView> */}
            <View style={{ marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.03, flex: 1 }}>
                {selectedTab === 'image' && (
                    <FlatList
                        data={mediaData}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: HEIGHT * 0.02 }}
                        keyExtractor={(item) => item.nid.toString()}
                        renderItem={({ item }) => {
                            console.log("mediaData==>", mediaData);
                            return (
                                <Pressable style={{ borderRadius: WIDTH * 0.015, backgroundColor: colors.purewhite, marginVertical: 10 }} onPress={() => navigateToDetailScreen(item)}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Image source={{ uri: item.images[0] }} style={{ width: WIDTH * 0.65, height: HEIGHT * 0.23, borderTopLeftRadius: WIDTH * 0.015, borderTopRightRadius: WIDTH * 0.015, marginRight: WIDTH * 0.01 }} resizeMode='cover' />
                                        <View style={{ flexDirection: 'column', flex: 1 }}>
                                            <Image source={{ uri: item.images[1] }} style={{ flex: 0.3, width: WIDTH * 0.35, height: HEIGHT * 0.12, borderRadius: WIDTH * 0.01, marginBottom: HEIGHT * 0.01, borderTopRightRadius: WIDTH * 0.015 }} resizeMode='cover' />
                                            <Image source={{ uri: item.images[2] }} style={{ flex: 0, borderRadius: WIDTH * 0.01, width: WIDTH * 0.35, height: HEIGHT * 0.1 }} resizeMode='cover' />
                                        </View>
                                    </View>
                                    <View style={{ margin: WIDTH * 0.04, marginHorizontal: WIDTH * 0.06 }}>
                                        <Text style={{ color: colors.blue, fontSize: 12 }}>{item.date}</Text>
                                        <Text style={{ color: colors.black, fontSize: 16, marginTop: HEIGHT * 0.01 }}>{item.title}</Text>
                                    </View>

                                    <View style={{ position: "absolute", top: HEIGHT * 0.12, left: WIDTH * 0.07, borderRadius: WIDTH * 0.02 }}>
                                        <View style={{ backgroundColor: colors.white, width: WIDTH * 0.18, height: HEIGHT * 0.09, borderRadius: WIDTH * 0.01 }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                                                <Text style={{ fontSize: 16, color: colors.red }}>{item.count}</Text>
                                                <Text style={{ fontSize: 10, color: colors.black }}>Photos</Text>
                                            </View>
                                        </View>
                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                )}
            </View>
            {/* </ScrollView> */}
        </View>
    )
}

export default MediaScreen