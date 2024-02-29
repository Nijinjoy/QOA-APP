import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const CommonComponent = ({ imageUrl, category, title, date, language }) => {
    return (
        <View style={{ borderWidth: 0, borderRadius: WIDTH * 0.02, backgroundColor: colors.white, }}>
            <Image source={imageUrl} style={{ width: WIDTH * 0.9, height: HEIGHT * 0.2, borderTopLeftRadius: WIDTH * 0.02, borderTopRightRadius: WIDTH * 0.02 }} resizeMode='cover' />
            <View style={{ padding: WIDTH * 0.05 }}>
                <Text style={{ fontSize: 13, color: colors.skyblue }}>{category}</Text>
                <Text style={{ fontSize: 16, color: colors.black, marginTop: HEIGHT * 0.01 }}>{title}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: HEIGHT * 0.02 }}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={{ fontSize: 13, color: colors.grey }}>{date}</Text>
                    </View>
                    <View style={{ borderWidth: 0.9, padding: HEIGHT * 0.01, borderRadius: WIDTH * 0.01, borderStyle: 'dotted', borderColor: colors.grey, flexDirection: 'row', alignItems: 'center', flex: 0.45 }}>
                        <Text style={{ fontSize: 13, color: colors.darkred, fontWeight: 0 }}>{language}</Text>
                    </View>
                </View>
            </View>
        </View >
    )
}

export default CommonComponent;


import React from 'react';
import { View, FlatList } from 'react-native';
import HeaderComponent from '../components/HeaderComponent';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { backarrow } from '../assets/images';
import SearchComponent from '../components/SearchComponent';
import CommonComponent from '../components/CommonComponent';

const CertificateScreen = () => {
    const navigation = useNavigation();

    const data = [
        {
            id: '1',
            imageUrl: require('../assets/images/programs.jpg'),
            category: 'Online',
            title: 'Organising and Managing Asian Games',
            date: '2-6 Jan, 2022',
            language: 'ENGLISH',
        },
        // Add more data as needed
    ];

    const renderItem = ({ item }) => (
        <View style={{ marginBottom: 20 }}>
            <CommonComponent
                imageUrl={item.imageUrl}
                category={item.category}
                title={item.title}
                date={item.date}
                language={item.language}
            />
        </View>
    );

    return (
        <View style={{ backgroundColor: colors.lightgrey, flex: 1 }}>
            <HeaderComponent
                title="Certificates"
                headerStyle={{ height: HEIGHT * 0.17 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <SearchComponent
                containerStyle={{ position: 'absolute', width: WIDTH * 0.89, top: HEIGHT * 0.13, borderRadius: WIDTH * 0.02, backgroundColor: colors.purewhite, borderColor: colors.grey }} tintColor={colors.black} placeholderTextColor={colors.lightgrey} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ marginTop: 40, marginHorizontal: WIDTH * 0.05 }}
            />
        </View>
    )
}

export default CertificateScreen;
