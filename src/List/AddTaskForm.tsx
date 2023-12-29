import React, {useState} from "react";

interface Props {
    newTask: (message: string) => void;
}

const AddTaskForm: React.FC<Props> = ({newTask}) => {
    const [newsTask, setNewTask] = useState('');

    const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value);
    };

    const newListTask = () => {
            if (newsTask !== '') {
                newTask(newsTask);
                setNewTask('');
            }
    };

    return (
        <div>
            <input value={newsTask} onChange={changeText} placeholder='Введите ваше напоминание'/>
            <button onClick={newListTask}>Добавить заметку</button>
        </div>
    );
};

export default AddTaskForm;