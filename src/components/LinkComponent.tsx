import { View, Text, FlatList, Pressable, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { linkarrow } from '../assets/images'
import colors from '../constants/Colors'
import StripComponent from './StripComponent'
import { useNavigation } from '@react-navigation/native'

const linkFlatlist = [
    {
        id: 1,
        linkName: "President's Message",
        uparrow: linkarrow,
        path: ""
    },
    {
        id: 2,
        linkName: "Executive Director's Message",
        uparrow: linkarrow,
        path: ""
    },
    {
        id: 3,
        linkName: "Board Members",
        uparrow: linkarrow,
        path: ""
    },
    {
        id: 4,
        linkName: "Advisory Commitee Members",
        uparrow: linkarrow,
        path: ""
    },
    {
        id: 5,
        linkName: "Our Partners",
        uparrow: linkarrow,
        path: "HelpScreen"
    }
]

const LinkComponent = () => {
    const navigation = useNavigation()

    const coloredViews = [
        { backgroundColor: colors.skyblue, width: WIDTH * 0.25, height: HEIGHT * 0.05 },
        { backgroundColor: colors.darkred, width: WIDTH * 0.25, height: HEIGHT * 0.03 },
        { backgroundColor: colors.yellow, width: WIDTH * 0.4, height: HEIGHT * 0.1 }
    ];

    return (
        <View style={{ borderWidth: 0, backgroundColor: colors.purewhite, padding: WIDTH * 0.04, width: WIDTH * 0.9, borderRadius: WIDTH * 0.02 }}>
            <Text style={{ fontSize: 17, color: colors.darkred, fontWeight: '500' }}>Related Links</Text>
            <FlatList
                data={linkFlatlist}
                contentContainerStyle={{ marginTop: HEIGHT * 0.0 }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => navigation.navigate(item.path)} style={{ borderWidth: 0, flexDirection: 'row', justifyContent: "space-between", marginTop: HEIGHT * 0.04 }}>
                            <View>
                                <Text style={{ fontSize: 15, color: colors.black }}>{item.linkName}</Text>
                            </View>
                            <View>
                                <Image source={item.uparrow} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.02 }} resizeMode='contain' />
                            </View>
                        </Pressable>
                    )
                }}
            />
            <StripComponent coloredViews={coloredViews} stripStyle={{ marginTop: HEIGHT * 0.05, position: 'absolute', bottom: 0 }} />
        </View>
    )
}

export default LinkComponent