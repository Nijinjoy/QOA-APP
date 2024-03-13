import { View, Text, Image, TextInput, Pressable, } from 'react-native'
import React from 'react'
import { filter, search } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'

const SearchComponent = (props) => {
    const { containerStyle = { borderRadius: WIDTH * 0.02 }, tintColor, placeholderTextColor, filterBackground, filterLogo } = props
    return (
        <View style={{ borderWidth: 0, marginHorizontal: WIDTH * 0.05, padding: HEIGHT * 0.01, flexDirection: 'row', alignItems: 'center', ...containerStyle, }}>
            <View style={{ flex: 0.1 }}>
                <Image source={search} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.03, marginHorizontal: WIDTH * 0.02 }} tintColor={tintColor} resizeMode='contain' />
            </View>
            <View style={{ flex: 0.8 }}>
                <TextInput
                    placeholder='Search'
                    style={{ marginLeft: WIDTH * 0.02, fontSize: 16 }}
                    placeholderTextColor={placeholderTextColor}
                />
            </View>
            <Pressable style={{ backgroundColor: filterBackground, padding: WIDTH * 0.015, borderRadius: WIDTH * 0.02, flex: 0.1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={filterLogo} style={{ width: WIDTH * 0.04, height: HEIGHT * 0.04 }} resizeMode='contain' />
            </Pressable>
        </View>
    )
}

export default SearchComponent