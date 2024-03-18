import { View, Text, Pressable, TextInput } from 'react-native'
import React, { useState } from 'react'
import colors from '../constants/Colors'
import { HEIGHT, WIDTH } from '../constants/Dimension'
import DocumentPicker from 'react-native-document-picker'

const UploadComponent = (props) => {
    const { placeholder } = props
    const [selectedFile, setSelectedFile] = useState(null)

    console.log("selectedFile==>", selectedFile);


    const handleUpload = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.allFiles],
            })
            setSelectedFile(res)
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
            }
        }
    }

    return (
        <View style={{ borderWidth: 1, borderColor: colors.lightgrey, flexDirection: 'row', borderRadius: WIDTH * 0.02, justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ margin: WIDTH * 0.03 }}>
                <TextInput
                    placeholder={placeholder}
                    editable={false}
                    value={selectedFile ? selectedFile.name : ''}
                />
            </View>
            <Pressable onPress={handleUpload} style={{ padding: WIDTH * 0.03, backgroundColor: colors.darkred, borderRadius: WIDTH * 0.01, margin: HEIGHT * 0.005 }}>
                <Text style={{ fontSize: 13, color: colors.purewhite }}>Upload</Text>
            </Pressable>
        </View>
    )
}

export default UploadComponent