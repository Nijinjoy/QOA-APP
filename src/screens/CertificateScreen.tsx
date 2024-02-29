import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { backarrow } from '../assets/images'
import SearchComponent from '../components/SearchComponent'

const CertificateScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
            <HeaderComponent
                title="Certificates"
                headerStyle={{ height: HEIGHT * 0.17 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow} />
            <SearchComponent
                containerStyle={{ position: 'absolute', width: WIDTH * 0.89, top: HEIGHT * 0.13, borderRadius: WIDTH * 0.02, backgroundColor: colors.purewhite, borderColor: colors.grey }} tintColor={colors.black} placeholderTextColor={colors.lightgrey} />
        </View>
    )
}

export default CertificateScreen