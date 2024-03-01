import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { backarrow, filter, programs } from '../assets/images'
import SearchComponent from '../components/SearchComponent'
import CommonComponent from '../components/CommonComponent'

const LatestNewsScreen = () => {
    const navigation = useNavigation()

    const data = [
        {
            id: '1',
            imageUrl: programs,
            category: 'In publishing and graphic design, Lorem ipsum is a placeholder  ',
            title: '2_6 June 2022',
            // date: '26 June 2022'
        },
        {
            id: '2',
            imageUrl: programs,
            category: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly  ',
            title: '2_6 June 2022',
            date: '26 June 2022'
        },
        {
            id: '3',
            imageUrl: programs,
            category: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the v',
            title: '26 June 2022',
            date: '26 June 2022'
        },
    ];

    return (
        <View>
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
            <Pressable style={{ marginTop: 40, marginHorizontal: WIDTH * 0.02 }} >
                <FlatList
                    data={data}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 90, alignItems: "center", justifyContent: "center", marginTop: HEIGHT * 0.0 }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={{ marginTop: HEIGHT * 0.02, marginHorizontal: WIDTH * 0.05 }} onPress={() => navigation.navigate("NewsDetailScreen")}>
                                <CommonComponent
                                    imageUrl={item.imageUrl}
                                    category={item.category}
                                    title={item.title}
                                    date={item.date}
                                // language={item.language}
                                />
                            </Pressable>
                        )
                    }}
                />
            </Pressable>
        </View >
    )
}

export default LatestNewsScreen