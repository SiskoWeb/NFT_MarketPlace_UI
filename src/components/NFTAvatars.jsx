import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const NFTAvatars = ({ avaters }) => {

    return (
        <View style={styles.container}>
            {avaters.map((avatar) => {
                return (
                    <Image
                        key={avatar.id}
                        source={avatar.image}
                        resizeMode='contain'
                        style={styles.avater}
                    />
                )
            })}
        </View>
    )
}

export default NFTAvatars


const styles = StyleSheet.create({
    container: { flexDirection: "row", paddingHorizontal: 5 },
    avater: {
        width: 40,
        height: 40,
        marginLeft: 5,
        borderRadius: 40
    }
})