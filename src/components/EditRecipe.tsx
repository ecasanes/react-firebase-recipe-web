import React, { useState } from 'react'
import { CURRENT_PAGE } from '../constants';
import { MdModeEdit, MdRemoveCircleOutline, MdReorder } from 'react-icons/md'

function EditRecipe(props: any) {

    const { setCurrentPage } = props;

    const recipeItem = {
        name: 'Banana Cake',
        description: 'Sample description of a banana cake',
        steps: [
            { id: 1, title: 'Step 1 of 1', description: 'Step Description...' }
        ]
    }

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

            <ul className={`generic-sortable-list`}>
                <li className={`generic-sortable-list-item`}>
                    <MdReorder className={`icon`} />
                    <div className={`title`}>Prepare Meat</div>
                    <div className={`title`}>Prepare Meat</div>
                    <div className={`options`}>
                        <MdModeEdit className={`option-item color color-pencil`} />
                        <MdRemoveCircleOutline className={`option-item color color-trash`} />
                    </div>
                </li>
                <li className={`generic-sortable-list-item`}>Preheat Something</li>
                <li className={`generic-sortable-list-item`}>Chop Ingredients</li>
                <li className={`generic-sortable-list-item`}>Add These Steps</li>
                <li className={`generic-sortable-list-item`}>Cook Meat</li>
            </ul>


            <div className={`editor-footer`}>
                <button className={`generic-button`} onClick={goBack}>Back</button>
                <button className={`generic-button`} onClick={goBack}>Save</button>
            </div>
        </div>
    )
}

export default EditRecipe
