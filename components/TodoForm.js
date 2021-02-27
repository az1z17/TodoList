import React , { useState , useEffect , useRef} from 'react'
import styles from '../styles/Home.module.css'

export default function TodoForm(props) {
    const [input,setInput] =useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text:input
        });

        setInput('')
    }
    
    return (
        <form onSubmit={handleSubmit} className={styles.todoForm}>
        {props.edit ? (
          <>
            <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className={`${styles.todoInput} ${styles.edit}`}
            />
            <button onClick={handleSubmit} className={`${styles.todoBtn} ${styles.edit}`}>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Add a todo'
              value={input}
              onChange={handleChange}
              name='text'
              className={styles.todoInput}
              ref={inputRef}
            />
            <button onClick={handleSubmit} className={styles.todoBtn}>
              Add todo
            </button>
          </>
        )}
      </form>
        
    )
}
