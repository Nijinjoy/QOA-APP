import { View, Text, FlatList, Pressable, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import CarouselHeaderComponent from '../components/CarouselHeaderComponent'
import { nextarrow, programs } from '../assets/images'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import CourseComponent from '../components/CourseComponent'
import fetchData from './apiService'
import { useRoute } from '@react-navigation/native'

const moduleFlatlist = [
    {
        id: 1,
        name: "Module 7 - Final Presentations",
        date: "15-17 Oct,2024",
        nextarrow: nextarrow
    },
    {
        id: 2,
        name: "Module 7 - Final Presentations",
        date: "15-17 Oct,2024",
        nextarrow: nextarrow
    }
]

const DiplomaDetailScreen = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(0);
    const route = useRoute();
    const { nid } = route.params;
    const [loading, setLoading] = useState(true);
    const [diplomaDetails, setDiplomaDetails] = useState({});

    console.log("diplomaDetails==>", diplomaDetails);
    console.log("diplomaDetails==>", nid);

    useEffect(() => {
        fetchDiplomaDetails();
    }, [nid, page]);

    const fetchDiplomaDetails = async () => {
        try {
            setLoading(true);
            const data = await fetchData('/diploma-detail', { nid: nid });
            if (data && data.status && data.data) {
                const { title, description, image_url, date, nid } = data?.data;
                setDiplomaDetails({ title, description, image_url, date, nid });
            }
        } catch (error) {
            console.error('Error fetching media detail:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <CarouselHeaderComponent
                backgroundImage={programs}
                backgroundcolor={`${colors.white}50`}
            />
            <View style={{ justifyContent: "center", alignItems: 'center', bottom: HEIGHT * 0.05 }}>
                <CourseComponent />
            </View>
            <View style={{ backgroundColor: colors.purewhite, marginBottom: HEIGHT * 0.1 }}>
                <View style={{ backgroundColor: colors.purewhite, marginHorizontal: WIDTH * 0.05 }}>
                    <Text style={{ fontSize: 16, color: colors.darkred, fontWeight: '500', marginHorizontal: WIDTH * 0.03, marginTop: HEIGHT * 0.02 }}>Modules</Text>
                    <FlatList
                        data={moduleFlatlist}
                        keyExtractor={item => item.id.toString()}
                        contentContainerStyle={{ flexGrow: 1 }}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ borderWidth: 0, flexDirection: 'row', padding: HEIGHT * 0.02 }}>
                                    <View style={{ flex: 0.85 }}>
                                        <Text style={{ fontSize: 13, color: colors.black }}>{item.name}</Text>
                                        <Text style={{ fontSize: 13, color: colors.grey, marginTop: HEIGHT * 0.01 }}>{item.date}</Text>
                                    </View>
                                    <Pressable style={{ flex: 0.15, width: WIDTH * 0.03, height: WIDTH * 0.1, justifyContent: 'center', alignItems: 'center', borderRadius: WIDTH * 0.01, backgroundColor: `${colors.grey}25` }}>
                                        <Image source={nextarrow} tintColor={colors.darkred} style={{ width: WIDTH * 0.1, height: HEIGHT * 0.02 }} resizeMode='contain' />
                                    </Pressable>
                                </View>
                            )
                        }}
                    />
                </View>
            </View>
        </View >
    )
}

export default DiplomaDetailScreen