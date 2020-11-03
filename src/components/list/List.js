import React from 'react'
import './list.scss'
import PropTypes from 'prop-types'
import delIcon from 'img/del-icon.svg'
import Button from '../button/Button';
import {Link} from 'react-router-dom';


function List(props) {
    return (
        <div className="list">
            <Link className="list__wrapper" to='/todo-list'>
                    <div className="list__name">{props.todoList.name}</div>
                    <div className="list__date">{props.todoList.date}</div>
            </Link>
            <Button
                iconSrc={delIcon}
                onClick={() => props.removeList(props.todoList.id)}
            />
        </div>
    )
}

List.propTypes = {
    todoList: PropTypes.object,
    name: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
    removeList: PropTypes.func,
}

export default List