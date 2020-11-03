import React from 'react'
import './checkbox.scss'
import PropTypes from 'prop-types'
import checkedIcon from 'img/done-24px.svg'

function Checkbox(props) {

    const checked = props.checked ? 'checked' : ''

    return (
        <div
            className={checked ? 'checkbox checked' : 'checkbox'}
            onClick={() => props.onToggle()}>
            {checked ? <img src={checkedIcon} alt=""/> : null}
        </div>
    )
}

Checkbox.propTypes = {
    onToggle: PropTypes.func,
    checked: PropTypes.bool
}

export default Checkbox