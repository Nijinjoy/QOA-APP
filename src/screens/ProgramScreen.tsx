import { View, Text, Image, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { arrowintersection, backarrow, bookshelf, certificates, diploma, higherstudy, nextarrow, programs } from '../assets/images'
import CalenderComponent from '../components/CalenderComponent'
import fetchData from './apiService'

const programFlatlist = [
    {
        id: 1,
        icon: higherstudy,
        title: 'Higher Studies',
        arrow: nextarrow,
        intersection: arrowintersection,
        background: colors.yellow,
        path: 'HigherStudyScreen'
    },
    {
        id: 2,
        icon: certificates,
        title: 'Certificates',
        arrow: nextarrow,
        intersection: arrowintersection,
        background: colors.skyblue,
        path: 'CertificateScreen'
    },
    {
        id: 3,
        icon: diploma,
        title: 'Diplomas',
        arrow: nextarrow,
        intersection: arrowintersection,
        background: colors.darkred,
        path: 'DiplomaScreen'
    },
]

const ProgramScreen = () => {
    const navigation = useNavigation()
    const [programs, setPrograms] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [programDescriptions, setProgramDescriptions] = useState({});

    console.log("programs==>", programs);

    useEffect(() => {
        fetchPartner();
    }, []);

    const fetchPartner = async () => {
        try {
            setLoading(true);
            const body = { "page": "our_programs" };
            const data = await fetchData('/about-us', body);
            if (data && data.status && data.data) {
                setPrograms(data?.data);
                setProgramDescriptions(data.programs);
            }
        } catch (error) {
            console.error('Error fetching aboutUs detail:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent
                headerTitle="Programs"
                containerStyle={{ height: HEIGHT * 0.14 }}
                iconBackground={`${colors.lightwhite}25`}
                // containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <ScrollView style={{ paddingBottom: HEIGHT * 0.1 }}>
                <Image source={bookshelf} style={{ width: WIDTH, height: HEIGHT * 0.32 }} resizeMode='cover' />
                <View style={{ position: 'absolute', width: WIDTH, justifyContent: "center", alignItems: 'center', top: HEIGHT * 0.27, paddingBottom: HEIGHT * 0.03 }}>
                    <CalenderComponent
                        downloadTitle={programs?.content?.download_title}
                        linkText={programs?.content?.link_text}
                    />
                </View>
                <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                    <Text style={{ fontSize: 14, color: colors.black, marginTop: HEIGHT * 0.07 }}>{programs?.programs?.higher_studies?.description}</Text>
                    <FlatList
                        data={programFlatlist}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable onPress={() => navigation.navigate(item.path)} style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: item.background, flexDirection: 'row', alignItems: "center", padding: HEIGHT * 0.023, marginTop: HEIGHT * 0.015 }}>
                                    <View style={{ marginHorizontal: WIDTH * 0.02, flex: 0.2 }}>
                                        <Image source={item.icon} style={{ width: WIDTH * 0.1 }} resizeMode='contain' />
                                    </View>
                                    <View style={{ flex: 0.7 }}>
                                        <Text style={{ color: colors.purewhite, fontSize: 15, fontWeight: "500" }}>{item.title}</Text>
                                    </View>
                                    <View>
                                        <View style={{ position: 'absolute', zIndex: -1, top: 0, left: 0, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image source={item.intersection} resizeMode='contain' />
                                        </View>
                                        <Image source={item.arrow} />
                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                </View>
            </ScrollView >
        </View >
    )
}

export default ProgramScreen