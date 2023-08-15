import { View, Text, Image, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import Button from './Button'
import { Feather } from "@expo/vector-icons";
import { COLORS, FONTS, SIZES } from '../../constants'


const NFTImage = ({ image, imageStyles, arrow, pressHandler }) => {

    return (

        <View style={styles.container}>

            {/* bmain image  */}
            <Image source={image} style={imageStyles} resizeMode="cover" />


            {/* btn back  */}
            {arrow && (
                <Button
                    stylesButton={styles.buttonArrow}
                    Icon={<Feather name="arrow-left" size={20} color={COLORS.second} />}
                    pressHandler={pressHandler && pressHandler}
                />
            )}
        </View>

    )
}

export default NFTImage

const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: 'relative'
    },
    buttonArrow: {
        position: "absolute",
        top: StatusBar.currentHeight + 10,
        left: 10,
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 40,
    },
})


