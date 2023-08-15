import { View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS, DATA, SIZES } from "../../constants";
import NFTCard from '../components/NFTCard';
import NFTAvatars from '../components/NFTAvatars';
import HomeHeader from '../components/HomeHeader';
import { FlashList } from '@shopify/flash-list';
const Home = () => {
    const [nftsData, setNftsData] = useState(DATA)



    {/* function for searching  */ }
    const searchHanddler = (value) => {
        if (value) {
            const filteredData = DATA.filter((nft) =>
                nft.name.toLowerCase().includes(value.toLowerCase())
            );
            setNftsData(filteredData);
        } else {
            setNftsData(DATA);
        }
    }

    {/* if there is no data or error display this */ }
    const NotFoundNFT = () => {
        return (
            <View style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Opps... ! </Text>
                <Text style={styles.notFoundText}> Not found the NFT</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* header containe name and input searching */}
            <HomeHeader searchHanddler={searchHanddler} />

            {/* maping to display ntfcard  */}
            {!nftsData.length ?
                <NotFoundNFT /> :
                <FlashList
                    data={nftsData}
                    renderItem={({ item }) => <NFTCard nftData={item} />}
                    keyExtractor={item => item.id}
                    estimatedItemSize={200}
                />}


            <View>

            </View>

        </SafeAreaView>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg,
        paddingTop: StatusBar.currentHeight + 10,

    }, notFoundContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.xLarge,
    },
    notFoundText: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontSize: SIZES.xLarge,
    },
})


