import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { backarrow, filter, programs } from '../assets/images'
import SearchComponent from '../components/SearchComponent'
import CommonComponent from '../components/CommonComponent'

const CertificateScreen = () => {
    const navigation = useNavigation()
    console.log("hu777==>", HEIGHT * 0.22);

    const data = [
        {
            id: '1',
            imageUrl: programs,
            category: 'In publishing and graphic design Lorem ipsum is a placeholder',
            title: 'Organising and Managing Asian Games',
            date: '2-6 Jan, 2022',
            language: 'ENGLISH',
        },
        {
            id: '2',
            imageUrl: programs,
            category: 'In publishing and graphic design Lorem ipsum is a placeholder',
            title: 'Organising and Managing Asian Games',
            date: '2-6 Jan, 2022',
            language: 'ENGLISH',
        },
        {
            id: '3',
            imageUrl: programs,
            category: 'In publishing and graphic design Lorem ipsum is a placeholder',
            title: 'Organising and Managing Asian Games',
            date: '2-6 Jan, 2022',
            language: 'ENGLISH',
        },
    ];

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
            <View style={{ marginTop: 40, marginHorizontal: WIDTH * 0.05 }}>
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 90 }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={{ marginTop: HEIGHT * 0.03 }} onPress={() => navigation.navigate("CertificateDetailScreen")}>
                                <CommonComponent
                                    imageUrl={item.imageUrl}
                                    category={item.category}
                                    title={item.title}
                                    date={item.date}
                                    language={item.language}
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