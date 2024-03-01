import { View, Text } from 'react-native'
import React from 'react'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension';

const StripComponent = (props) => {
    const { coloredViews, stripStyle } = props
    return (
        <View style={{ flexDirection: 'row', ...stripStyle }}>
            {coloredViews && coloredViews.map((view, index) => (
                <View key={index} style={{ backgroundColor: view.backgroundColor, width: view.width, height: HEIGHT * 0.004 }} />
            ))}
        </View>
    )
}

export default StripComponent