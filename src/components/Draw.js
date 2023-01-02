import { View, Text, SafeAreaView ,StyleSheet,Image} from 'react-native'
import React from 'react'
import RNSketchCanvas, { SketchCanvas } from '@terrylinla/react-native-sketch-canvas'

const Draw = () => {
  return (
    <SafeAreaView style ={styles.container}>
  { /* <SketchCanvas 
      style={{flex:1}}
      strokeColor={'red'}
      strokeWidth={6}
    />*/}
  
{    <RNSketchCanvas
            containerStyle={{ backgroundColor: 'transparent', flex: 1 }}
            canvasStyle={{ backgroundColor: 'transparent', flex: 1 }}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            undoComponent={<View style={styles.functionButton}><Image source={require('../images/back.png')} style={{width:30,height:30,tintColor:'white'}}/></View>}
            clearComponent={<View style={styles.functionButton}><Image source={require('../images/clear.png')} style={{width:30,height:30,tintColor:'white'}}/></View>}
            eraseComponent={<View style={styles.functionButton}><Image source={require('../images/eraser.png')} style={{width:30,height:30,tintColor:'white'}}/></View>}
            strokeComponent={color => (
              <View style={[{ backgroundColor: color }, styles.strokeColorButton]} />
            )}
            strokeSelectedComponent={(color, index, changed) => {
              return (
                <View style={[{ backgroundColor: color, borderWidth: 2 }, styles.strokeColorButton]} />
              )
            }}
            strokeWidthComponent={(w) => {
              return (<View style={styles.strokeWidthButton}>
                <View  style={{
                  backgroundColor: 'white', marginHorizontal: 2.5,
                  width: Math.sqrt(w / 3) * 10, height: Math.sqrt(w / 3) * 10, borderRadius: Math.sqrt(w / 3) * 10 / 2
                }} />
              </View>
            )}}
            saveComponent={<View style={styles.functionButton}><Image source={require('../images/save.png')} style={{width:30,height:30,tintColor:'white'}}/></View>}
            savePreference={() => {
              console.log(neee)
              return {
                folder: 'RNSketchCanvas',
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: 'png'
              }
            }}
          />
}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
  },
  strokeColorButton: {
    marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 23.5, marginVertical: 8, width: 80, height: 50, borderRadius:10,
    justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
  },
  functionButton: {
    marginHorizontal: 2.5, marginVertical: 8, height: 50, width: 60,
    backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
  }
});


export default Draw