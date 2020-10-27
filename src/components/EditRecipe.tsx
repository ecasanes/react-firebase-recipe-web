import React, { useState } from 'react'
import { CURRENT_PAGE } from '../constants';
import RecipeSteps from './RecipeSteps';

function EditRecipe(props: any) {

    const { setCurrentPage } = props;

    const recipeItem = {
        name: 'Banana Cake',
        description: 'Sample description of a banana cake',
        steps: [
            { id: 1, title: 'Step 1 of 1', description: 'Step Description...' }
        ]
    }

    const recipeSteps = [
        {
            id: 1,
            title: 'Chop Meat'
        },
        {
            id: 2,
            title: 'Prepare Meat'
        }
    ]

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    function goBack() {
        setCurrentPage(CURRENT_PAGE.RECIPE_LIST);
    }

    function onUpdateRecipe(e: any) {
        e.preventDefault();
        console.log(name, description);
    }

    return (
        <div className={`edit-recipe generic-content`}>
            <h2 className={`title`}>
                Edit
                <span className={`subtitle`}>Recipe</span>
            </h2>

            <form onSubmit={(e) => { onUpdateRecipe(e) }}>

                <label className={`generic-input-field-container`}>
                    <p className={`generic-input-label`}>Name: </p>
                    <input className={`generic-input-field`} type="text" name="name" value={name} placeholder="Recipe Name" onChange={(e) => { setName(e.target.value) }} />
                </label>
                
                <label className={`generic-input-field-container`}>
                    <p className={`generic-input-label`}>Description: </p>
                    <textarea className={`generic-input-field`} name="description" value={description} placeholder="Description" onChange={(e) => { setDescription(e.target.value) }}></textarea>
                </label>
                

                <button className={`generic-button`} type="submit">Submit</button>
            </form>

            <br/>

            <RecipeSteps items={recipeSteps} />


            <div className={`editor-footer`}>
                <button className={`generic-button`} onClick={goBack}>Back</button>
                <button className={`generic-button`} onClick={goBack}>Save</button>
            </div>
        </div>
    )
}

export default EditRecipe
