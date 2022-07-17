import React from 'react';

import { v4 } from 'uuid'

import Task from './Task'

const DETAILS_PROMPT = "Please enter task details"

interface TaskDef {
  key: string;
  task: string;
}

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<TaskDef[]>([])

  function handleAdd() {
    const value = prompt(DETAILS_PROMPT)
    if (value) {
      const task: TaskDef = {
        key: v4(),
        task: value
      }
      setTasks([...tasks, task])
    }
  }

  function handleDelete(key: string) {
    setTasks((tasks) => tasks.filter(task => task.key !== key))
  }

  function handleEdit(key: string) {
    const value = prompt(DETAILS_PROMPT)
    if (value) {
      setTasks(tasks.map(task => {
        if (task.key === key) {
          task.task = value
        }
        return task
      }))
    }

  }

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {
          tasks.map(task => 
            <>
              <Task key={task.key} task={task.task}></Task>
              <button onClick={() => handleDelete(task.key)}>Delete</button>
              <button onClick={() => handleEdit(task.key)}>Edit</button>
            </>
          )
        }
      </ul>
    </div>
  );
}

export default App;
