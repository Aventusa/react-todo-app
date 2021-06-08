import React, {useEffect, useState} from 'react'
import './todo.scss'
import PropTypes from 'prop-types'
import clearIcon from 'img/del-icon.svg'
import Button from '../button/Button';
import Checkbox from '../checkbox/Checkbox';
import {getLocalStorageItem, getLocationId, setLocalStorageItem} from '../../utils';

function Todo({todo, removeTodo}) {
    const id = getLocationId()
    const [checked, setChecked] = useState(todo.isDone)

    function toggleCheckbox() {
        setChecked(!checked)
    }

    useEffect(() => {
        const list = getLocalStorageItem(`lists`).filter(list => list.id === id)[0]
        list.todos.map(i => {
            return i.id === todo.id ? i.isDone = checked : null
        })
        setLocalStorageItem('lists', id, list)
    }, [checked])

    return (
        <div className='todo'>
            <div className="todo__wrapper">
                <Checkbox checked={checked} onToggle={toggleCheckbox}/>
                <div
                    className={checked ? "todo__text done" : "todo__text"}
                >{todo.todo}</div>
            </div>
            <Button iconSrc={clearIcon} onClick={() => removeTodo(todo.id)} className='del-btn'/>
        </div>
    )
}

Todo.propTypes = {
    todo: PropTypes.object,
    removeTodo: PropTypes.func,

}

export default Todo