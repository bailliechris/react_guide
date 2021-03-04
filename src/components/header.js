//import React from 'react'
// Import PropTypes to define types - throws errors in console but not much else?
import PropTypes from 'prop-types'
import Button from './button'

const header = (props) => {
    const on_click = (e) => {
        console.log("Click");
    }

    return (
        <header className = 'header'>
            <h1>{props.title}</h1>
            <Button color="green" text="Add" onClick={on_click}/>
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

