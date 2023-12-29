import React from "react";
import './task.css';

interface Props {
    message: string;
    deleted: (id: string) => void;
    id: string;
}

const TaskList: React.FC<Props> = ({message, deleted, id}) => {
    const btnDelete = () => {
        deleted(id);
    };

    return (
        <div className='task'>
            <p className='task-message'>{message}</p>
            <button onClick={btnDelete}>Удалить</button>
        </div>
    );
};

export default TaskList;