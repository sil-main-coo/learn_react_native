/**
 * Basic Componets App
 */

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';
import { imgAndroid } from './images';

function App() {
  const onChanged = value => {
    console.log(value);
  };


  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.appBar}>
        <Text style={styles.textAppbar}>
          Basic Components
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={{ marginBottom: 20 }}>
          <Text style={styles.title}>
            Views
          </Text>
          <View style={{ height: 100, flexDirection: "row" }}>
            <View style={{
              backgroundColor: "red",
              flex: 1
            }} />
            <View style={{
              backgroundColor: "green",
              flex: 2
            }} />
          </View>
          <View style={{ height: 100 }}>
            <View style={{
              backgroundColor: "red",
              flex: 1
            }} />
            <View style={{
              backgroundColor: "green",
              flex: 2
            }} />
          </View>
          <Text style={styles.title}>
            Text Input
          </Text>
          <TextInput
            style={styles.normalInput}
            placeholder="Input number here..."
            keyboardType="numeric"
            onChangeText={onChanged}
          />
          <TextInput
            style={styles.normalInput}
            value="999"
            editable={false}
            placeholder="Input number here..."
            keyboardType="default"
            textAlign='center'
            onChangeText={onChanged}
          />
          <TextInput
            multiline
            numberOfLines={10}
            maxLength={40}
            style={styles.normalInput}
            placeholder="Input number here..."
            keyboardType="default"
            textAlign='center'
            onChangeText={onChanged}
          />
          <Text style={styles.title}>
            Image
          </Text>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={{
              width: 50,
              height: 50
            }}
            backgroundColor="blue"
          />
          <Image
            source={imgAndroid}
            style={{
              height: 100,
              width: '100%'
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1
  },
  appBar: {
    backgroundColor: 'green',
    padding: 4,
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textAppbar: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollView: {
    backgroundColor: 'pink',
    padding: 16
    // marginBottom: 50
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    color: "blue",
    marginBottom: 8,
    marginTop: 8
  },
  normalInput: {
    borderWidth: 1,
    padding: 8,
    marginVertical: 8
    // height: 40
  }
});

export default App;
