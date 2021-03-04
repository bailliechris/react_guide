import PropTypes from 'prop-types'

const button = ({ color, text, on_click }) => {
    return (
        <button 
            style={{backgroundColor: color}} 
            className = 'btn' 
            onClick={on_click}>
                {text}
        </button>
    )
}

button.defaultProps = {
    text: "Default",
    color: "blue"
}

button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    on_click: PropTypes.func
}


export default button
