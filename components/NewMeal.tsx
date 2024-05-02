import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-modern-datepicker';

import { Container } from './Container';

export function NewMeal() {
  const [mealName, setMealName] = useState('');
  const [mealDescription, setMealDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [open, setOpen] = useState(false);
  const today = new Date().getUTCDate();
  console.log(today);
  return (
    <Container>
      <Text className="">Adicionar nova refeição</Text>
      <View>
        <Text>Nome</Text>
        <TextInput value={mealName} onChangeText={setMealName} />
      </View>
      <View>
        <Text>Descrição</Text>
        <TextInput value={mealDescription} onChangeText={setMealDescription} />
      </View>
      <View>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Text>Data</Text>
        </TouchableOpacity>
        {open && (
          <DatePicker
            onSelectedChange={(date) => setDate(date)}
            mode="calendar"
            options={{
              borderColor: 'red',
            }}
            style={{ borderRadius: 10, position: 'absolute', top: 0 }}
          />
        )}
      </View>
      <View>
        <TouchableOpacity onPress={() => setOpen(!open)}>
          <Text>Hora</Text>
        </TouchableOpacity>
        <DatePicker onSelectedChange={(date) => setDate(date)} mode="time" />
      </View>
      <View>
        <Text>Esta dentro da dieta?</Text>
        <View>
          <Pressable>
            <Text>Sim</Text>
          </Pressable>
          <Pressable>
            <Text>Não</Text>
          </Pressable>
        </View>
      </View>
    </Container>
  );
}
