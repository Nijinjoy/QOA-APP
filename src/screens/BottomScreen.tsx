import { View, Text, Pressable, Image, FlatList } from 'react-native'
import React from 'react'
import HeaderBtmComponent from '../components/HeaderBtmComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { useNavigation } from '@react-navigation/native'
import { drawericon, location, plus, profile } from '../assets/images'
import LinearGradient from 'react-native-linear-gradient'
import SearchhComponent from '../components/SearchhComponent'
import PlusComponent from '../components/PlusComponent'
import colors from '../constants/Colors'
import BottomTabComponent from '../components/BottomTabComponent'

const users = [
    { id: 1, name: 'User 1', imageUrl: profile },
    { id: 2, name: 'User 2', imageUrl: profile },
    { id: 3, name: 'User 3', imageUrl: profile },
    { id: 4, name: 'User 4', imageUrl: profile },
    { id: 5, name: 'User 4', imageUrl: profile },
    { id: 6, name: 'User 4', imageUrl: profile },
];

const BottomScreen = () => {
    const navigation = useNavigation()

    const renderUserItem = ({ item }) => (
        <View style={{ marginHorizontal: WIDTH * 0.015 }}>
            <Image source={item.imageUrl} style={{ width: WIDTH * 0.15, height: WIDTH * 0.15, borderRadius: WIDTH * 0.15 }} />
        </View>
    );

    return (
        <LinearGradient colors={['#ffffff', '#E5FFE3']} style={{ flex: 1 }}>
            <HeaderBtmComponent
                backArrow={drawericon}
                headerImage={location}
                HeaderTitle="Bangalore"
                rightIcon={location}
                onPress={() => navigation.goBack()}
                imageStyle={{ width: WIDTH * 0.06, height: HEIGHT * 0.03 }}
            />
            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <View style={{ marginTop: HEIGHT * 0.03 }}>
                    <SearchhComponent />
                    <FlatList
                        data={[{ id: 'plus', imageUrl: plus }, ...users]}
                        horizontal
                        contentContainerStyle={{ marginTop: HEIGHT * 0.04 }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            if (item.id === 'plus') {
                                return (
                                    <Pressable style={{ marginHorizontal: WIDTH * 0.02, width: WIDTH * 0.15, height: WIDTH * 0.15, borderRadius: WIDTH * 0.15, justifyContent: "center", alignItems: 'center', backgroundColor: colors.green }}>
                                        <Image source={item.imageUrl} style={{ width: WIDTH * 0.05, height: 20 }} resizeMode='contain' />
                                    </Pressable>
                                );
                            } else {
                                return renderUserItem({ item });
                            }
                        }}
                        keyExtractor={item => item.id.toString()}
                    />

                </View>
            </View>
            <BottomTabComponent />
        </LinearGradient>
    )
}

export default BottomScreen

// #E5FFE3