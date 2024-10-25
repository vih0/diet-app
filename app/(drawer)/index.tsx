import React from 'react';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { Container } from '~/components/Container';
import { HomeSection } from '~/components/HomeSection';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <HomeSection />
    </>
  );
}
