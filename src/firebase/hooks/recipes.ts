import { useEffect, useState } from "react";
import { firebase } from '../config';
const db = firebase.firestore();

export const useRecipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {

        const unsubscribe = db.collection('recipes')
            .orderBy('name')
            .onSnapshot((snapshot: any) => {
                const allRecipes = snapshot.docs.map((recipe: any) => ({
                    ...recipe.data(),
                    id: recipe.id
                }));

                setRecipes(allRecipes);

            });


        return () => {
            console.log('unsubscribe run...');
            unsubscribe();
        }

    }, []);

    return {
        recipes,
        setRecipes
    };
};