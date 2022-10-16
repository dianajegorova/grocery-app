import React, { useState } from 'react'
import GroceryBudForm from './GroceryBudForm'
import { FaEdit } from 'react-icons/fa'
import { MdDeleteForever } from "react-icons/md"

function GroceryBud({ groceries, completeRow, removeRow, editRow }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitEdit = (value) => {
        editRow(edit.id, value);
        setEdit({id: null, value: ''})
    }

    if (edit.id) {
        return <GroceryBudForm edit={edit} onSubmit={submitEdit} />
    }

    return groceries.map((grocery, index) => (
        <article 
        className={grocery.isComplete ? 'grocery-row complete' : 'grocery-row'}
        key={index}
        >
            <div className="item" key={grocery.id} onClick={() => completeRow(grocery.id)}>
                {grocery.text}
            </div>
            <div className='icons'>
                <MdDeleteForever 
                    onClick={() => removeRow(grocery.id)} 
                    className="delete-icon" 
                />
                <FaEdit 
                    onClick={() => setEdit({id: grocery.id, value: grocery.text})} 
                    className="edit-icon" 
                />
            </div>
        </article>
    ));
}

export default GroceryBud