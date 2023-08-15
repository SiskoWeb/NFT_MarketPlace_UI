import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import NFTImage from '../components/NFTImage';
import { COLORS, FONTS, SIZES } from '../../constants/index';
import NFTAvatars from '../components/NFTAvatars';
import NFTTitle from '../components/NFTTitle';
import NFTInfo from '../components/NFTInfo';
import NFMoreInfo from '../components/NFMoreInfo';
import Button from '../components/Button';
const NFTDetails = ({ route, navigation }) => {

    {/* get data passed from route  */ }
    const { nftData } = route.params;



    {/* btn get a bid  */ }
    const pressHandlerbtn = () => {
        alert(`Done Mr: ${nftData.creator}`)
    };

    {/* function for bakc btn abouv image */ }
    const pressHandlerArrow = () => {

        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>


            {/* NFTImage */}
            <TouchableOpacity >
                <NFTImage image={nftData.image} imageStyles={styles.imageStyles} arrow pressHandler={pressHandlerArrow} />
            </TouchableOpacity>


            {/* main data */}
            <View style={{ paddingHorizontal: SIZES.xLarge }}>

                {/* Avatars */}
                <View style={{ marginTop: -SIZES.xLarge }}>
                    <NFTAvatars avaters={nftData.avatars} />
                </View>



                {/* Name and data creator */}
                <View tyle={{ marginVertical: SIZES.medium }}>
                    <NFTTitle name={nftData.name} creator={nftData.creator} date={nftData.date} />
                </View>


                {/* information such as comment views .. */}
                <View style={{ marginVertical: SIZES.medium }}>
                    <NFTInfo comments={nftData.comments} views={nftData.views} price={nftData.price} />
                </View>

                {/* More information such as address  */}
                <View style={{ marginVertical: SIZES.medium }}>
                    <NFMoreInfo
                        address={nftData.address}
                        tokenId={nftData.tokenId}
                        tokenSt={nftData.tokenSt}
                        blockchain={nftData.blockchain}
                    />
                </View>


                {/* Btn */}
                <View style={styles.buttonContainer}>

                    <View style={styles.wrapper}>

                        <View style={styles.textWrapper}>
                            <Text style={styles.text}>Top bid</Text>
                            <Text style={styles.text}>$10,5221</Text>
                        </View>

                        <View>
                            <Button pressHandler={pressHandlerbtn} stylesText={styles.stylesText} title='Place a bid' stylesButton={styles.stylesButton} />
                        </View>

                    </View>

                </View>


            </View>
        </SafeAreaView>
    )
}

export default NFTDetails


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.bg,
        flex: 1
    },
    imageStyles: {
        width: "100%",
        height: 400,
        borderRadius: 20,
    },
    buttonContainer: {
        width: "100%",
        bottom: SIZES.small,
        justifyContent: "center",
        alignItems: "center",

    },
    wrapper: {
        backgroundColor: COLORS.cardBg,
        width: 300,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,

        borderRadius: 20,

    },
    textWrapper: {

        flexDirection: 'column'
    },
    text: {
        color: COLORS.white
    },
    stylesText: {
        fontFamily: FONTS.bold,
        color: COLORS.white,
        fontSize: SIZES.medium
    },
    stylesButton: {
        backgroundColor: COLORS.second,
        padding: SIZES.small + 4,
        width: 140,
        alignItems: "center",
        borderRadius: SIZES.xLarge,
    }
})