import Header from './components/header'
import Tasks from './components/tasks'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Build Apps',
        day: 'Now',
        reminder: true
    },
    {
        id: 2,
        text: 'Food',
        day: 'Later',
        reminder: false
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header title='To Do App' />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
