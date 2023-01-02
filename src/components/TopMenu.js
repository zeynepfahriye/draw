import { View, TouchableOpacity,StyleSheet,Image,Text } from 'react-native'
import React from 'react'
import { units } from '../theme/units'

const TopMenu = ({onPressBack,title}) => {
  return (
    <View style={styles.container}>
          {
            onPressBack &&
            <TouchableOpacity
              hitSlop={{
                top: units.height / 27,
                bottom: units.height / 27,
                left: units.height / 27,
                right: units.height / 27,
              }}
              onPress={onPressBack}>
              <Image 
              style={{width:30,height:30}}
              source={require('../images/backMenu.png')}/>
            </TouchableOpacity>
          }
          <Text style={{marginHorizontal:units.width/3.5,alignSelf:'center',fontWeight:'bold',fontSize:16}}>{title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
   
      flexDirection: 'row',
      paddingHorizontal: units.width / 18,
      paddingVertical: units.height / 35,
    },
    icon: {
        width: units.height / 24,
        height: units.height / 24,
      },
   
})

export default TopMenu