import {useState} from 'react'

function AddTask({addTask}) {
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [reminder, setReminder] = useState(false)

    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Write here' />
            </div>
            <div className='form-control'>
                <label>Day and Time</label>
                <input type='text' value={time} onChange={(e) => setTime(e.target.value)} placeholder='Time stuff...' />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className= 'btn btn-block'/>
        </form>
    )
}

export default AddTask
