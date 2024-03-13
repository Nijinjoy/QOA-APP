import { View, Text, Image } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import { hands } from '../assets/images'
import StripComponent from './StripComponent'

const CourseComponent = (props) => {
    const { moduleCount, courseName, coursePrice, startDate, endDate } = props

    const coloredViews = [
        { backgroundColor: colors.skyblue, width: WIDTH * 0.2 },
        { backgroundColor: colors.darkred, width: WIDTH * 0.3 },
        { backgroundColor: colors.yellow, width: WIDTH * 0.4 }
    ];

    return (
        <View style={{ padding: WIDTH * 0.06, width: WIDTH * 0.9, backgroundColor: colors.purewhite, borderRadius: WIDTH * 0.01 }}>
            <View style={{ backgroundColor: colors.darkred, width: WIDTH * 0.15, padding: WIDTH * 0.02, borderRadius: WIDTH * 0.01, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 13, color: colors.purewhite }}>Online</Text>
            </View>
            <Text style={{ fontSize: 13, color: colors.skyblue, marginTop: HEIGHT * 0.02 }}>{moduleCount} Modules</Text>
            <Text style={{ fontSize: 18, color: colors.black, marginTop: HEIGHT * 0.01 }}>{courseName}</Text>
            <View style={{ flexDirection: 'row', marginTop: HEIGHT * 0.02 }}>
                <View>
                    <Text style={{ fontSize: 13, color: colors.grey }}>{startDate}</Text>
                </View>
                <View style={{ marginLeft: WIDTH * 0.05 }}>
                    <Text style={{ fontSize: 13, color: colors.grey }}>{endDate}</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", marginTop: HEIGHT * 0.03 }}>
                <View style={{ borderStyle: 'dashed', borderWidth: 0.5, padding: WIDTH * 0.02, flexDirection: 'row', borderRadius: WIDTH * 0.01 }}>
                    <Text>ENGLISH</Text>
                    <Image source={hands} style={{ marginHorizontal: WIDTH * 0.02 }} />
                    <Image source={hands} style={{ marginHorizontal: WIDTH * 0.0 }} />
                </View>
                <View>
                    <Text style={{ fontSize: 15, color: colors.black }}>Qar<Text style={{ fontSize: 15, color: colors.darkred, fontWeight: 'bold', marginHorizontal: WIDTH * 0.03 }}> {coursePrice}</Text></Text>
                </View>
            </View>
            <View style={{ position: 'absolute', bottom: 0, width: WIDTH }}>
                <StripComponent coloredViews={coloredViews} stripStyle={{}} />
            </View>
        </View>
    )
}

export default CourseComponent