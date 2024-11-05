import { ScrollView } from "react-native";
import { ListMeal } from "./Meal";
import { mockMeals } from "../mocks/mocks";


export function Meals() {
    return (
        <ScrollView>
            {mockMeals.map((meal) => (
                <ListMeal key={meal.id} data={meal} />
            ))}
        </ScrollView>
    )
}