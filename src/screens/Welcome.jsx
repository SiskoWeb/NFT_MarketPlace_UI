import { View, Text, SafeAreaView, Image, StyleSheet, Animated } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { COLORS, FONTS, SIZES } from "../../constants";
import nft08 from "../../assets/images/nft08.jpg";
import nft06 from "../../assets/images/nft06.jpg";
import nft04 from "../../assets/images/nft04.jpg";
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const navigation = useNavigation()


    {/* to go home */ }
    const pressHandler = () => {
        navigation.navigate('Home')
    }

    {/*  animation to change opacity images */ }
    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: true,
        }).start();
    };


    {/* initial animation for first rander */ }
    useEffect(() => {

        fadeIn()

    }, [fadeIn])


    return (
        <SafeAreaView style={styles.container}>

            {/* images */}
            <Animated.View style={[styles.imageContainer, { opacity: fadeAnim }]} >

                <View style={styles.imageCard} >
                    <Image style={styles.image} source={nft08} />
                </View>

                <View style={[styles.imageCard, { top: SIZES.medium + 17 }]} >
                    <Image style={styles.image} source={nft06} />
                </View>

                <View style={styles.imageCard} >
                    <Image style={styles.image} source={nft04} />
                </View>

            </Animated.View>


            <View>
                <Text style={styles.mainText}>Find, Collect and Sell Amazing NFTs</Text>
                <Text style={styles.subText}>
                    Explore the top collection of NFTs and buy and sell your NFTs as well
                </Text>
            </View>

            <View style={styles.btnContainer}>
                <Button pressHandler={pressHandler} stylesText={styles.stylesText} title='Get Started' stylesButton={styles.stylesButton} />
            </View>
        </SafeAreaView>
    )
}



export default Welcome

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: SIZES.small + 10,
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: COLORS.bg,
    },
    imageContainer: {
        top: -SIZES.medium - 50,
        flexDirection: "row",
        gap: SIZES.small,
    },
    imageCard: {
        borderRadius: SIZES.medium,
        padding: SIZES.small,
        backgroundColor: COLORS.cardBg
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: SIZES.medium

    },
    mainText: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large + 5,
        color: COLORS.white,
        textAlign: "center"
    },
    subText: {
        fontFamily: FONTS.light,
        color: COLORS.gray,
        textAlign: "center",
        fontSize: SIZES.small + 5,
        marginTop: SIZES.large
    },
    btnContainer: {
        position: 'absolute',
        bottom: SIZES.xLarge + 10,
        marginVertical: SIZES.xLarge,
    }
    ,
    stylesButton: {
        backgroundColor: COLORS.second,
        padding: SIZES.small + 4,
        width: 240,
        alignItems: "center",
        borderRadius: SIZES.medium,

    },
    stylesText: {
        fontFamily: FONTS.bold,
        color: COLORS.white,
        fontSize: SIZES.large

    }
})