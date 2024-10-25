import { Image, Pressable, Text, View } from "react-native";
import { Container } from "./Container";
import Feather from '@expo/vector-icons/Feather';
import { Meals } from "./Meals";
export function HomeSection() {
    return (<Container>
        <View>
            <Image source={require('../assets/logo.png')} />
        </View>
        <View>
            <View className="rounded bg-lime-100 px-4 py-10 flex flex-col items-center">
                <Feather name="arrow-up-right" size={34} color="#639339" className="self-end" />
                <Text className="text-6xl font-bold -mt-2">90,86%</Text>
                <Text className="text-lg">das refeições dentro da dieta</Text>
            </View>
            <View >
                <Text>Refeições</Text>
                <Pressable className="w-full bg-zinc-900 rounded-md py-6 flex flex-row items-center justify-center">
                    <Feather name="plus" size={24} color="#fafafa" />
                    <Text className="text-neutral-50">Nova refeição</Text>
                </Pressable>
            </View>
            <Meals />
        </View>
    </Container>)
}