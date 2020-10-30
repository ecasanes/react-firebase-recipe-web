import React, { useMemo } from 'react';
import RecipeListItem from './RecipeListItem';
import { useRecipes } from '../firebase/hooks/recipes';

//TODO: implement react-router

export const RecipeList = (props: any) => {

    // TODO: implement context for page switching
    const {setCurrentPage} = props;
    const {recipes, setRecipes} = useRecipes();

    let contentTitle = "My Recipes";
    

    return (
        <div className="recipes" data-testid="tasks">
            <h2 data-testid="project-name">{contentTitle}</h2>

            <ul className="recipes__list">
                {recipes && recipes.map((recipe: any) => (
                    <RecipeListItem key={`${recipe.id}`}  setCurrentPage={setCurrentPage} item={recipe} />
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;