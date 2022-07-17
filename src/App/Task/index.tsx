import React from 'react';

import { v4 } from 'uuid';

const key = v4();

interface TaskProps {
    task: string
}

const Task: React.FC<TaskProps> = ({ task }) => {
    const [complete, setComplete] = React.useState<boolean>(false);

    function toggleComplete() {
        setComplete(!complete)
    }

    return (
        <li key={key}>
            <label className={complete ? 'strikethrough' : undefined}>
                <input type="checkbox" onChange={toggleComplete} /> {task}
            </label>
        </li>
    )
} 

export default Task
