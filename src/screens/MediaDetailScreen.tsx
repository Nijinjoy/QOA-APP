import { View, Text, FlatList, Image, Pressable, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { useNavigation, useRoute } from '@react-navigation/native'
import { backarrow, programs } from '../assets/images'
import colors from '../constants/Colors'
import CarouselHeaderComponent from '../components/CarouselHeaderComponent'
import fetchData from './apiService'

const MediaDetailScreen = () => {
    const navigation = useNavigation()
    const route = useRoute();
    const { nid } = route.params;
    const [mediaDetail, setMediaDetail] = useState({});
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    // useEffect(() => {
    //     fetchMediaDetail();
    // }, [nid, page]);

    useEffect(() => {
        fetchMediaDetail();
    }, []);


    console.log("newsDetail==>", mediaDetail);

    const fetchMediaDetail = async () => {
        try {
            setLoading(true);
            const data = await fetchData('/media-detail', { nid: nid });
            if (data && data.status && data.data) {
                const { title, description, image_url, date, nid } = data.data;
                setMediaDetail({ title, description, image_url, date, nid });
            }
        } catch (error) {
            console.error('Error fetching media detail:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleEndReached = () => {
        if (!loading && page < totalPages) {
            setPage(page + 1);
        }
    };

    const getRandomSize = () => {
        const screenWidth = Dimensions.get('window').width;
        const screenHeight = Dimensions.get('window').height;

        const widthPercentage = Math.floor(Math.random() * 20 + 30);
        const heightPercentage = Math.floor(Math.random() * 20 + 20);

        const width = (screenWidth * widthPercentage) / 100;
        const height = (screenHeight * heightPercentage) / 100;
        return { width, height };
    };

    return (
        <View style={{ flex: 1 }}>
            <CarouselHeaderComponent
                backArrow={backarrow}
                backgroundImage={mediaDetail?.image_url[0]}
                title={mediaDetail?.title}
                date={mediaDetail?.date}
                photos="Photos"
                onPress={() => navigation.goBack()}
            />
            <View style={{ marginHorizontal: WIDTH * 0.05, paddingBottom: HEIGHT * 0.02, paddingTop: HEIGHT * 0.02 }}>
                <FlatList
                    data={mediaDetail?.image_url}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        console.log("data===>", item);
                        const { width, height } = getRandomSize();
                        return (
                            <Pressable style={{ borderRadius: WIDTH * 0.02, marginBottom: HEIGHT * 0.015, margin: 1 }}>
                                <Image
                                    source={{ uri: item }}
                                    style={{ width: width, height: width, borderRadius: WIDTH * 0.03 }}
                                    resizeMode="cover"
                                />
                            </Pressable>
                        )
                    }}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.1}
                />
            </View>
        </View>
    )
}

export default MediaDetailScreen

    // const fetchMediaDetail = async () => {
    //     try {
    //         setLoading(true);
    //         const data = await fetchData('/media-detail', { nid: nid, page: page });
    //         if (data) {
    //             if (page === 1) {
    //                 setMediaDetail(data);
    //                 setBackgroundImage(data?.data);
    //             } else {
    //                 setMediaDetail(prevData => ({ ...prevData, data: [...prevData.data, ...data.data] }));
    //             }
    //             setTotalPages(data.totalPages);
    //         }
    //     } catch (error) {
    //         console.error('Error fetching media detail:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };