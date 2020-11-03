import React, {useState} from 'react'
import './dashboard.scss'
import PropTypes from 'prop-types'
import List from '../list/List';
import getFullDate from '../../utils';

function Dashboard() {
    // eslint-disable-next-line
    const [todoLists, setTodoLists] = useState([
        {id: 1, name: 'Мой список дел на выходные', date: getFullDate()},
        {id: 2, name: 'Мой список дел после работы', date: getFullDate()},
        {id: 3, name: 'Мой список задач', date: getFullDate()},
    ])

    function removeList(id) {
        setTodoLists(
            todoLists.filter(list => list.id !== id)
        )
    }

    return (
        <div className='dashboard'>
            <div className="add-new-list">+</div>

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