import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons'; 
import Ionicons from '@expo/vector-icons/Ionicons'; // remember to npx expo install @expo/vector-icons

import HomeStack from './navigation/HomeStack';
import ProfileStack from './navigation/ProfileStack';

const Tab = createBottomTabNavigator();
const USE_EXPO_ROUTER = false;

// Main Tab Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // 2. Configure the tabBarIcon dynamically
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // Return the Ionicons component with props passed by React Navigation
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // 3. Optional: Customize active and inactive colors
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        {/* The Home tab contains its own mini-stack */}
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
