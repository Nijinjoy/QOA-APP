import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { HEIGHT, WIDTH } from '../constants/Dimension';
import colors from '../constants/Colors';

const ButtonComponent = (props: any) => {
    const navigation = useNavigation()
    const { label = "Label", onPress, containerStyle = { width: WIDTH * 0.85, height: HEIGHT * 0.072, borderRadius: WIDTH * 0.02 } } = props;

    return (
        <Pressable style={{ borderWidth: 0, backgroundColor: colors.skyblue, borderRadius: WIDTH * 0.02, justifyContent: 'center', alignItems: 'center', ...containerStyle }} onPress={onPress}>
            <Text style={{ alignSelf: 'center', color: colors.purewhite, fontSize: 17 }}>{label}</Text>
        </Pressable>
    )
}

export default ButtonComponent