import { View, Text, Image, TextInput, } from 'react-native'
import React from 'react'
import { search } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const SearchComponent = (props) => {
    const { containerStyle = { borderRadius: WIDTH * 0.02 }, tintColor, placeholderTextColor } = props
    return (
        <View style={{ borderWidth: 0, marginHorizontal: WIDTH * 0.05, padding: HEIGHT * 0.02, flexDirection: 'row', ...containerStyle, }}>
            <Image source={search} style={{}} tintColor={tintColor} />
            <TextInput
                placeholder='Search'
                style={{ marginLeft: WIDTH * 0.02, fontSize: 16 }}
                placeholderTextColor={placeholderTextColor}
            />
        </View>
    )
}

export default SearchComponent