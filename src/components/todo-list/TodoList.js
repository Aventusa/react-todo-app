import React, {useEffect, useRef, useState} from 'react'
import './todo-list.scss'
import addIcon from 'img/add-icon.svg'
import Button from '../button/Button';
import Todo from '../todo/Todo';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {getLocalStorageItem, getLocationId, setLocalStorageItem} from '../../utils';


function TodoList() {
    const id = getLocationId()
    const list = getLocalStorageItem(`lists`).filter(list => list.id === id)[0]
    const [todos, setTodos] = useState(list.todos);

    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef(null)


    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    useEffect(() => {
        list.todos = todos
        setLocalStorageItem('lists', id, list)
    }, [todos])

    function clearTodoList() {
        setTodos([])
    }

    function changeInputValue(e) {
        const value = e.target.value
        setInputValue(
            value
        )
    }

    function changeListName(e) {
        list.name = e.target.innerText || 'Мой список'
        setLocalStorageItem('lists', id, list)
    }

    function addTodo(text) {
        if (text.trim()) {
            list.todos.push({id:Date.now(), todo: text, isDone: false})
            setLocalStorageItem('lists', id, list)
            setTodos(list.todos)
        }
        setInputValue('') // clear input
        inputRef.current.focus()
    }

    return (
        <div className='todo-list'>
            <div className="todo-list__nav-top">
                <div className="todo-list__list-name"
                     suppressContentEditableWarning="true"
                     contentEditable={true}
                     onInput={changeListName}
                >
                    {list.name}
                </div>
            </div>
            <div className="todo-list__add-wrapper">
                <input
                    ref={inputRef}
                    type="text"
                    maxLength={50}
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
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        removeTodo={removeTodo}/>
                )
            })}

            <div className="todo-list__nav">
                <Link className="todo-list__back-btn" to='/dashboard'>
                    Назад
                </Link>
                {todos.length ?
                    <div className="todo-list__clear-list" onClick={clearTodoList}>
                        Очистить список
                    </div>
                    : null}
            </div>
        </div>
    )
}

TodoList.propTypes = {
    location: PropTypes.object.isRequired
}

export default TodoList

