import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const CommonStyle = StyleSheet.create({
    flexDirection: (lang) => {
        return {
            flexDirection: lang == "ar" ? "row-reverse" : "row",
        }
    },
    transform: (lang) => {
        return {
            transform: lang == "ar" ? [{ rotate: '180deg' }] : ""
        }
    },
    textAlign: (lang) => {
        return {
            textAlign: lang == "ar" ? "right" : "left",
        }
    },
    alignItems: (lang) => {
        return {
            alignItems: lang == "ar" ? "flex-end" : ""
        }
    }
})


export default CommonStyle