import React, { useMemo } from 'react';
import RecipeListItem from './RecipeListItem';

//TODO: implement react-router

export const RecipeList = (props: any) => {

    // TODO: implement context for page switching
    const {setCurrentPage} = props;

    let contentTitle = "My Recipes";
    let items = useMemo(() => [
        { id: 1, name: "Banana Cake", tags: [] },
        { id: 2, name: "Mango Float", tags: ['dessert', 'sweet'] },
        { id: 3, name: "Orange Chicken", tags: ['dinner', 'fried'] }
    ], []);

    return (
        <div className="recipes" data-testid="tasks">
            <h2 data-testid="project-name">{contentTitle}</h2>

            <ul className="recipes__list">
                {items && items.map((item) => (
                    <RecipeListItem setCurrentPage={setCurrentPage} item={item} />
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;