import React, { useState } from 'react'
import GroceryBud from './GroceryBud';
import GroceryBudForm from './GroceryBudForm'

function GroceryList() {
    const [groceries, setGroceries] = useState([]);
    const [alert, setAlert] = useState({show: false, text: '', type: ''});
    

    const addGrocery = (grocery) => {
        if (!grocery.text || /^\s*$/.test(grocery.text)) {
            return;
        }
        const newGroceries = [grocery, ...groceries];
        setGroceries(newGroceries);
    }

    const removeRow = (id) => {
        const removeItem = [...groceries].filter(grocery => grocery.id !== id);
        setGroceries(removeItem);
    }

    const editRow = (groceryId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setGroceries(prev => prev.map(item => (item.id === groceryId ? newValue : item)));
    }


    const completeRow = (id) => {
        let updatedGroceries = groceries.map(grocery => {
            if (grocery.id === id) {
                grocery.isComplete = !grocery.isComplete
            }
            return grocery;
        })
        setGroceries(updatedGroceries)
    }

    return (
    <div>
        <h1>Grocery Bud</h1>
        <GroceryBudForm onSubmit={addGrocery}/>
        <GroceryBud groceries={groceries} completeRow={completeRow} removeRow={removeRow} editRow={editRow}/>
    </div>
    )
}

export default GroceryList