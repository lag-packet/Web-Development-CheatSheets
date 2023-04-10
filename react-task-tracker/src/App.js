import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Get soda',
    day: 'Apr 26th at 10:30am',
    reminder: true,
  },

  {
    id: 2,
    text: 'Work out',
    day: 'Apr 26th at 12:30pm',
    reminder: true,
  },

  {
    id: 3,
    text: 'Have fun',
    day: 'Apr 26th at 2:30pm',
    reminder: true,
  },

  {
    id: 4,
    text: 'Work',
    day: 'Apr 26th at 3:30pm',
    reminder: true,
  },])

  // Delete Task (Prop Drilling)
  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(tasks.map((task) => task.id === id ? {...task,reminder: 
      !task.reminder } 
      : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleReminder} />
        : 'No Tasks!'}
    </div>
  )
}

export default App;