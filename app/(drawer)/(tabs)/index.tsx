import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { NewMeal } from '~/components/NewMeal';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Container>
        <NewMeal />
      </Container>
    </>
  );
}
