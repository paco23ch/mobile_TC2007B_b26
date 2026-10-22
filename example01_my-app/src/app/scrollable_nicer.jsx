import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const Scrollable = () => {
  const usersList = [
    { id: '1', name: 'Alice', picture: 'https://picsum.photos/200/400?random=1' },
    { id: '2', name: 'Bob', picture: 'https://picsum.photos/200/400?random=2' },
    { id: '3', name: 'Charlie', picture: 'https://picsum.photos/200/400?random=3' },
  ];

  return (
    // FIX 1: flex: 1 gives this container structure so inner lists can scroll
    <View style={{ flex: 1 }}>
      <FlatList
        data={usersList}
        keyExtractor={(item) => item.id}
        
        // FIX 2: Replaces the ScrollView. This scrolls smoothly with the list!
        ListHeaderComponent={
          <View style={{ padding: 16 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Section 1</Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>Section 2</Text>
          </View>
        }
        
        renderItem={({ item }) => (
          <View style={{ paddingHorizontal: 16, marginBottom: 16 }}>
            <Image 
              source={{ uri: item.picture }} 
              style={{ width: 200, height: 400, borderRadius: 8 }}
            />
            <Text style={{ fontSize: 16, marginTop: 4 }}>{item.name}</Text>
          </View>
        )}
        
        // Keeps padding consistent at the bottom of the list
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
};

export default Scrollable;
