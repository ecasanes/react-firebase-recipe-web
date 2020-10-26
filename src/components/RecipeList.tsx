import React, { useMemo } from 'react';
import RecipeListItem from './RecipeListItem';

//TODO: implement react-router

export const RecipeList = (props: any) => {

    // TODO: implement context for page switching
    const {setCurrentPage} = props;

    let contentTitle = "My Recipes";
    let tasks = useMemo(() => [
        { id: 1, task: "Banana Cake", tags: [] },
        { id: 2, task: "Mango Float", tags: ['dessert', 'sweet'] },
        { id: 3, task: "Orange Chicken", tags: ['dinner', 'fried'] }
    ], []);

    console.log('testing component render... ', {tasks});

    return (
        <div className="recipes" data-testid="tasks">
            <h2 data-testid="project-name">{contentTitle}</h2>

            <ul className="recipes__list">
                {tasks && tasks.map((task) => (
                    <RecipeListItem setCurrentPage={setCurrentPage} item={task} />
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;