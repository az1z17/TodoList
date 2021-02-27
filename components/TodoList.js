import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import styles from '../styles/Home.module.css'


export default function TodoList() {
    const [todos,setTodos]= useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
       
        setTodos(newTodos)
    }

    const removeTodo = id =>{
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    }

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo= id => {
        let updatedTodos= todos.map(todo => {
            if (todo.id ===id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
    });
            setTodos(updatedTodos)
    }

    return (
        <div className={styles.body}>
            <div className={styles.backStage}>
            <h1>What is the plans for Today</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
        </div>
    )
}
