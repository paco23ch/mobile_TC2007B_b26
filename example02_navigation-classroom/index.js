import { registerRootComponent } from 'expo';

// 💡 CLASSROOM SWITCH: 
// Set to 'false' to teach pure React Navigation (via App.tsx)
// Set to 'true' to teach Expo Router (via the app/ folder)
const USE_EXPO_ROUTER = false; 

if (USE_EXPO_ROUTER) {
  const { App } = require('expo-router/build/qualified-entry');
  registerRootComponent(App);
} else {
  const App = require('./App').default;
  registerRootComponent(App);
}
