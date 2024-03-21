import { View, Text, SafeAreaView, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { allprograms, appicon, bell, drawericon, media, month, news } from '../assets/images'
import SearchComponent from '../components/SearchComponent'
import colors from '../constants/Colors'
import { DrawerActions, useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

const contentFlatlist = [
    {
        id: 1,
        label: "This Month's Programs",
        backgroundColor: colors.yellow,
        backgroundImage: month,
        path: 'MonthPrgmScreen'
    },
    {
        id: 2,
        label: "All Programs",
        backgroundColor: colors.skyblue,
        backgroundImage: allprograms,
        path: "ProgramScreen"
    },
    {
        id: 3,
        label: "Latest News",
        backgroundColor: colors.red,
        backgroundImage: news,
        path: "LatestNewsScreen"
    },
    {
        id: 4,
        label: "Media",
        backgroundColor: colors.green,
        backgroundImage: media,
        path: "MediaScreen"
    }
]

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View >
            <View>
                <HeaderComponent
                    headerTitle="Discover"
                    icon={drawericon}
                    onPress={() => navigation.toggleDrawer()}
                    containerStyle={{ height: HEIGHT * 0.22 }}
                    rightIcon={bell}
                    onNavigate={() => navigation.navigate("NotificationScreen")}
                    onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
                    iconStyle={{ width: WIDTH * 0.087, height: HEIGHT * 0.033 }} />
                <SearchComponent
                    containerStyle={{ position: 'absolute', width: WIDTH * 0.89, top: HEIGHT * 0.14, borderRadius: WIDTH * 0.02, backgroundColor: `${colors.shadowcolor}25`, borderColor: colors.grey }} tintColor={colors.purewhite}
                    placeholderTextColor={colors.white}
                />
            </View>
            <View style={{ backgroundColor: colors.purewhite }}>
                <FlatList
                    data={contentFlatlist}
                    scrollEnabled={false}
                    contentContainerStyle={{ justifyContent: "center", alignItems: "center", padding: HEIGHT * 0.02 }}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <Pressable onPress={() => navigation.navigate(item.path)} style={{ width: WIDTH * 0.44, borderRadius: WIDTH * 0.025, height: HEIGHT * 0.35, justifyContent: "center", alignItems: 'center', backgroundColor: item.backgroundColor, margin: HEIGHT * 0.01 }}>
                                <Image source={item.backgroundImage} style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', width: WIDTH * 0.44, height: HEIGHT * 0.35 }} />
                                <Text style={{ fontSize: 22, textAlign: 'center', color: colors.purewhite, fontWeight: "bold" }}>{item.label}</Text>
                            </Pressable>
                        )
                    }}
                />
            </View>
            <View style={{ justifyContent: "center", alignItems: 'center', bottom: HEIGHT * 0.38, width: '100%', position: 'absolute' }}>
                <View style={{ borderWidth: 0, backgroundColor: colors.purewhite, width: WIDTH * 0.35, height: WIDTH * 0.35, position: "absolute", justifyContent: "center", alignItems: 'center', borderRadius: WIDTH * 0.35, }}>
                    <Image source={appicon} resizeMode='contain' style={{ width: WIDTH * 0.5, }} />
                </View>
            </View>
        </View >
    )
}

export default HomeScreen