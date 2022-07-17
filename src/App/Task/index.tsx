import React from 'react';

interface TaskProps {
    key: string;
    task: string;
}

const Task: React.FC<TaskProps> = ({ key, task }) => {
    const [complete, setComplete] = React.useState<boolean>(false);

    function toggleComplete() {
        setComplete(!complete);
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
