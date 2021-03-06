import Header from './components/header'
import Tasks from './components/tasks'
import AddTask from './components/addtask'
import { useState, useEffect } from 'react'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer);
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  const addTask = (task) => {
    // Add random ID
    const id = Math.floor(Math.random() * 10000) + 1

    // Create new task object, adding id and filling with remainder of the task
    const newTask = { id, ...task }

    // Use State, add existing tasks and include new task at the end
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header title='To Do App' onAdd={() => setShowAddTask(!showAddTask)} toggleButton={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No Tasks to Display'
        )
      }
    </div>
  );
}

export default App;
