import React, {useState} from 'react'
import {format} from 'date-fns'
import axios from 'axios'

import './todo_new.css'

const NewTodo = () => {

    var current = format(new Date(), 'dd/MM/yyyy')
    var [text, setText] = useState("");

    const handleChange = e => {
        setText(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!text) {
            alert('Again')
        } else {
            const newTodo = {
                text: text,
                date: current
            };
            setText("")
            axios.post("http://localhost:5000/newitem", newTodo)
        }
    }
    
    
    return (
        <form onSubmit={handleSubmit}>
            <input type={text} name="text" value={text} onChange={handleChange} />
            <button className='button' type='submit'>+</button>
        </form>
        
    )
}

export default NewTodo;