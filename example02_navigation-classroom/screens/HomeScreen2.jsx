import React from 'react';
import { View, Text, Button} from 'react-native';


export default function HomeScreen2({navigation}) {
  return (
    <View>
      <Text>Profile Home Screen </Text>
      <Button title='Press me' onPress={()=>navigation.navigate('HomeDetail2')} />
    </View>
  );
}
