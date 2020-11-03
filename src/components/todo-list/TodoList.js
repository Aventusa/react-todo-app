import React, {useRef, useState} from 'react'
import './todo-list.scss'
import addIcon from 'img/add-24px.svg'
import Button from '../button/Button';
import Todo from '../todo/Todo';


function TodoList() {

    const [todos, setTodos] = useState([
        {id: 1, completed: false, text: 'Сделать уроки'},
        {id: 2, completed: false, text: 'Удалить все игры'},
        {id: 3, completed: false, text: 'Завести твич аккаунт'},
        {id: 4, completed: false, text: 'Погулять'},
    ]);

    const [inputValue, setInputValue] = useState('')

    const inputRef = useRef(null)

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function clearTodoList() {
        setTodos([])
    }

    function changeInputValue(e) {
        const value = e.target.value
        setInputValue(
            value
        )
    }

    function addTodo(text) {
        if (text.trim()) {
            setTodos(todos.concat(
                [{
                    id: Date.now(),
                    completed: false,
                    text
                }]
            ))
        }
        setInputValue('') // clear input
        inputRef.current.focus()
    }

    return (
        <div className='todo-list'>
            <div className="todo-list__nav-top">
                <div className="todo-list__list-name"
                     suppressContentEditableWarning="true"
                     contentEditable={true}>
                    Мой список
                </div>
                <div className="todo-list__remove-list">
                    Удалить список
                </div>
            </div>
            <div className="todo-list__add-wrapper">
                <input
                    ref={inputRef}
                    type="text"
                    className="add-wrapper__input"
                    onInput={changeInputValue}
                    placeholder='Введите задачу...'
                    onKeyDown={e => e.key === 'Enter' ? addTodo(inputValue) : null}
                    value={inputValue}
                />
                <Button
                    className='todo-list__add'
                    iconSrc={addIcon}
                    onClick={() => addTodo(inputValue)}
                />
            </div>

            {todos.length ? null : <div className='no-todo-info'>Добавьте новую задачу!</div>}
            {todos.map(todo => {
                return (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        removeTodo={removeTodo}/>
                )
            })}

            <div className="todo-list__nav">
                <div className="todo-list__back-btn">
                    Назад
                </div>
                {todos.length ?
                    <div className="todo-list__clear-list" onClick={clearTodoList}>
                        Очистить список
                    </div>
                    : null}
            </div>
        </div>
    )
}

export default TodoList