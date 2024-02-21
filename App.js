import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {
  const [value, setvalue] = useState('');
  const [listofnotes, setlistofnotes] = useState([]);

  function handeleonpress() {
    if (value.trim() !== '') {
      setlistofnotes((currentnotes) => [...currentnotes, value]);
      setvalue('');
    } else {
      // Show an alert or take any other appropriate action
      alert('Please enter a non-empty note.');
    }
  }

  function handleOnchangeText(getetxt) {
    setvalue(getetxt);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          onChangeText={handleOnchangeText}
          value={value} 
          style={styles.input}
          placeholder='Add your name list here'
        />
        <Button onPress={handeleonpress} color={'#000'} title='Add' />
      </View>
      <View style={styles.listcontainer}>
        {listofnotes.map((item, index) => (
          <Text key={`items${index}`}>{item}</Text>
        ))}
        <Text>Show list here!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 2,
    justifyContent: 'top',
    alignItems: 'left',
    backgroundColor:'grey',
    padding: 60
  },
  nestedcontainer: {
    display: 'flex',
    width: 200,
    height: 200,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputcontainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    borderBottomWidth: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    flex: 1,
  },
  listcontainer: {
    paddingTop: 30,
  },
});
