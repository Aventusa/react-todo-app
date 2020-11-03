import React from 'react'
import './button.scss'
import PropTypes from 'prop-types'

function Button(props) {
    return (
        <div
            className={props.className + ' button'}
            onClick={props.onClick}
        >
            <img src={props.iconSrc} alt=""/>
        </div>
    )
}

Button.propTypes = {
    className: PropTypes.string,
    iconSrc: PropTypes.string,
    onClick: PropTypes.func,
}

export default  Button