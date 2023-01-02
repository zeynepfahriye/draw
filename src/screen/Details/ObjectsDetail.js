import { SafeAreaView, Text } from 'react-native'
import React,{useState} from 'react'
import Button from '../../components/Button'
import Draw from '../../components/Draw'
import data from '../../db/data.json'

const ObjectsDetail = () => {
  const [randomWord,setRandomWord] = useState('')
  onChangeWord = () =>{
    const db = data[3].words
    const myDb = db.toString().split(',')
    return myDb[Math.floor(Math.random()*myDb.length)]
  }
  return (
    <SafeAreaView style={{flex:1}}>
    <Button
    title={"Kelimeyi Değiştir"}
    onPress={()=>{
      const kelime = onChangeWord();
      setRandomWord(kelime)
    }}
    />
    <Text style={{fontSize:50}}>{randomWord}</Text>
    <Draw/>
    </SafeAreaView>
  )
}

export default ObjectsDetail