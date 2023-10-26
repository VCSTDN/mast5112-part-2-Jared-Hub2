import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/header';

export default function Genre() {
  return (
    <View style={styles.container}>
        <Header />

        <View style={styles.text}>
            <Text style={fontSize= 15}>Genre Coming Soon!</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f3f4'
      },

    text: {
        alignItems: 'center',
        paddingTop:35,
    },
});