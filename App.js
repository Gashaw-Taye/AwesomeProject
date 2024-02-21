import {View,Text,StyleSheet,TextInput,Button} from 'react-native'
import { useState } from 'react'

export default function App(){

  const [value,setvalue]=useState('')
  const [listofnotes,setlistofnotes]=useState([])
  function handeleonpress(){
    // alert(value)
    setlistofnotes(currentnotes=>[...currentnotes,value])
  }
  
  function handleOnchangeText(getetxt){
    // console.log('helo gashaw'+getetxt)
    setvalue(getetxt)
  }
  console.log(listofnotes)
  return(
    <View style={{
      padding:60
    }}>
      <View style={styles.inputcontainer}>
        <TextInput onChangeText={handleOnchangeText} style={styles.input} placeholder='Add your not here'/>
        <Button  onPress={handeleonpress} color={'#000'} title='add note'/>
      </View>
      {/* <View style={styles.nestedcontainer}>
        <Text style={{
          fontSize:20,
          margin:30,
          color:'blue'
        }}>test two</Text>
      </View> */}
      <View style={styles.listcontainer}>
        { listofnotes.map((item,index)=>(
        <Text key={`items${index}`}>{item}</Text>))}
        <Text>Show list here !</Text>
    </View>
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  nestedcontainer:{
    display:'flex',
    width:200,
    height:200,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems:'center'
  },
  inputcontainer:{
flexDirection:"row",
paddingBottom:30,
borderBottomWidth:1
  },
  input:{
borderWidth:1,
borderColor:'red',
flex:1

  },
  listcontainer:{
    paddingTop:30
  }
})