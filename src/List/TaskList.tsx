import React from "react";

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
        <div>
            <p className='task-message'>{message}</p>
            <button onClick={btnDelete}>Удалить</button>
        </div>
    );
};

export default TaskList;