import React from 'react'
import './todoList.scss'
import PropTypes from 'prop-types'
import delIcon from 'img/del-icon.svg'


function TodoList(props) {
    return (
        <div className="todo-list">
            <div className="todo-list__wrapper">
                <div className="todo-list__name">{props.todoList.name}</div>
                <div className="todo-list__date">{props.todoList.date}</div>
            </div>
            <div
                className="todo-list__delete"
                 onClick={() => props.removeList(props.todoList.id)}
            >
                <img src={delIcon} alt=""/>
            </div>
        </div>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.object,
    name: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    removeList: PropTypes.func,
}

export default TodoList