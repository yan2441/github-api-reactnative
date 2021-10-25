import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SearchScreen from './app/screens/SearchScreen';
import profileScreen from './app/screens/profileScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import appTheme from './app/theme/appTheme';
import AppNavigationBar from './app/components/AppNavigationBar';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <PaperProvider theme={appTheme.CombinedDarkTheme}>
      <NavigationContainer theme={appTheme.CombinedDarkTheme}>
        <Stack.Navigator screenOptions={{
          header: (props) => <AppNavigationBar {...props} />,
        }}>
          <Stack.Screen name="search" component={SearchScreen} />
          <Stack.Screen name="profile" component={profileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider >
  );
}


