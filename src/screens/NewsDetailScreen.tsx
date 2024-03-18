import { View, Text, ImageBackground, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import CarouselHeaderComponent from '../components/CarouselHeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { backarrow } from '../assets/images'
import fetchData from './apiService'
import HTML from 'react-native-render-html';
import { timestampToDate } from '../constants/Helpers'

const NewsDetailScreen = () => {
    const navigation = useNavigation()
    const route = useRoute();
    const { nid } = route.params;
    const [newsDetail, setNewsDetail] = useState({});
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchNewsDetail();
    }, [nid, page]);

    const fetchNewsDetail = async () => {
        try {
            setLoading(true);
            const data = await fetchData('/news-detail', { id: nid });
            if (data && data.status && data.data) {
                const { title, description, image_url, date, nid } = data?.data;
                setNewsDetail({ title, description, image_url, date, nid });
                // setBackgroundImage(image_url);
            }
        } catch (error) {
            console.error('Error fetching media detail:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={{ backgroundColor: colors.purewhite, flex: 1 }}>
            <CarouselHeaderComponent
                backgroundcolor={`${colors.shadowcolor}25`}

                backgroundImage={{ uri: newsDetail?.image_url }}
            />
            <View style={{}}>
                {newsDetail && Object.keys(newsDetail).length > 0 && (
                    <FlatList
                        data={[newsDetail]}
                        contentContainerStyle={{ paddingBottom: HEIGHT * 0.15 }}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => {
                            const startDate = timestampToDate(item?.date);
                            return (
                                <View style={{ margin: WIDTH * 0.05 }}>
                                    <Text style={{ color: colors.blue, fontSize: 12 }}>{startDate}</Text>
                                    <Text style={{ color: colors.black, fontSize: 18, marginTop: HEIGHT * 0.01 }}>{item?.title}</Text>
                                    <HTML
                                        source={{ html: item?.description }}
                                        contentWidth={WIDTH * 0.9}
                                        style={{ color: colors.btnbackground, fontSize: 15, marginTop: HEIGHT * 0.013, lineHeight: HEIGHT * 0.01 }}
                                    />
                                </View>
                            )
                        }}
                    />
                )}
            </View>

        </View>
    )
}

export default NewsDetailScreen