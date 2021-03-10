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

  // Get data from server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Delete Task
  const deleteTask = async (id) => {
    // Use back ticks with expressions ${id}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'DELETE'
      })
    
    res.status = 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting this Task')
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    // Go through all tasks (map) and if statement shorthand to swap value else leave it alone
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  // Add Task
  const addTask = async (task) => {
    // Add random ID
/*    const id = Math.floor(Math.random() * 10000) + 1

    // Create new task object, adding id and filling with remainder of the task
    const newTask = { id, ...task }

    // Use State, add existing tasks and include new task at the end
    setTasks([...tasks, newTask]) */
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = res.json()

    setTasks([...tasks, data])
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
