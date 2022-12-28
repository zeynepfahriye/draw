import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {units} from '../theme/units';
const Button = ({onPress, title, backgroundColor}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        backgroundColor={backgroundColor}
        style={style.button}>
        <Text style={style.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
const style = StyleSheet.create({
  button: {
    alignSelf: 'center',
    paddingVertical: units.height / 76,
    width: units.width / 1.2,
    borderRadius: units.height / 72,
    borderWidth: 1,
    backgroundColor: 'red',
    borderColor:'red',
    margin:10
 
  },
  text: {
    textAlign: 'center',
    fontSize:25,
    color:'white'
  },
});

export default Button;
