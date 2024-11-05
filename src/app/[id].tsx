import { useGlobalSearchParams, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { mockMeals } from "../mocks/mocks";
import { DetailsSection } from "~/src/components/DetailsSection";

export default function MealDetails() {

    const { id } = useLocalSearchParams<{ id: string }>();
    const filteredMeal = mockMeals.find((e) => e.id === Number(id))

    return (
        <DetailsSection data={filteredMeal} />
    )
}