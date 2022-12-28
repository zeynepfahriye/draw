import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import AnimalsDetail from '../screen/Details/AnimalsDetail';
import BrandsDetail from '../screen/Details/BrandsDetail';
import ObjectsDetail from '../screen/Details/ObjectsDetail'
import JobsDetail from '../screen/Details/JobsDetail'
const Navigation = () => {
    const Stack = createNativeStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name ="Home" component={Home}/>
    <Stack.Screen name='AnimalsDetail' component={AnimalsDetail}/>
    <Stack.Screen name='BrandsDetail' component={BrandsDetail}/>
    <Stack.Screen name='ObjectsDetail' component={ObjectsDetail}/>
    <Stack.Screen name='JobsDetail' component={JobsDetail}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation