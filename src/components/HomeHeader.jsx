import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import avatar from "../../assets/images/avatars/avatar03.jpg";
import { COLORS, FONTS, SIZES } from '../../constants/index';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
const HomeHeader = ({ searchHanddler }) => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View>
                    <Image source={avatar} resizeMode='contain'
                        style={{ width: 44, height: 44, borderRadius: 50 }} />
                </View>

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text style={{ color: COLORS.white, fontSize: SIZES.large }}>Yassine</Text>
                        <MaterialCommunityIcons
                            name="check-decagram"
                            size={24}
                            color="white" />
                    </View>
                    <View>
                        <Text style={{ color: COLORS.white }}>Creator</Text>
                    </View>
                </View>
            </View>

            <View>

                <View style={styles.inputSearch}>
                    <MaterialIcons name="search" size={24} color={COLORS.white} />
                    <TextInput
                        placeholderTextColor={COLORS.white}
                        style={{ flex: 1, color: COLORS.white }}
                        placeholder='Searching'
                        onChangeText={searchHanddler} />

                </View>
            </View>
        </View>
    )
}

export default HomeHeader

const styles = StyleSheet.create({

    container: {
        padding: SIZES.small,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
        paddingHorizontal: 10,

    },
    inputSearch: {
        backgroundColor: COLORS.cardBg,
        flexDirection: 'row',
        padding: SIZES.small,
        borderRadius: SIZES.medium,
        marginTop: 5,
        gap: 16
    }

})