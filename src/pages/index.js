import React from 'react';
import CurDate from "../components/date";
import TodoList from '../components/todo_list';
import NewTodo from '../components/todo_new';

import './index.css'

const HomePage = () => {

    return (
        <div className='background'>
            <CurDate />
            <TodoList />
            <NewTodo />
        </div>
    )
}

export default HomePage