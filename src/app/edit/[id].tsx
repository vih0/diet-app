import { Text } from "react-native";

import { DetailsSection } from "~/src/components/DetailsSection";
import { useLocalSearchParams } from "expo-router";

export default function EditMeals() {

    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <Text>{id}</Text>
    )
}