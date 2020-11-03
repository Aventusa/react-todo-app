import React, {useState} from 'react'
import './todo.scss'
import PropTypes from 'prop-types'
import clearIcon from 'img/clear-24px.svg'
import Button from '../button/Button';
import Checkbox from '../checkbox/Checkbox';

function Todo({id, text, removeTodo}) {

    const [checked, setChecked] = useState(false)

    function toggleCheckbox() {
        setChecked(!checked)
    }

    return (
        <div className='todo'>
            <div className="todo__wrapper">
                <Checkbox checked={checked} onToggle={toggleCheckbox}/>
                <div
                    className={checked ? "todo__text done" : "todo__text"}
                >{text}</div>
            </div>
            <Button iconSrc={clearIcon} onClick={() => removeTodo(id)}/>
        </div>
    )
}


Todo.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string,
    removeTodo: PropTypes.func
}

export default Todo