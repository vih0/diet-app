import { Image, Pressable, Text, View } from "react-native";
import { Container } from "./Container";
import Feather from '@expo/vector-icons/Feather';
import { Meals } from "./Meals";
import { Link } from "expo-router";

export function HomeSection() {
    return (<Container>
        <View className="mt-12 mb-8">
            <Image source={require('../../assets/logo.png')} />
        </View>
        <View>
            <View className="rounded bg-lime-100 px-4 py-10 flex flex-col items-center">

                <Feather name="arrow-up-right" size={34} color="#639339" className="self-end" />

                <Text className="text-6xl font-bold -mt-2">90,86%</Text>
                <Text className="text-lg">das refeições dentro da dieta</Text>
            </View>
            <View className="flex gap-3 my-4">
                <Text className="text-2xl font-semibold">Refeições</Text>
                <Link href={"/new-meal"} className="w-full bg-zinc-900 rounded-md py-6 flex items-center justify-center">
                    <View className=" w-full flex flex-row items-center justify-center gap-2">
                        <Feather name="plus" size={24} color="#fafafa" />
                        <Text className="text-neutral-50">Nova refeição</Text>
                    </View>
                </Link>
            </View>
            <Meals />
        </View>
    </Container>)
}