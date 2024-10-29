import { Text, View } from "react-native";
import { Meal } from "~/src/types/Meal";

type Props = {
    data: Meal
}
export function ListMeal({ data }: Props) {

    const teste = new Date(data.date)
    const hour = teste.getDate()
    const minutes = teste.getMinutes()

    return (
        <View className="border border-[#DDDEDF] flex-row flex-1 justify-between items-center p-6 rounded mb-4">
            <View className="flex-row gap-4 flex items-center">
                <Text className="font-bold border-r-2 border-[#B9BBBC] px-2">{hour}:{minutes}</Text>
                <Text className="text-lg px-2">{data.title}</Text>
            </View>

            <View className={data.ishealth ? 'bg-[#CBE4B4] w-4 h-4 rounded-full' : 'bg-[#F3BABD] w-4 h-4 rounded-full'}></View>
        </View>
    )
}