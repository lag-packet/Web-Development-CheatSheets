import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTask] = useState([    {
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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  )
}

export default App;