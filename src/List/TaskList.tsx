import React from "react";

interface Props {
    id: string;
    message: string;
}

const TaskList: React.FC<Props> = ({id, message}) => {

    return (
        <div>
            <p className='task-message'>{message}</p>
            <button>Удалить</button>
        </div>
    );
};

export default TaskList;