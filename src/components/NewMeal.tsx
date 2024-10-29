import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-modern-datepicker';

import { Container } from './Container';
import { Controller, FieldValue, useForm } from 'react-hook-form';


type FormData = {
  meal: string
  description: string
  isHealth: boolean
}


export function NewMeal() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      meal: "",
      description: "",
      isHealth: false
    },
  })
  const onSubmit = (data: FormData) => console.log(data)

  return (
    <Container>
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange, value } }) => (
          <View className='rounded border border-slate-50 w-full'>
            <Text>Nome</Text>
            <TextInput value={value} onChangeText={onChange} placeholder='nomeie sua refeição' />
          </View>
        )}
        name='meal'
      />

      {errors.meal && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { value, onChange } }) => (
          <View>
            <Text>Nome</Text>
            <TextInput value={value} onChangeText={onChange} placeholder='descreva sua refeição' />
          </View>
        )}
        name='description'
      />
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { onChange } }) => (
          <View>
            <Pressable onPress={() => onChange(true)}>
              <Text>Sim</Text>
            </Pressable>
            <Pressable onPress={() => onChange(false)}>
              <Text>Não</Text>
            </Pressable>
          </View>
        )}
        name='isHealth'
      />
      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text>salvar</Text>
      </Pressable>
    </Container>
  );
}
