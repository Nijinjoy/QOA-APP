import { View, Text, ScrollView, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { backarrow } from '../assets/images'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { WebView } from 'react-native-webview';

const helpFlatlist = [
    {
        id: 1,
        para: 'What did you like most about it?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
        id: 2,
        para: 'What was your first work experience?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
        id: 3,
        para: 'Why did you leave ?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
        id: 4,
        para: 'What is the best way to learn about cooking?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
        id: 5,
        para: 'What is the best way to learn about cooking?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
        id: 6,
        para: 'What is the best way to learn about cooking?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
    {
        id: 7,
        para: 'What is the best way ?',
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,'
    },
]

const HelpScreen = () => {
    const navigation = useNavigation()
    const [selectedQuestion, setSelectedQuestion] = useState(null)
    return (
        <View>
            <HeaderComponent
                title="Help"
                headerStyle={{ height: HEIGHT * 0.17 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <ScrollView style={{ marginHorizontal: WIDTH * 0.05 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: HEIGHT * 0.03 }}>Have any questions ?</Text>
                <WebView source={{ uri: 'https://reactnative.dev/' }} style={{ flex: 1 }} />

                {/* <FlatList
                    data={helpFlatlist}
                    contentContainerStyle={{ backgroundColor: colors.white, padding: HEIGHT * 0.0, borderWidth: 0, marginTop: HEIGHT * 0.04 }}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => {
                        return (
                            <Pressable style={{ borderWidth: 1 }} >
                                <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0 }}>
                                    <View style={{ flex: 0.9 }}>
                                        <Text style={{ fontSize: 15, color: colors.black, fontWeight: '600' }}>{item.para}</Text>
                                    </View>
                                    <Pressable style={{ flex: 0.1 }}>
                                        <Text style={{ fontSize: 10 }}>+</Text>
                                    </Pressable>
                                </View>
                                <Text style={{ width: WIDTH * 0.8, fontSize: 15, color: colors.black, margin: HEIGHT * 0.02 }}>{item.content}</Text>
                            </Pressable>
                        )
                    }}
                /> */}
            </ScrollView>
        </View >
    )
}

export default HelpScreen