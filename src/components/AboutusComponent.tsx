import { View, Text, Image } from 'react-native'
import React from 'react'
import { appostrophy, dotintersection, programs } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import HTML from 'react-native-render-html';
import StripComponent from './StripComponent'

const AboutusComponent = (props) => {
    const { headerImage, description, showTitle, name, position, screenName } = props

    return (
        <View style={{ borderWidth: 0 }}>
            {headerImage && (
                <Image source={{ uri: headerImage }} style={{ width: WIDTH, height: HEIGHT * 0.35 }} resizeMode='cover' />)}
            <Image source={dotintersection} style={{ position: "absolute", top: HEIGHT * 0.3, right: WIDTH * 0.2 }} resizeMode='contain' />
            <View style={{ marginHorizontal: WIDTH * 0.05, marginVertical: HEIGHT * 0.07 }}>
                {screenName === "About Us" && (
                    <Text style={{ fontSize: 17, color: colors.darkred, fontWeight: '500' }}>About Us</Text>
                )}
                {(screenName === "board_members" || screenName === "president_message" || screenName === "executive_directors_message") && (
                    <Image source={appostrophy} style={{ width: WIDTH * 0.2 }} resizeMode='contain' />
                )}
                <HTML source={{ html: description }} contentWidth={WIDTH * 0.6} tagsStyles={{ p: { fontSize: 18, color: colors.black } }} />

                <View>
                    <Text style={{ fontSize: 18, color: colors.black }}>{name}</Text>
                    <Text style={{ fontSize: 15, color: colors.grey, marginTop: HEIGHT * 0.01 }}>{position}</Text>
                    <StripComponent />
                </View>

            </View>
        </View>
    )
}

export default AboutusComponent
