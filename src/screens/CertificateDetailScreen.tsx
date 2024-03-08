import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CarouselHeaderComponent from '../components/CarouselHeaderComponent'
import { programs } from '../assets/images'
import colors from '../constants/Colors'
import CourseComponent from '../components/CourseComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import ButtonComponent from '../components/ButtonComponent'

const CertificateDetailScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <CarouselHeaderComponent
                backgroundImage={programs}
                backgroundcolor={`${colors.white}50`}
            />
            <View style={{ justifyContent: "center", alignItems: 'center', }}>
                <CourseComponent />
            </View>
            <ScrollView style={{ marginHorizontal: WIDTH * 0.05 }} showsVerticalScrollIndicator={false}>
                <Text style={{ fontSize: 16, color: colors.darkred, fontWeight: '500', marginTop: HEIGHT * 0.03 }}>Target Audience</Text>
                <Text style={{ fontSize: 15, color: colors.grey, marginTop: HEIGHT * 0.01, marginTop: HEIGHT * 0.01 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</Text>
                <Text style={{ fontSize: 16, color: colors.darkred, fontWeight: '500', marginTop: HEIGHT * 0.02 }}>Instructor</Text>
                <Text style={{ fontSize: 15, color: colors.grey, marginTop: HEIGHT * 0.01 }}>In publishing and graphic design, Lorem ipsum is a placeholder text</Text>
                <Text style={{ fontSize: 16, color: colors.darkred, fontWeight: '500', marginTop: HEIGHT * 0.01 }}>Program objectives</Text>
                <Text style={{ fontSize: 15, color: colors.grey }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</Text>
            </ScrollView>
            <View style={{ justifyContent: "center", alignItems: "center", position: 'absolute', bottom: HEIGHT * 0.03, left: 0, right: 0 }}>
                <ButtonComponent
                    label="Apply Now"
                    containerStyle={{ width: WIDTH * 0.5, height: HEIGHT * 0.07, alignItems: "center" }}
                />
            </View>
        </View>
    )
}

export default CertificateDetailScreen