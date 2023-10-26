import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar
} from 'react-native';


export default function Header() {
  return (
    <View style={styles.container}>

        <StatusBar />

      <View style={styles.topColor}>
        <View style={styles.topSection}>
            <Image style={styles.image} source={require('../assets/Logo.png')}/>
            <Text style={styles.title}>Book{'\n'}Marked</Text>
          </View>
      </View>

    </View>
  )};

  const styles = StyleSheet.create({
      
    topColor: {
      backgroundColor: '#007FDA',
    },
  
    topSection: {
      flexDirection: 'row',
      marginTop: 25,
      paddingLeft: 15,
    },
  
    image: {
      width: 90,
      height: 83,
    },
  
    title: {
      fontSize: 44,
      fontWeight: 'bold',
      color: 'black',
      paddingLeft: 30,
    },
});