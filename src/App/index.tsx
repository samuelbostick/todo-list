import React from 'react';

import Task from './Task'

const App: React.FC = () => {
  const [tasks, setTasks] = React.useState<string[]>([])

  function handleAdd() {
    var task = prompt("Please enter task details")
    if (task) {
      setTasks([...tasks, task])
    }
  }

  return (
    <div>
      <button onClick={handleAdd}>Add</button>
      <ul>
        {
          tasks.map(task => 
            <Task task={task}></Task>
          )
        }
      </ul>
    </div>
  );
}

export default App;
