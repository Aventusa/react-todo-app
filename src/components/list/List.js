import React from 'react'
import './list.scss'
import PropTypes from 'prop-types'
import delIcon from 'img/del-icon.svg'
import Button from '../button/Button';
import {Link} from 'react-router-dom';


function List({list, removeList}) {
    return (
        <div className="list">
            <Link className="list__wrapper" to={{
                pathname: '/todo-list',
                search: `?id=${list.id}`
            }}>
                    <div className="list__name">{list.name}</div>
                    <div className="list__date">{list.date}</div>
            </Link>
            <Button
                iconSrc={delIcon}
                onClick={() => removeList(list.id)}
            />
        </div>
    )
}

List.propTypes = {
    list: PropTypes.object,
    removeList: PropTypes.func,
}

export default List