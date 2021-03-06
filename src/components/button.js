import PropTypes from 'prop-types'

const button = ({ color, text, onClick }) => {
    return (
        <button 
            style={{backgroundColor: color}} 
            className = 'btn' 
            onClick={onClick}>
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
