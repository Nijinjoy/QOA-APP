import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
// import SelectDropdown from 'react-native-select-dropdown'
import { downArrow } from '../assets/images';
import { Dropdown } from 'react-native-element-dropdown'
import { HEIGHT, WIDTH } from '../constants/Dimension';
import colors from '../constants/Colors';

const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.name}</Text>
            </View>
        );
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: "center" }}>
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={items}
                maxHeight={300}
                placeholder="Choose from list"
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                    setValue(item._id);
                    onSelectItem(item);
                }}

                renderItem={renderItem}
            />
        </View>
    )
}

export default DropdownComponent

const styles = StyleSheet.create({
    dropdown: {
        width: WIDTH * 0.9,
        borderWidth: 1,
        height: HEIGHT * 0.06,
        backgroundColor: 'white',
        borderColor: colors.lightgrey,
        borderRadius: WIDTH * 0.02,
    },
    icon: {
        marginRight: 5,
    },
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 16,
        color: colors.lightBlack,
        marginHorizontal: WIDTH * 0.02
    },
    selectedTextStyle: {
        fontSize: 16,
        marginHorizontal: WIDTH * 0.03
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});