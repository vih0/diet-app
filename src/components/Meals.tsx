import { ScrollView } from "react-native";

import { Meal } from "~/src/types/Meal";
import { ListMeal } from "./Meal";

const mockMeals = [
    {
        id: 1,
        date: "2023-01-10 12:00:00+00",
        title: "Salada de Quinoa",
        description: "Uma salada leve com quinoa, legumes frescos e molho de limão.",
        ishealth: true
    },
    {
        id: 2,
        date: "2023-01-12 14:00:00+00",
        title: "Hambúrguer Clássico",
        description: "Hambúrguer de carne bovina com queijo, alface, tomate e maionese.",
        ishealth: false
    },
    {
        id: 3,
        date: "2023-01-15 09:00:00+00",
        title: "Smoothie de Frutas",
        description: "Um smoothie refrescante feito com bananas, morangos e iogurte natural.",
        ishealth: true
    },
    {
        id: 4,
        date: "2023-01-18 18:30:00+00",
        title: "Pizza de Calabresa",
        description: "Pizza artesanal coberta com calabresa, cebolas e queijo.",
        ishealth: false
    },
    {
        id: 5,
        date: "2023-01-20 11:00:00+00",
        title: "Sopa de Legumes",
        description: "Uma sopa nutritiva feita com diversos legumes frescos.",
        ishealth: true
    },
    {
        id: 6,
        date: "2023-01-22 19:00:00+00",
        title: "Tacos de Frango",
        description: "Tacos recheados com frango temperado, guacamole e salsa.",
        ishealth: false
    },
    {
        id: 7,
        date: "2023-01-25 08:00:00+00",
        title: "Omelete de Espinafre",
        description: "Omelete feita com espinafre fresco e queijo feta.",
        ishealth: true
    },
    {
        id: 8,
        date: "2023-01-27 20:00:00+00",
        title: "Macarrão ao Alho e Óleo",
        description: "Macarrão frito com alho e azeite, um clássico italiano.",
        ishealth: false
    },
    {
        id: 9,
        date: "2023-01-30 10:00:00+00",
        title: "Frutas Tropicais",
        description: "Um mix de frutas tropicais frescas como abacaxi, manga e kiwi.",
        ishealth: true
    },
    {
        id: 10,
        date: "2023-02-02 15:00:00+00",
        title: "Bolo de Chocolate",
        description: "Bolo macio de chocolate, coberto com ganache de chocolate.",
        ishealth: false
    },
    {
        id: 11,
        date: "2023-02-05 12:30:00+00",
        title: "Wrap de Vegetais",
        description: "Wrap integral recheado com vegetais frescos e hummus.",
        ishealth: true
    },
    {
        id: 12,
        date: "2023-02-07 18:00:00+00",
        title: "Lasanha de Carne",
        description: "Lasanha recheada com carne moída e muito queijo.",
        ishealth: false
    },
    {
        id: 13,
        date: "2023-02-10 09:30:00+00",
        title: "Bowl de Açaí",
        description: "Bowl de açaí com granola, banana e mel.",
        ishealth: true
    },
    {
        id: 14,
        date: "2023-02-12 17:00:00+00",
        title: "Frango Empanado",
        description: "Peito de frango empanado e frito, servido com molho barbecue.",
        ishealth: false
    },
    {
        id: 15,
        date: "2023-02-15 13:00:00+00",
        title: "Ceviche de Peixe",
        description: "Peixe marinado em suco de limão, cebola roxa e coentro.",
        ishealth: true
    },
    {
        id: 16,
        date: "2023-02-18 20:30:00+00",
        title: "Pasta Carbonara",
        description: "Macarrão com molho cremoso de ovos, queijo e bacon.",
        ishealth: false
    },
    {
        id: 17,
        date: "2023-02-20 11:15:00+00",
        title: "Salada Caesar",
        description: "Salada com alface, croutons, queijo parmesão e molho Caesar.",
        ishealth: true
    },
    {
        id: 18,
        date: "2023-02-23 16:45:00+00",
        title: "Batata Frita",
        description: "Batatas fritas crocantes, perfeitas como acompanhamento.",
        ishealth: false
    },
    {
        id: 19,
        date: "2023-02-25 14:30:00+00",
        title: "Peixe Grelhado",
        description: "Filé de peixe grelhado com ervas e limão.",
        ishealth: true
    },
    {
        id: 20,
        date: "2023-02-28 19:45:00+00",
        title: "Chili com Carne",
        description: "Um prato picante de carne moída, feijão e temperos.",
        ishealth: false
    }
]


export function Meals() {
    return (
        <ScrollView>
            {mockMeals.map((meal) => (
                <ListMeal key={meal.id} data={meal} />
            ))}
        </ScrollView>
    )
}