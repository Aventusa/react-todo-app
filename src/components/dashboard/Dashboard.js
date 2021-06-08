import React, {useEffect, useState} from 'react'
import './dashboard.scss'
import PropTypes from 'prop-types'
import List from '../list/List';
import getFullDate, {getLocalStorageItem, concatLocalStorageItem} from '../../utils';
import {Link} from 'react-router-dom';

function Dashboard() {
    const id = Date.now()
    const localLists = getLocalStorageItem('lists')
    const [lists, setLists] = useState(localLists ? localLists : [])

    function removeList(id) {
        setLists(
            lists.filter(list => list.id !== id)
        )
    }

    useEffect(() => {
        localStorage.removeItem('lists')
        concatLocalStorageItem('lists', lists)
    }, [lists])


    function handleClick() {
        const data = [{id, name: 'Мой список', date: getFullDate(), todos: []}]
        concatLocalStorageItem('lists', data)
    }

    return (
        <div className='dashboard'>
            <Link
                to={{
                    pathname: `/todo-list`,
                    search: `?id=${id}`
                }}
                onClick={handleClick}
                className="add-new-list"

            >+</Link>

            {lists.length ? null
                : <div
                    className='no-list-info'
                >Создайте новый список!</div>
            }

            {
                lists.map(list => {
                    return (
                        <List
                            list={list}
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