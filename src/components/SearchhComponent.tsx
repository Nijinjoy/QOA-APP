import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { search } from '../assets/images'

const SearchhComponent = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 0.5, padding: WIDTH * 0.03, borderRadius: WIDTH * 0.06, backgroundColor: colors.white, borderColor: colors.grey }}>
            <Image source={search} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.04, marginLeft: WIDTH * 0.05 }} resizeMode='contain' />
            <TextInput
                placeholder='Search here....'
                placeholderTextColor={colors.grey}
                style={{ marginHorizontal: WIDTH * 0.02, flex: 1 }}
            />
        </View>
    )
}

export default SearchhComponent