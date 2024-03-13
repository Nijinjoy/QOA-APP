import { View, Text, FlatList, Pressable, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import CarouselHeaderComponent from '../components/CarouselHeaderComponent'
import { diploma, nextarrow, programs } from '../assets/images'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import CourseComponent from '../components/CourseComponent'
import fetchData from './apiService'
import { useNavigation, useRoute } from '@react-navigation/native'
import { timestampToDate } from '../constants/Helpers'
import LoaderComponent from '../components/LoaderComponent'

const DiplomaDetailScreen = () => {
    const navigation = useNavigation()
    const [page, setPage] = useState(0);
    const route = useRoute();
    const { nid } = route.params
    const [diplomaDetail, setDiplomaDetail] = useState({});
    const [loading, setLoading] = useState(false);
    const [modules, setModules] = useState([]);

    console.log("diplomaDetails==>", diplomaDetail);
    console.log("modules===>", modules);

    useEffect(() => {
        fetchDiplomaDetail();
    }, [nid]);

    const fetchDiplomaDetail = async () => {
        try {
            setLoading(true);
            const data = await fetchData('/diploma-detail', { nid: nid });
            console.log("apiresponse==>", JSON.stringify(data));
            if (data && data.status && data.data) {
                setDiplomaDetail(data?.data);
                setModules(data?.data?.modules);
            }
        } catch (error) {
            console.error('Error fetching diploma detail:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <LoaderComponent />;
    }

    console.log("log==>", diplomaDetail?.diploma?.start_date);
    const renderBackgroundImage = () => {
        if (!backgroundImage) {
            return programs;
        }
        return { uri: backgroundImage };
    };

    return (
        <View style={{ flex: 0 }}>
            <CarouselHeaderComponent
                backgroundcolor={`${colors.white}50`}
                backgroundImage={programs}
            />
            {Object.keys(diplomaDetail).length !== 0 && (
                <View style={{ justifyContent: "center", alignItems: 'center', bottom: HEIGHT * 0.05 }}>
                    <CourseComponent
                        moduleCount={diplomaDetail?.diploma?.total_modules}
                        courseName={diplomaDetail?.diploma?.title}
                        coursePrice={diplomaDetail?.diploma?.price}
                        startDate={timestampToDate(diplomaDetail?.diploma?.start_date)}
                        endDate={timestampToDate(diplomaDetail?.diploma?.end_date)}
                    />
                </View>
            )}
            <View style={{ backgroundColor: colors.purewhite }}>
                <View style={{ backgroundColor: colors.purewhite, marginHorizontal: WIDTH * 0.05 }}>
                    <Text style={{ fontSize: 16, color: colors.darkred, fontWeight: '500', marginHorizontal: WIDTH * 0.03, marginTop: HEIGHT * 0.02 }}>Modules</Text>
                    <ScrollView >
                        <FlatList
                            data={modules}
                            style={{ flex: 1 }}
                            keyExtractor={item => item.id.toString()}
                            contentContainerStyle={{ flexGrow: 1 }}
                            renderItem={({ item }) => {
                                return (
                                    <Pressable onPress={() => navigation.navigate("CertificateDetailScreen")} style={{ flexDirection: 'row', padding: HEIGHT * 0.02, alignItems: 'center', paddingBottom: 20 }}>
                                        <View style={{ flex: 0.9 }}>
                                            <Text style={{ fontSize: 13, color: colors.black, width: WIDTH * 0.6 }}>{item.title}</Text>
                                            <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.01 }}>
                                                <Text style={{ fontSize: 13, color: colors.grey }}>{timestampToDate(item.start_date)}</Text>
                                                <Text style={{ marginLeft: WIDTH * 0.02, fontSize: 13, color: colors.grey }}>{timestampToDate(item.end_date)}</Text>
                                            </View>
                                        </View>
                                        <Pressable style={{ flex: 0.1, width: WIDTH * 0.1, height: WIDTH * 0.1, justifyContent: 'center', alignItems: 'center', borderRadius: WIDTH * 0.01, backgroundColor: `${colors.grey}25` }}>
                                            <Image source={nextarrow} tintColor={colors.darkred} style={{ width: WIDTH * 0.06, height: HEIGHT * 0.02 }} resizeMode='contain' />
                                        </Pressable>
                                    </Pressable>
                                )
                            }}
                        />
                    </ScrollView>
                </View>
            </View>
        </View >
    )
}

export default DiplomaDetailScreen