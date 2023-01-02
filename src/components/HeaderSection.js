import { View, Text, SafeAreaView, TouchableOpacity,StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { units } from '../theme/units'
import { source } from 'deprecated-react-native-prop-types/DeprecatedImagePropType'

export default HeaderSection = ({navigation}) => {
    const DATA = [
        {
            id:1,
            title:"Hayvanlar",
            navigateTo:"AnimalsDetail",
            image:(require('../images/animals.jpeg'))
        },
        {
            id:2,
            title:"Nesneler",
            navigateTo:"ObjectsDetail",
            image:(require('../images/objects.png'))
        },
        {
            id:3,
            title:"Meslekler",
            navigateTo:"JobsDetail",
            image:(require('../images/jobs.jpeg'))
        },
        {
            id:1,
            title:"Markalar",
            navigateTo:"BrandsDetail",
            image:(require('../images/brand.png'))
        },
    ]
    function Item({title,detail,image}){
        const navigation = useNavigation();
        return(
            <SafeAreaView style={style.box}>
                <Image
              style={style.image}
                source={image}
                resizeMode="contain"
            />
            <TouchableOpacity style={style.container} 
            onPress={()=> {
                navigation.navigate(detail)
            }
            }
            >
            </TouchableOpacity>
            <Text style={style.text}>{title}</Text>
            </SafeAreaView>
        )
    }
  return (
  <SafeAreaView style={{flex:1}}>
  <FlatList
  data={DATA}
  renderItem={({item})=><Item title={item.title} detail={item.navigateTo} image={item.image} />}
  keyExtractor={item=>item.id}
  horizontal={false}
  numColumns= "2"
   />
  </SafeAreaView>
  )
}
  const style = StyleSheet.create({
    box:{
        marginHorizontal:20,
       justifyContent:'center',
       flex:1,
       marginTop:units.height/12,
    },
    container: {
        width:units.width/2.2,
        height:units.height/4,
        borderRadius:units.height/50,
        backgroundColor:'grey',
        opacity:0.7,
        alignSelf:'center'
        
    },
    image:{
        width:units.width/2.2,
        height:units.height/4,
        position:'absolute',
        alignSelf:'center',
    },
    text:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        color:"black",
        position:'absolute',
        alignSelf:'center',
    }
  })

