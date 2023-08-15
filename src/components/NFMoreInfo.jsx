import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants'

const NFMoreInfo = ({ address, tokenId, tokenSt, blockchain }) => {
  return (
    <View style={{ marginVertical: SIZES.medium }}>

      <View style={styles.wrapper}>
        <Text style={styles.text}>Contract Address</Text>
        <Text style={styles.text}>{address}</Text>
      </View>


      <View style={styles.wrapper}>
        <Text style={styles.text}>Token ID</Text>
        <Text style={styles.text}>{tokenId}</Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.text}>Token Standed</Text>
        <Text style={styles.text}>{tokenSt}</Text>
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.text}>Blockchain</Text>
        <Text style={styles.text}>{blockchain}</Text>
      </View>
    </View>
  )
}

export default NFMoreInfo


const styles = StyleSheet.create({
  container: {

  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.cardBg,
    marginVertical: SIZES.small - 4,

  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.medium
  }
})