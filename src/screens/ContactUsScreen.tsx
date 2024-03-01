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
        { label: 'First name', stateKey: 'firstname', component: <TextInputComponent placeholder="First Name" /> },
        { label: 'Last name', stateKey: 'lastname', component: <TextInputComponent placeholder="Last Name" /> },
        { label: 'Email', stateKey: 'email', component: <TextInputComponent placeholder="Email" /> },
        { label: 'Phone Number', stateKey: 'phonenumber', component: <TextInputComponent placeholder="Phone Number" /> },
        { label: 'Message', stateKey: 'message', component: <TextInputComponent placeholder="Message" /> }
    ]

    const coloredViews = [
        { backgroundColor: colors.yellow, width: WIDTH * 0.1 },
        { backgroundColor: colors.darkred, width: WIDTH * 0.15 },
        { backgroundColor: colors.skyblue, width: WIDTH * 0.17 }
    ];

    const renderFormFields = () => {
        return formFields.map((field, index) => (
            <View key={index} style={{ marginBottom: HEIGHT * 0.02 }}>
                <Text>{field.label}</Text>
                {field.component}
            </View>
        ))
    }

    return (
        <View style={{ backgroundColor: colors.purewhite, flex: 1 }}>
            <HeaderComponent
                title="Contact Us"
                headerStyle={{ height: HEIGHT * 0.15 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.04, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <ScrollView style={{}}>
                <View style={{ backgroundColor: colors.lightwhite, height: HEIGHT * 0.18 }}>
                    <View style={{ marginHorizontal: WIDTH * 0.05, margin: 20 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: colors.black }}>Get in touch.Let's talk about your ideas and feedback!</Text>
                        <StripComponent coloredViews={coloredViews} stripStyle={{ marginTop: HEIGHT * 0.02 }} />
                    </View>
                </View>

                <View style={{ backgroundColor: colors.white, marginTop: HEIGHT * 0.13, position: 'absolute', width: WIDTH * 0.9, marginHorizontal: WIDTH * 0.05, padding: HEIGHT * 0.02, borderWidth: 0.5, borderRadius: WIDTH * 0.01, borderColor: colors.grey }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', color: colors.darkred, marginTop: HEIGHT * 0.01 }}>Send Us A Message</Text>
                    <Text style={{ fontSize: 15, color: colors.black, marginTop: HEIGHT * 0.01 }}>Leave your information below and we will get back to you as soon as possible.</Text>
                    <View style={{ marginTop: HEIGHT * 0.02 }}>
                        {renderFormFields()}
                    </View>
                    <ButtonComponent
                        label="Send Message"
                        containerStyle={{ width: WIDTH * 0.82, height: HEIGHT * 0.06 }}
                    />
                    <StripComponent />
                </View >
                <View style={{ marginHorizontal: WIDTH * 0.05, position: "absolute", top: HEIGHT * 0.85 }}>
                    <FlatList
                        data={contactFlatlist}
                        scrollEnabled={false}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable style={{ borderWidth: 0, flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ borderWidth: 1, padding: HEIGHT * 0.01, borderRadius: WIDTH * 0.02 }}>
                                        <Image source={item.icon} resizeMode='contain' style={{ width: WIDTH * 0.04, height: HEIGHT * 0.02 }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 16, color: colors.black }}>{item.type}</Text>
                                        <Text style={{ fontSize: 16, color: colors.black }}>{item.text}</Text>
                                    </View>
                                </Pressable>
                            )
                        }}
                    />
                </View>

            </ScrollView >
        </View >
    )
}

export default ContactUsScreen
