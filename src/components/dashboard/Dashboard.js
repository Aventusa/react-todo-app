import React, {useState} from 'react'
import './dashboard.scss'
import PropTypes from 'prop-types'
import List from '../list/List';
// import getFullDate from '../../utils';
import {Link} from 'react-router-dom';

function Dashboard() {

    const [todoLists, setTodoLists] = useState([
        // {id: 1, name: 'Мой список дел на выходные', date: getFullDate()},

    ])

    function removeList(id) {
        setTodoLists(
            todoLists.filter(list => list.id !== id)
        )
    }

    return (
        <div className='dashboard'>
            <Link
                to={{
                    pathname: '/todo-list'
                }}
                className="add-new-list"

            >+</Link>

            {todoLists.length ? null
                : <div
                    className='no-list-info'
                >Создайте новый список!</div>
            }

            {
                todoLists.map(list => {
                    return (
                        <List
                            todoList={list}
                            removeList={removeList}
                            key={list.id}
                        />
                    )
                })
            }

        </div>
    )
}

Dashboard.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object)
}

export default Dashboard