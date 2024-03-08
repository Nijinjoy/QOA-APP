import { View, Text, Pressable, Image, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import { backarrow, drawericon, headerintersection } from '../assets/images'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'

const HeaderComponent = (props) => {
    // const { onPress, HeaderTitle, rightIcon, backArrow, headerImage, imageStyle, navigate } = props

    const { title = "Label", icon, onPress, iconStyle = { backgroundColor: colors.darkViolet, width: WIDTH * 0.07, height: HEIGHT * 0.03, borderRadius: WIDTH * 0.02 }, titleStyle = { color: colors.white }, containerStyle = { width: WIDTH * 0.15, height: HEIGHT * 0.06 }, headerStyle = {
        height: HEIGHT
            * 0.22
    } } = props;

    return (
        // <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: WIDTH * 0.05, marginTop: HEIGHT * 0.02, alignItems: 'center' }}>
        //     <Pressable style={{ flex: 0.5 }} onPress={onPress}>
        //         <View style={{ borderColor: colors.lightgrey, borderWidth: 0.5, padding: WIDTH * 0.015, width: WIDTH * 0.08, borderRadius: WIDTH * 0.02, alignItems: 'center', justifyContent: "center" }}>
        //             <Image source={drawericon} style={{ ...imageStyle }} resizeMode='contain' tintColor={colors.black} />
        //         </View>
        //     </Pressable>
        //     <View style={{ flex: 0.6, alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
        //         {headerImage && (
        //             <Image source={drawericon} style={{ marginLeft: WIDTH * 0.03, width: WIDTH * 0.05, height: HEIGHT * 0.04 }} resizeMode='contain' tintColor={colors.black} />
        //         )}
        //         <Text style={{ color: colors.black, fontSize: 16, fontWeight: 500, marginHorizontal: WIDTH * 0.03 }}>{HeaderTitle}</Text>
        //     </View>
        //     <Pressable style={{ flex: 0.5, alignItems: "flex-end", justifyContent: "center" }} onPress={navigate}>
        //         <Image source={drawericon} style={{ width: WIDTH * 0.05, height: HEIGHT * 0.04 }} resizeMode='contain' tintColor={colors.black} />
        //     </Pressable>
        // </View>

        < ImageBackground source={headerintersection} style={{ backgroundColor: colors.skyblue, /* height: HEIGHT * 0.19, */ borderBottomWidth: 4, borderColor: colors.grey, ...headerStyle }}>
            <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: WIDTH * 0.02, marginTop: HEIGHT * 0.04, borderWidth: 0 }}>
                <Pressable style={{ padding: 8, borderRadius: WIDTH * 0.02, ...containerStyle }} onPress={onPress}>
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={icon} style={{ ...iconStyle }} resizeMode='contain' />
                    </View>
                </Pressable>
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, color: colors.purewhite, ...titleStyle }}>{title}</Text>
                </View>
            </SafeAreaView>
        </ImageBackground >

    )
}


export default HeaderComponent

//     < ImageBackground source = { headerintersection } style = {{ backgroundColor: colors.skyblue, /* height: HEIGHT * 0.19, */ borderBottomWidth: 4, borderColor: colors.grey, ...headerStyle }}>
//         <SafeAreaView style={{ flexDirection: 'row', marginHorizontal: WIDTH * 0.02, marginTop: HEIGHT * 0.04, borderWidth: 0 }}>
//             <Pressable style={{ padding: 8, borderRadius: WIDTH * 0.02, ...containerStyle }} onPress={onPress}>
//                 <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
//                     <Image source={icon} style={{ ...iconStyle }} resizeMode='contain' />
//                 </View>
//             </Pressable>
//             <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
//                 <Text style={{ fontSize: 20, color: colors.purewhite, ...titleStyle }}>{title}</Text>
//             </View>
//         </SafeAreaView>
// </ImageBackground >

// const { title = "Label", icon, onPress, iconStyle = { backgroundColor: colors.darkViolet, width: WIDTH * 0.07, height: HEIGHT * 0.03, borderRadius: WIDTH * 0.02 }, titleStyle = { color: colors.white }, containerStyle = { width: WIDTH * 0.15, height: HEIGHT * 0.06 }, headerStyle = {
//     height: HEIGHT
//         * 0.22
// } } = props;