import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen1 from '../screens/HomeScreen1';
import DetailScreen1 from '../screens/Details1';

// Stack for the Home tab flow
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeMain" component={HomeScreen1} options={{ headerShown:false}}/>
      <Stack.Screen name="HomeDetail1" component={DetailScreen1} />
    </Stack.Navigator>
  );
}
