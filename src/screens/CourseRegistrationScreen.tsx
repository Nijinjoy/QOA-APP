import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { backarrow } from '../assets/images'
import TextInputComponent from '../components/TextInputComponent'

const CourseRegistrationScreen = () => {
    const navigation = useNavigation()

    const formFields = [
        { label: 'First name', stateKey: 'firstname', component: <TextInputComponent placeholder="Full Name" /> },
        { label: 'Email', stateKey: 'email', component: <TextInputComponent placeholder="mail@gmail.com" /> },
        { label: 'Phone Number', stateKey: 'phone', component: <TextInputComponent placeholder="+875657726" /> },
        { label: 'Qualification', stateKey: 'qualification', component: <TextInputComponent placeholder="Enter Qualification" /> },
        { label: 'Employer name', stateKey: 'employerName', component: <TextInputComponent placeholder="Enter Qualification" /> },
    ]

    return (
        <View style={{ backgroundColor: colors.purewhite, flex: 1 }}>
            <HeaderComponent
                title="Course Registration"
                headerStyle={{ height: HEIGHT * 0.17 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <ScrollView style={{ marginHorizontal: WIDTH * 0.05 }}>
                <Text style={{ fontSize: 20, color: colors.darkred, fontWeight: "500", marginTop: HEIGHT * 0.03 }}>Course Registration</Text>
                <Text style={{ fontSize: 15, color: colors.grey, marginTop: HEIGHT * 0.01 }}>Kindly fill the form to complete the registration</Text>
                {formFields.map((field, index) => (
                    <View key={index} style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 16, marginBottom: 5 }}>{field.label}</Text>
                        {field.component}
                    </View>
                ))}
            </ScrollView>
        </View >
    )
}

export default CourseRegistrationScreen