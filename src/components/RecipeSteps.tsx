import React from 'react'
import { MdModeEdit, MdRemoveCircleOutline, MdReorder } from 'react-icons/md'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function RecipeSteps(props: any) {

    const { items, setItems } = props;

    function editItem(item: any, index: number) {

    }

    function deleteItem(item: any, index: number) {

    }

    function handleOnDragEnd(result: any) {
        if (!result.destination) return;
        const newItems = Array.from(items);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);
        //setItems(newItems);
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="listItems">
                    {(provided) => (
                        <ul className={`generic-sortable-list`} {...provided.droppableProps} ref={provided.innerRef}>
                            {items && items.map((item: any, index: number) => {
                                return (
                                    <Draggable key={`${item.id}`} draggableId={`${item.id}`} index={index}>
                                        {(provided) => (
                                            <li key={item.id} className={`generic-sortable-list-item`} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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
                                        )}
                                    </Draggable>
                                )
                            })}
                            {provided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default RecipeSteps
