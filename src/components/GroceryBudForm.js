import React, { useState, useEffect, useRef } from 'react'

function GroceryBudForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }
    
    const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
        id: new Date().getTime().toString(),
        text: input
    });
    setInput('');
    }


    return (
    <form className="grocery-form" onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input
            type="text"
            value={input}
            name="text"
            className="grocery-input-edit"
            onChange={handleChange}
            ref={inputRef}/>
        <button className='edit-btn'>Edit</button>
        </>) :
        (
        <>
        <input
            type="text"
            placeholder="e.g. bread"
            value={input}
            name="text"
            className="grocery-input"
            onChange={handleChange}
            ref={inputRef}/>
        <button className='grocery-btn'>Add</button>
        </>)}
    </form>
    )
}

export default GroceryBudForm