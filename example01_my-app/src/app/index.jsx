import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'expo-image'

import logo_image from "@/assets/images/icon.png"

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={logo_image} contentFit='cover' style={styles.image}>
       <Text style={styles.text}>App</Text>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:'tomato',
    alignContent: 'center',
    flexDirection:'column',
  },
  image: {
    width:'100%',
    height:'100%',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    resizeMode:'cover'
  },
  text : {
    color:'white',
    fontSize:40,
    fontWeight:'bold',
    alignContent:'center',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  }
})