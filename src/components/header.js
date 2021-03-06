//import React from 'react'
// Import PropTypes to define types - throws errors in console but not much else?
import PropTypes from 'prop-types'
import Button from './button'

const header = ({ title, onAdd, toggleButton }) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color={(toggleButton ? "Red" : "Green")} text={(toggleButton ? "Cancel" : "Add")} onClick={onAdd}/>
        </header>
    )
}

// Set Default Props
header.defaultProps = {
    title: "Default"
}

// Setting proptypes (needs header above)
header.propTypes = {
    title: PropTypes.string
}

export default header

