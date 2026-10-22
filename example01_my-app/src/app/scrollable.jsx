import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import React from 'react'

const scrollable = () => {
    const usersList = [
        { id: '1', name: 'Alice', picture: 'https://picsum.photos/200/400?random=1' },
        { id: '2', name: 'Bob', picture: 'https://picsum.photos/200/400?random=2' },
        { id: '3', name: 'Charlie', picture: 'https://picsum.photos/200/400?random=3' },
        ];

    return (
    <View style={{flex:1}}>
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Text>Section 1</Text>
            <Text>Section 2</Text>
        </ScrollView>

        <FlatList
            data={usersList}
            keyExtractor={(item) => item.id}
            horizontal
            renderItem={({ item }) => (
            <View>
                <Image source={{uri:item.picture}} style={{ width: 200, height: 400 }}/>
                <Text>{item.name}</Text>
            </View>
            )}
        />
    </View>
  )
}

export default scrollable