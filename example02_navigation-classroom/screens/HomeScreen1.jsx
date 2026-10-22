import React from 'react';
import { View, Text, Button} from 'react-native';

export default function HomeScreen1({navigation}) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='Press me' onPress={()=>navigation.navigate('HomeDetail1')} />
    </View>
  );
}