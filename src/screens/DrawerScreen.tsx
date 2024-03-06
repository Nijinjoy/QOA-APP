import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { arabic, downArrow, drawerlogo, upArrow } from '../assets/images';
import colors from '../constants/Colors';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import { useNavigation } from '@react-navigation/native';

const drawerFlatlist = [
    // {
    //     id: 1,
    //     label: "Courses"
    // },
    {
        id: 2,
        label: "News"
    },
    {
        id: 3,
        label: "Media Gallery",
        path: "BottomScreen"
    },
    {
        id: 4,
        label: "About Us",
        upArrow: upArrow,
        downArrow: downArrow,
        subList: [
            {
                id: 1,
                sublabel: 'About QOA'
            },
            {
                id: 2,
                sublabel: "President's Message"
            },
            {
                id: 3,
                sublabel: "Executive Director's Message"
            },
            {
                id: 4,
                sublabel: "Board Members"
            },
            {
                id: 5,
                sublabel: "Advisory Committee"
            },
            {
                id: 6,
                sublabel: "Our Partners"
            }
        ]
    },
    // {
    //     id: 5,
    //     label: "Financing Your Program"
    // },
    {
        id: 6,
        label: "Contact Us",
        path: 'ContactUsScreen'
    },
    {
        id: 7,
        label: "Help",
        path: 'HelpScreen'
    }
];

const DrawerScreen = () => {
    const navigation = useNavigation();
    const [expanded, setExpanded] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <View>
            <View style={{ margin: HEIGHT * 0.05 }}>
                <Image source={drawerlogo} style={{ width: WIDTH * 0.41, height: HEIGHT * 0.101 }} resizeMode='contain' />
                <FlatList
                    data={drawerFlatlist}
                    contentContainerStyle={{ marginTop: HEIGHT * 0.02 }}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <Pressable
                                    style={{ marginTop: HEIGHT * 0.03, flexDirection: 'row', alignItems: "center" }}
                                    onPress={() => {
                                        if (item.label === 'About Us') {
                                            setExpanded(!expanded);
                                        } else if (item.path) {
                                            navigation.navigate(item.path);
                                        }
                                    }}
                                >
                                    <Text style={{ fontSize: 17, color: colors.black, fontWeight: "500" }}>{item.label}</Text>
                                    {item.label === 'About Us' && (
                                        <>
                                            {expanded ? <Image source={item.upArrow} style={{ marginLeft: WIDTH * 0.02 }} /> : <Image source={item.downArrow} style={{ marginLeft: WIDTH * 0.02 }} />}
                                        </>
                                    )}
                                </Pressable>
                                {item.label === 'About Us' && expanded && (
                                    <View style={{ margin: WIDTH * 0.01 }}>
                                        {item.subList.map((subItem, index) => (
                                            <Text key={index} style={{ fontSize: 14, marginTop: HEIGHT * 0.02, marginLeft: WIDTH * 0.03, color: colors.black }}>{subItem.sublabel}</Text>
                                        ))}
                                    </View>
                                )}
                            </>
                        );
                    }}
                />
                <Text style={{ fontSize: 14, color: colors.black, marginTop: HEIGHT * 0.05 }}>Language</Text>
                <View style={{ borderWidth: 0, width: WIDTH * 0.45, flexDirection: 'row', borderRadius: WIDTH * 0.015, backgroundColor: colors.lightgrey, marginTop: HEIGHT * 0.02 }}>
                    <Pressable
                        onPress={() => selectLanguage('English')}
                        style={{
                            padding: HEIGHT * 0.009,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: WIDTH * 0.01,
                            margin: HEIGHT * 0.006,
                            width: WIDTH * 0.21,
                            backgroundColor: selectedLanguage === 'English' ? colors.purewhite : colors.lightgrey
                        }}>
                        <Text style={{ color: selectedLanguage === 'English' ? colors.red : colors.black }}>English</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => selectLanguage('Hindi')}
                        style={{
                            padding: HEIGHT * 0.009,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: WIDTH * 0.01,
                            margin: HEIGHT * 0.006,
                            width: WIDTH * 0.19,
                            backgroundColor: selectedLanguage === 'Hindi' ? colors.purewhite : colors.lightgrey
                        }}>
                        <Image source={arabic} resizeMode='contain' tintColor={selectedLanguage === 'Hindi' ? colors.red : colors.black} />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default DrawerScreen;
