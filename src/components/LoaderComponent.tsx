import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'

const LoaderComponent = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" color={colors.grey} />
        </View>
    )
}


export default LoaderComponent