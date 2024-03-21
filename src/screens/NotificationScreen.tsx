import { View, Text } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT } from '../constants/Dimension'
import { backarrow } from '../assets/images'
import { useNavigation } from '@react-navigation/native'

const NotificationScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, backgroundColor: colors.purewhite }}>
            <HeaderComponent
                containerStyle={{ height: HEIGHT * 0.15 }}
                headerTitle="Notifications"
                icon={backarrow}
                onPress={() => navigation.goBack()}
            />
        </View>
    )
}

export default NotificationScreen