import React, { useState } from 'react'
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { Link, useRouteMatch } from 'react-router-dom';
import { Recipe } from '../classes';
import { CURRENT_PAGE } from '../constants';

function RecipeListItem(props: any) {

    const { item:recipe, setCurrentPage } = props;

    let match = useRouteMatch();

    const [highlightedTask, setHighlightedTask] = useState(new Recipe());

    function addColor(task: any) {
        setHighlightedTask(task);
    }
    
    function unsetColor(task: any) {
        setHighlightedTask(new Recipe());
    }
    
    function goToEditPage(taskId: any) {
        setCurrentPage(CURRENT_PAGE.EDIT_RECIPE);
    }
    
    function onDeleteRecipe(taskId: any) {
    
    }

    return (
        <>
            <li key={`${recipe.id}`} onMouseEnter={() => {
                addColor(recipe)
            }} onMouseLeave={() => {
                unsetColor(recipe)
            }}>

                <div className={`list-item-flex-container`}>
                    {/* <div className={`checkbox-holder`}>
                    <span className={`checkbox`}></span>
                </div> */}
                    <div className={`title-container`}>
                        <div className={`title`}>{recipe.task}</div>
                        <div className={`tags-container`}>
                            <ul>
                                {recipe.tags.length === 0 ? (<li className={`bg-color bg-color-grey`}>No Tags</li>) : ''}
                                {recipe.tags && recipe.tags.map((tag: string | null | undefined) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`list-item-options-container`}>
                        <Link to={`/edit-recipe/${recipe.id}`}>
                            <FaPencilAlt className={`option-item ${(highlightedTask && highlightedTask.id === recipe.id) ? `color` : ``} color-pencil`} />
                        </Link>
                        <FaTrash onClick={() => {
                            onDeleteRecipe(recipe.id)
                        }} className={`option-item ${(highlightedTask && highlightedTask.id === recipe.id) ? `color` : ``} color-trash`} />
                    </div>

                </div>

            </li>
        </>
    )
}

export default RecipeListItem
