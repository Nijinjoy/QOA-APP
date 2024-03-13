import { View, Text, ScrollView, FlatList, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import HeaderComponent from '../components/HeaderComponent'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { backarrow, email, location, mobile, phone } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import TextInputComponent from '../components/TextInputComponent'
import ButtonComponent from '../components/ButtonComponent'
import StripComponent from '../components/StripComponent'

const contactFlatlist = [
    {
        id: 1,
        icon: phone,
        type: 'Phone',
        text: '992345-9669'
    },
    {
        id: 2,
        icon: mobile,
        type: 'Mobile',
        text: "9278724593"
    },
    {
        id: 3,
        icon: location,
        type: 'Location',
        text: "Doha,Qatar"
    },
    {
        id: 4,
        icon: email,
        type: 'Email',
        text: "qoa@olympics.com"
    }
]

const ContactUsScreen = () => {
    const navigation = useNavigation()
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', phonenumber: "", message: '' })

    const formFields = [
        { label: 'Full Name', stateKey: 'fullname', component: <TextInputComponent placeholder="First Name" /> },
        { label: 'Last name', stateKey: 'lastname', component: <TextInputComponent placeholder="Last Name" /> },
        { label: 'Email', stateKey: 'email', component: <TextInputComponent placeholder="Email" /> },
        { label: 'Phone Number', stateKey: 'phonenumber', component: <TextInputComponent placeholder="Phone Number" /> },
        { label: 'Message', stateKey: 'message', component: <TextInputComponent placeholder="Start typing your message" containerStyle={{ height: HEIGHT * 0.12 }} /> }
    ]

    const coloredViews = [
        { backgroundColor: colors.skyblue, width: WIDTH * 0.25 },
        { backgroundColor: colors.darkred, width: WIDTH * 0.25 },
        { backgroundColor: colors.yellow, width: WIDTH * 0.4, height: HEIGHT * 0.03 }
    ];

    const Views = [
        { backgroundColor: colors.yellow, width: WIDTH * 0.08 },
        { backgroundColor: colors.darkred, width: WIDTH * 0.13 },
        { backgroundColor: colors.skyblue, width: WIDTH * 0.15, height: HEIGHT * 0.03 }
    ];

    const renderFormFields = () => {
        return formFields.map((field, index) => (
            <View key={index} style={{ marginBottom: HEIGHT * 0.03 }}>
                <Text>{field.label}</Text>
                <View style={{ marginTop: HEIGHT * 0.015 }}>
                    {field.component}
                </View>
            </View>
        ));
    };

    return (
        <View style={{ backgroundColor: colors.purewhite, flex: 1 }}>
            <HeaderComponent
                title="Contact Us"
                headerStyle={{ height: HEIGHT * 0.15 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <ScrollView style={{ flex: 1, flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: colors.white }}>
                    <View style={{ backgroundColor: colors.lightgrey }}>
                        <View style={{ marginHorizontal: WIDTH * 0.05, margin: 10, height: HEIGHT * 0.2 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.black, marginTop: HEIGHT * 0.02 }}>Get in touch.Lets talk about your ideas and feedback.</Text>
                            <StripComponent coloredViews={Views} stripStyle={{ marginTop: HEIGHT * 0.04 }} />
                        </View>
                    </View>
                    <View style={{ backgroundColor: colors.purewhite, marginHorizontal: WIDTH * 0.05, padding: 20, borderRadius: WIDTH * 0.02, bottom: HEIGHT * 0.05 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500', color: colors.darkred, marginTop: HEIGHT * 0.01 }}>Send Us A Message</Text>
                        <Text style={{ fontSize: 15, color: colors.black, marginTop: HEIGHT * 0.01 }}>Leave your information below and we will get back to you as soon as possible.</Text>
                        <View style={{ marginTop: HEIGHT * 0.02 }}>
                            {renderFormFields()}
                        </View>
                        <ButtonComponent
                            label="Send Message"
                            containerStyle={{ width: WIDTH * 0.82, height: HEIGHT * 0.06, marginTop: HEIGHT * 0.03 }}
                        />
                        <StripComponent coloredViews={coloredViews} stripStyle={{ marginTop: HEIGHT * 0.05, position: 'absolute', bottom: 0 }} />
                    </View>
                    <View>
                        <FlatList
                            data={contactFlatlist}
                            contentContainerStyle={{ marginTop: HEIGHT * 0.03, }}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ borderWidth: 0, flexDirection: 'row', marginHorizontal: WIDTH * 0.05, alignItems: 'center', padding: 10 }}>
                                        <View style={{ borderWidth: 0.5, padding: HEIGHT * 0.02, borderRadius: WIDTH * 0.02, borderColor: colors.grey }}>
                                            <Image source={item.icon} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.03 }} resizeMode='contain' />
                                        </View>
                                        <View style={{ marginLeft: WIDTH * 0.05 }}>
                                            <Text style={{ fontSize: 16, color: colors.black }}>{item.type}</Text>
                                            <Text style={{ fontSize: 16, color: colors.grey }}>{item.text}</Text>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default ContactUsScreen
