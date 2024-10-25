import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Meal } from '~/types/Meal';


const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY as string;
const supabase = createClient(supabaseUrl, supabaseAnonKey);


const useMeals = () => {
    const [meals, setMeals] = useState<Meal[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);

    useEffect(() => {
        const fetchMeals = async () => {
            setLoading(true);
            const { data, error, status } = await supabase.from('meals').select('*');
            console.log(data)
            if (error) {
                setError(error);
            } else {
                setMeals(data);
            }
            setLoading(false);
        };

        fetchMeals();
    }, []);

    return { meals, loading, error };
};

export default useMeals;
