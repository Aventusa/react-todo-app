import React from 'react'
import './checkbox.scss'
import PropTypes from 'prop-types'
import checkedIcon from 'img/check.svg'

function Checkbox(props) {

    const checked = props.checked ? 'checked' : ''

    return (
        <div
            className={checked ? 'checkbox checked' : 'checkbox'}
            onClick={() => props.onToggle()}>
            {checked ? <img src={checkedIcon} alt="" className='checked-icon' /> : null}
        </div>
    )
}

Checkbox.propTypes = {
    onToggle: PropTypes.func,
    checked: PropTypes.bool
}

export default Checkbox