import React from 'react'
import { MdModeEdit, MdRemoveCircleOutline, MdReorder } from 'react-icons/md'

function RecipeSteps(props: any) {

    const { items } = props;

    function editItem(item:any, index:number) {

    }

    function deleteItem(item:any, index:number) {

    }

    return (
        <>
            <ul className={`generic-sortable-list`}>
                { items && items.map((item:any, index:number) => (
                    <li className={`generic-sortable-list-item`}>
                        <MdReorder className={`icon`} />
                        <div className={`title`}>{item.title}</div>
                        <div className={`options`}>
                            <MdModeEdit className={`option-item color color-pencil`} 
                            onClick={() => {
                                editItem(item, index)
                            }} />
                            <MdRemoveCircleOutline className={`option-item color color-trash`} 
                             onClick={() => {
                                 deleteItem(item, index)
                             }} />
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default RecipeSteps
