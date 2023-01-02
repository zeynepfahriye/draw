import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import HeaderSection from '../components/HeaderSection'
import TopMenu from '../components/TopMenu'
const Home = () => {
   
  return (
    <SafeAreaView style={{backgroundColor:'white',flex:1}}>
    <View style={{backgroundColor:'red',borderBottomLeftRadius:40,borderBottomRightRadius:40,height:100}}>
    <Text style ={{fontSize:20,fontWeight:'bold',textAlign:'center',marginTop:25,color:'white'}}>Merhaba ilgi duyduğun alanı seç ve çizmeye başla !!</Text>
    </View>
    <HeaderSection
    />
    </SafeAreaView>
    
  )
}

export default Home