import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'

const ViewExamples = () => {
  console.log("Examples out");

  let x=1;
  x.toString();

  const usersList = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
  ];

  //style={{textAlign:'center'}}
  return (
    <View style={styles.container}>
      <Text >ViewExamples</Text> 
      <Image source={{uri: 'https://picsum.photos/200/300'}} style={{width:200, height:300}} />
      <FlatList
        data={usersList}
        keyExtractor={(item) => item.id}
        //renderItem={({ item }) => <Text>{item.name}</Text>}
        renderItem={(configObject) => <Text>{configObject.item.name}</Text>}
      />
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <Text>Section 1</Text>
        <Text>Section 2</Text>
      </ScrollView>
    </View>
  )
}

export default ViewExamples

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'row',
        backgroundColor: 'yellow',
        justifyContent:'center',
        alignItems:'center'
    }
})