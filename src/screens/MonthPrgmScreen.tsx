import { View, Text, Image } from 'react-native'
import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import { backarrow, hands, programs } from '../assets/images'
import { useNavigation } from '@react-navigation/native'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import colors from '../constants/Colors'
import SearchComponent from '../components/SearchComponent'
import CommonComponent from '../components/CommonComponent'

const MonthPrgmScreen = () => {
    const navigation = useNavigation()
    return (
        <View>
            <HeaderComponent
                title="This Month's Program"
                headerStyle={{ height: HEIGHT * 0.17 }}
                containerStyle={{ width: WIDTH * 0.1, borderWidth: 0, height: HEIGHT * 0.05, marginHorizontal: WIDTH * 0.04, backgroundColor: `${colors.white}25` }}
                onPress={() => navigation.goBack()}
                icon={backarrow}
            />
            <View style={{ position: 'absolute', top: HEIGHT * 0.13, width: '100%', paddingHorizontal: WIDTH * 0.05, alignItems: 'center', zIndex: 1, }}>
                <SearchComponent
                    containerStyle={{ width: '100%', borderRadius: WIDTH * 0.02, backgroundColor: colors.purewhite, borderColor: colors.grey }}
                    tintColor={colors.black}
                    placeholderTextColor={colors.lightgrey}
                />
            </View>
            <View style={{ marginHorizontal: WIDTH * 0.05 }}>
                <CommonComponent
                    imageUrl={programs}
                    date="Multi Subjects Programs"
                    title="Organising and Managing Asian Games"
                    containerStyle={{ marginTop: HEIGHT * 0.06 }}
                    customView={(
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginTop: HEIGHT * 0.02 }}>
                            <View style={{}}>
                                <Text style={{ fontSize: 13, color: colors.grey }}>7 Feb 2022</Text>
                            </View>
                            <View style={{ borderWidth: 1, borderStyle: 'dashed', borderRadius: WIDTH * 0.01, padding: WIDTH * 0.012, flexDirection: 'row', borderColor: colors.lightgrey }}>
                                <Text style={{ fontSize: 13, color: colors.darkred }}>ENGLISH</Text>
                                <Image source={hands} style={{ marginHorizontal: WIDTH * 0.04 }} />
                                <Image source={hands} />
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export default MonthPrgmScreen