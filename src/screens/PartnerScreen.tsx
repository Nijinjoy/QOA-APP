import { View, Text, FlatList, ScrollView, Pressable, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { backarrow } from '../assets/images'
import fetchData from './apiService'
import LinkComponent from '../components/LinkComponent'

const topbarFlatlist = [
    {
        id: 1,
        title: "Organisation Partners"
    },
    {
        id: 2,
        title: "National Partners"
    },
    {
        id: 3,
        title: "Acadamic Partners"
    },
    {
        id: 4,
        title: "International Partners"
    }
]

const PartnerScreen = (props) => {
    const navigation = useNavigation()
    const [loading, setLoading] = useState(false);
    const [partners, setPartners] = useState([]);
    const [activeCategory, setActiveCategory] = useState(1);

    // console.log("partners==>", partners);
    console.log("hight==>", HEIGHT * 0.13);


    useEffect(() => {
        fetchPartner();
    }, []);

    const fetchPartner = async () => {
        try {
            setLoading(true);
            const body = { "page": "partners" };
            const data = await fetchData('/about-us', body);
            if (data && data.status && data.data && data.data.content && data.data.content.partners) {
                setPartners(data.data.content.partners);
            }
        } catch (error) {
            console.error('Error fetching aboutUs detail:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCategoryPress = (category) => {
        setActiveCategory(category);
    };


    return (
        <View style={{ flex: 1 }}>
            <HeaderComponent
                title="Our Partners"
                headerStyle={{ height: HEIGHT * 0.15 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.045, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                iconStyle={{ width: WIDTH * 0.04, height: HEIGHT * 0.02 }}
                icon={backarrow} />
            <ScrollView style={{ marginHorizontal: WIDTH * 0.0, flex: 1 }}>
                <FlatList
                    data={topbarFlatlist}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Pressable onPress={() => handleCategoryPress(item.id)} style={{ marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.04 }}>
                                <Text style={{ fontSize: 16, color: activeCategory === item.id ? colors.darkred : colors.black }}>{item.title}</Text>
                                <View
                                    style={{
                                        borderWidth: 2,
                                        width: WIDTH * 0.1,
                                        borderColor: activeCategory === item.id ? colors.darkred : 'transparent', marginTop: HEIGHT * 0.01
                                    }}
                                />
                            </Pressable>
                        )
                    }}
                />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: HEIGHT * 0.03, marginLeft: WIDTH * 0.07 }}>
                    {activeCategory !== null && partners[activeCategory] && partners[activeCategory].data.map(partner => (
                        <View key={partner.name} style={{ marginRight: WIDTH * 0.05 }}>
                            <View style={{ width: WIDTH * 0.4, marginBottom: 60, height: HEIGHT * 0.15, borderWidth: 1, backgroundColor: colors.purewhite, borderColor: colors.lightgrey, borderRadius: WIDTH * 0.02 }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={{ uri: partner.image }} style={{ width: WIDTH * 0.25, height: HEIGHT * 0.15 }} resizeMode='contain' />
                                </View>
                                <Text style={{ width: WIDTH * 0.4, textAlign: 'center', marginTop: HEIGHT * 0.01 }}>{partner.name}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{ justifyContent: "center", alignItems: 'center', paddingBottom: HEIGHT * 0.03 }}>
                    <LinkComponent />
                </View>
            </ScrollView>
        </View>
    )
}

export default PartnerScreen
