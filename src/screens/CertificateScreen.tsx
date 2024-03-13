import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { backarrow, filter, programs } from '../assets/images'
import SearchComponent from '../components/SearchComponent'
import CommonComponent from '../components/CommonComponent'
import fetchData from './apiService'
import InnerComponent from '../components/InnerComponent'
import { timestampToDate } from '../constants/Helpers'

const CertificateScreen = () => {
    const navigation = useNavigation()
    const [certificates, setCertificates] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    console.log("huhvgd====>", certificates);

    useEffect(() => {
        fetchCertificates();
    }, []);

    const fetchCertificates = async () => {
        setIsFetching(true);
        try {
            const body = { pager: page, keyword: '', category: '', type: "" };
            const response = await fetchData('/certificates', body);
            const newNewsData = response?.data || [];
            setCertificates(prevNews => [...prevNews, ...newNewsData]);
            setPage(prevPage => prevPage + 1);
        } catch (error) {
            console.error('Error fetching news data:', error);
        } finally {
            setIsFetching(false);
            console.log('Finished fetching news data.');
        }
    };

    return (
        <View style={{ backgroundColor: colors.lightgrey, flex: 1 }}>
            <HeaderComponent
                title="Certificates"
                headerStyle={{ height: HEIGHT * 0.17 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <SearchComponent
                containerStyle={{ position: 'absolute', width: WIDTH * 0.89, top: HEIGHT * 0.13, borderRadius: WIDTH * 0.02, backgroundColor: colors.purewhite, borderColor: colors.grey }} tintColor={colors.black} placeholderTextColor={colors.lightgrey}
                filterBackground={colors.darkred}
                filterLogo={filter}
            />
            <View style={{ marginTop: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.05 }}>
                <FlatList
                    data={certificates}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: HEIGHT * 0.15 }}
                    keyExtractor={(item) => item.nid.toString()}
                    renderItem={({ item, index }) => {
                        const startDate = timestampToDate(item.start_date);
                        const endDate = timestampToDate(item.end_date);
                        if (item.class_type === 'In Person') {
                            badgeColor = colors.yellow;
                        } else {
                            badgeColor = colors.darkred;
                        }
                        return (
                            <Pressable style={{ marginTop: HEIGHT * 0.03 }} onPress={() => navigation.navigate("CertificateDetailScreen", { imageUrl: item.image_url })}>
                                <CommonComponent
                                    imageUrl={item.image_url}
                                    date={item.category}
                                    title={item.title}
                                    innerComponent={<InnerComponent startDate={startDate} endDate={endDate} language="ENGLISH" />}
                                    badgeText={item.class_type === 'In Person' ? 'In Person' : 'Online'}
                                    badgeColor={badgeColor}
                                    containerStyle={{ width: WIDTH * 0.89 }}
                                />
                            </Pressable>
                        )
                    }}
                />
            </View>
        </View>
    )
}

export default CertificateScreen