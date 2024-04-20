import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import { Tasks } from './components/tasks'
import { AddTask } from './components/addTask'


export function App() {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }
  ])

  function handleTaskAddition(taskTitle: string){
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ]

    setTasks(newTasks);
  }

  return (
    <>
      <div className='max-w-lg overflow-auto
      min-h-80 p-8 rounded-xl mx-auto my-8
      border border-green-800'>
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks tasks={tasks}/>
      </div>
    </>
    
  )
}