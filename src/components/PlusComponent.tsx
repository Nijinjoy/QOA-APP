import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { plus } from '../assets/images'
import { HEIGHT, WIDTH } from '../constants/Dimension'

const PlusComponent = () => {
    return (
        <Pressable style={{ borderWidth: 1, width: WIDTH * 0.15, justifyContent: "center", alignItems: "center", height: WIDTH * 0.15, borderRadius: WIDTH * 0.15 }}>
            <Image source={plus} style={{ width: WIDTH * 0.1, height: HEIGHT * 0.05 }} />
        </Pressable>
    )
}

export default PlusComponent