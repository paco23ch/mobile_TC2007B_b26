import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';
import { useEffect } from 'react'

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';
//import App from '@/app/index'
//import App from '@/app/dynamic_media'
import ViewExamples from '@/app/view_example'
import Banking from '@/app/solution'

SplashScreen.preventAutoHideAsync();

//import { requireOptionalNativeModule } from 'expo';

// Add this at the top of your layout file (outside the component)
//const DevMenuPreferences = requireOptionalNativeModule('DevMenuPreferences');
//DevMenuPreferences?.setPreferencesAsync({ 
//  showFloatingActionButton: false 
//});



export default function TabLayout() {
  const colorScheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack initialRouteName='solution'>
      <Stack.Screen name='dynamic_media'/>
      <Stack.Screen name='index'/>
      <Stack.Screen name='solution'/>
      <Stack.Screen name='scrollable'/>
      <Stack.Screen name='login'/>
    </Stack>
  );
}

/*

    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Banking />
    </ThemeProvider>

*/

