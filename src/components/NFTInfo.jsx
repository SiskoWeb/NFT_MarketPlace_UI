import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../../constants/index';
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NFTInfo = ({ comments, views, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Feather name="eye" size={20} color={COLORS.white} />
        <Text style={styles.text}>{views}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name="comment-text-outline"
          size={17}
          color={COLORS.white}
        />
        <Text style={styles.text}>{comments}</Text>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons name="ethereum" size={20} color="white" />
        <Text style={styles.text}>{price}</Text>
      </View>
    </View>
  )
}

export default NFTInfo


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: "center",
    justifyContent: 'space-between',


  },
  wrapper: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.second,
    width: 90,
    borderRadius: SIZES.xLarge,
    paddingVertical: 3,
    gap: 4,

  }
  ,
  text: {
    color: COLORS.white,
    fontSize: SIZES.medium,
    fontFamily: FONTS.semiBold
  }
})