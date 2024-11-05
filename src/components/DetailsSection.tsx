import { Text, View } from "react-native";
import { Container } from "./Container";
import { Meal } from "../types/Meal";
import { Link } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
type Props = {
    data: Meal
}
export function DetailsSection({ data }: Props) {

    const formData = new Date(data?.date)
    const hour = formData.getHours()
    const dia = formData.getDay()
    const mes = formData.getUTCMonth()
    const ano = formData.getFullYear()
    const fullDate = new Intl.DateTimeFormat('pt-BR', {
        timeZone: 'America/Boa_Vista',
        dateStyle: 'short',
        timeStyle: 'short'
    }).format(formData);
    return (
        <Container>
            <View className="flex-1 flex-col gap-5">
                <View>
                    <Text className="text-3xl font-bold py-2">{data?.title}</Text>
                    <Text className="text-xl font-semibold">{data?.description}</Text>
                </View>
                <View>
                    <Text className="text-xl font-bold">Data e hora</Text>
                    <Text className="text-xl">{fullDate}</Text>
                </View>
            </View>
            <Link href={`/edit/${data.id}`} className=" gap-3 bg-[#333638] w-full rounded mb-4">
                <View className="flex items-center flex-row justify-center p-4">
                    <AntDesign name="edit" size={24} color="#FFFF" />
                    <Text className="font-bold text-lg color-white">Editar refeição</Text>
                </View>
            </Link>
            <Link href={`/`} className="flex items-center justify-center border border-[#333638] rounded">
                <View className="flex flex-row items-center justify-center w-full p-4">
                    <Feather name="trash-2" size={24} color="#333638" />
                    <Text className="font-bold text-lg color-[#333638]">Voltar</Text>
                </View>
            </Link>

        </Container>
    )
}
