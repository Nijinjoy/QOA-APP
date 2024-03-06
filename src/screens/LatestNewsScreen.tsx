import { View, Text, FlatList, Pressable, ActivityIndicator } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { backarrow, filter, programs } from '../assets/images'
import SearchComponent from '../components/SearchComponent'
import CommonComponent from '../components/CommonComponent'
import fetchData from './apiService'

const LatestNewsScreen = () => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true);
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [isFetching, setIsFetching] = useState(false);

    console.log("news===>", news);

    useEffect(() => {
        fetchNewsData();
    }, [isFetching]);

    const fetchNewsData = async () => {

        setIsFetching(true);
        try {
            const body = { keyword: '', pager: page };
            const response = await fetchData('/news', body);
            const newNewsData = response?.data || [];
            setNews(prevNews => [...prevNews, ...newNewsData]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching news data:', error);
        } finally {
            setIsFetching(false);
            console.log('Finished fetching news data.');
        }
    };

    const handleEndReached = () => {
        if (!isFetching) {
            fetchNewsData();
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent
                title="Latest News"
                headerStyle={{ height: HEIGHT * 0.17 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow}
            />
            <View style={{ position: 'absolute', top: HEIGHT * 0.13, width: '100%', paddingHorizontal: WIDTH * 0.05, alignItems: 'center', zIndex: 1, }}>
                <SearchComponent
                    containerStyle={{ width: '100%', borderRadius: WIDTH * 0.02, backgroundColor: colors.purewhite, borderColor: colors.grey }}
                    tintColor={colors.black}
                    placeholderTextColor={colors.lightgrey}
                />
            </View>
            <Pressable onPress={() => navigation.navigate("NewsDetailScreen")} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <FlatList
                    data={news}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: "center", justifyContent: "center", paddingTop: HEIGHT * 0.034 }}
                    keyExtractor={(item, index) => item.nid.toString() + index}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={{ marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.05 }} onPress={() => navigation.navigate("NewsDetailScreen")}>
                                <CommonComponent
                                    imageUrl={item.image_url}
                                    title={item.title}
                                />
                            </Pressable>
                        )
                    }}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={isFetching && <ActivityIndicator size='small' color={colors.red} />}
                />
            </Pressable>
        </View >
    )
}

export default LatestNewsScreen