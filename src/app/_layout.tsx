import '../../global.css';

import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import NewMealSection from './new-meal';



export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="new-meal" options={{ headerShown: true, headerTitle: 'Nova Refeição' }} />
      <Stack.Screen name='[id]' options={{
        headerShown: true, headerTitle: "Refeição ",
        headerStyle: {
          backgroundColor: '#E5F0DB',
        },
        headerTintColor: '#333638',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' }

      }} />
    </Stack>
  );
}
