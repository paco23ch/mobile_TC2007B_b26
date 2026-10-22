import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen2 from '../screens/HomeScreen2';
import DetailScreen2 from '../screens/Details2';

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain2" component={HomeScreen2} />
      <Stack.Screen name="HomeDetail2" component={DetailScreen2} />
    </Stack.Navigator>
  );
}