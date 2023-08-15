import { View, Text, TouchableWithoutFeedback, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import NFTImage from './NFTImage'
import { COLORS, FONTS, SIZES } from '../../constants/index';
import NFTAvatars from './NFTAvatars';
import NFTTitle from './NFTTitle';
import { useNavigation } from '@react-navigation/native';
import NFTInfo from './NFTInfo';
const NFTCard = ({ nftData }) => {
    const navigation = useNavigation()
    const pressHandler = () => {
        navigation.navigate('NFTDetails', { nftData })

    }
    return (
        <TouchableWithoutFeedback>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={pressHandler}>
                    <NFTImage image={nftData.image} imageStyles={styles.imageStyles} />
                </TouchableOpacity>


                <View style={styles.cardTop}>
                    <NFTAvatars avaters={nftData.avatars} />
                </View>


                <View style={styles.cardBottom}>
                    <NFTTitle name={nftData.name} creator={nftData.creator} date={nftData.date} />


                </View>
                <View style={{ marginVertical: SIZES.medium }}>


                    <NFTInfo comments={nftData.comments} views={nftData.views} price={nftData.price} />
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default NFTCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.cardBg,
        borderRadius: SIZES.medium,
        marginBottom: SIZES.xLarge,
        marginVertical: SIZES.small - 5,
        marginHorizontal: 14,
        padding: 12,
    },
    cardTop: {
        width: "100%",
        paddingHorizontal: SIZES.small,
        marginTop: -30,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardBottom: { width: "100%", padding: SIZES.medium },
    imageStyles: {
        width: "100%",
        height: 300,
        borderRadius: 30,
    },
})