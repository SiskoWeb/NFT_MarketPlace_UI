import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/index';
import { MaterialCommunityIcons } from "@expo/vector-icons";
const NFTTitle = ({ name, creator, date }) => {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.text}>{name}</Text>
            </View>

            <View style={styles.info}>
                <View style={styles.creatorStyle}>
                    <Text style={[styles.textCreator, styles.textStyle]}>{creator}</Text>
                    <MaterialCommunityIcons
                        name="check-decagram"
                        size={20}
                        color="white"
                    />
                </View>

                <View>
                    <Text style={[styles.textStyle]}>{date}</Text>
                </View>
            </View>

        </View>
    )
}

export default NFTTitle


const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        gap: 5,


    }
    , text: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontSize: SIZES.medium
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    creatorStyle: {
        flexDirection: 'row',
        columnGap: 5
    },
    textStyle: {
        color: COLORS.white,
    }
})