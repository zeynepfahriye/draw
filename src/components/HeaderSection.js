import { View, Text, SafeAreaView, TouchableOpacity,StyleSheet, FlatList, Modal } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default HeaderSection = ({navigation}) => {
    const DATA = [
        {
            id:1,
            title:"Hayvanlar",
            navigateTo:"AnimalsDetail"
        },
        {
            id:2,
            title:"Nesneler",
            navigateTo:"ObjectsDetail"
        },
        {
            id:3,
            title:"Meslekler",
            navigateTo:"JobsDetail"
        },
        {
            id:1,
            title:"Markalar",
            navigateTo:"BrandsDetail"
        },
    ]
    function Item({title,detail}){
        const navigation =useNavigation();
        return(
            <View style={style.box}>
            <TouchableOpacity style={style.container} 
            onPress={()=> {
                navigation.navigate(detail)
            }
            }
            >
            <Text style={style.text}>{title}</Text>
            </TouchableOpacity>
            </View>
        )
    }
  return (
  <SafeAreaView>
  <FlatList
  data={DATA}
  renderItem={({item})=><Item title={item.title} detail={item.navigateTo} />}
  keyExtractor={item=>item.id}
  horizontal={false}
  numColumns= "2"
   />
  </SafeAreaView>
  )
}
  const style = StyleSheet.create({
    box:{
        flexDirection:'row',
       justifyContent:'center',
       flex:1
    },
    container: {
        width:100,
        height:100,
        borderRadius:30,
        backgroundColor:'blue',
        justifyContent:'center',
        margin:20
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:"white"
    }
  })

