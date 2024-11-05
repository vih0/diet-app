import { useState } from 'react';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DatePicker from 'react-native-modern-datepicker';

import { Container } from './Container';
import { Controller, FieldValue, useForm } from 'react-hook-form';
import { Meal } from '../types/Meal';


export function NewMeal() {
  const [isHeath, setIsHeath] = useState(false)
  const [isNotHeath, setIsNotHeath] = useState(false)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Meal>({
    defaultValues: {
      title: "",
      description: "",
      ishealth: false
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
          <View className='mt-16'>
            <Text className='font-bold text-xl mb-2'>Nome</Text>
            <View className='rounded border border-[#DDDEDF] w-full'>
              <TextInput value={value} onChangeText={onChange} className='p-4 text-lg' />
            </View>
          </View>
        )}
        name='title'
      />

      {errors.meal && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true
        }}
        render={({ field: { value, onChange } }) => (
          <View>
            <Text className='font-bold text-xl mb-2'>Descrição</Text>
            <View className='rounded border border-[#DDDEDF] w-full'>
              <TextInput value={value} onChangeText={onChange} className='p-4 text-lg' />
            </View>
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
          <View className='flex flex-row w-full items-center justify-between mt-4'>
            <Pressable className={`rounded border bg-[#EFF0F0] w-[45%] p-4 flex-row items-center justify-center gap-3 ${isHeath ? 'border-[#639339]' : 'border-[#EFF0F0]'}`}
              onPress={() => onChange(true)}
              onPressIn={() => setIsHeath(!isHeath)}
            >
              <View className='rounded-full bg-[#639339] w-4 h-4'></View>
              <Text className='text-lg'>Sim</Text>
            </Pressable>
            <Pressable className={`rounded border bg-[#EFF0F0] w-[45%] p-4 flex-row items-center justify-center gap-3 ${isNotHeath ? 'border-[#BF3B44]' : 'border-[#EFF0F0]'}`}
              onPress={() => onChange(false)}
              onPressIn={() => setIsNotHeath(!isNotHeath)}
            >
              <View className='rounded-full bg-[#BF3B44] w-4 h-4'></View>
              <Text className='text-lg'>Não</Text>
            </Pressable>
          </View>
        )}
        name='isHealth'
      />
      <Pressable onPress={handleSubmit(onSubmit)} className='bg-[#333638] p-5 rounded flex items-center justify-center mt-24 justify-self-end'>
        <Text className='text-lg font-bold text-white'>Cadastrar Refeição</Text>
      </Pressable>
    </Container>
  );
}
