import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './todo_list.css'
const TodoList = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/todo")
        .then((res) => res.json())
        .then((data) => {
            setItems(data.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])
    
    const handleClick = async(text) => {
        console.log(text);
        await axios.delete("http://localhost:5000/delete", text)
    }

    
    return (
        <div>
            <ul className='box'>
                {items.map(item => {
                    return <p className='p' key={item._id}><button type='button' onClick={() => handleClick(item.text)} className='button'>-</button> {item.text}</p>
                })}
            </ul>
        </div>
    )

}

export default TodoList