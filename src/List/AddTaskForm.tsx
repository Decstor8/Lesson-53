import React, {useState} from "react";
import './Add.Task.Form.css';

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
            <input className='input-text' value={newsTask} onChange={changeText} placeholder='Введите ваше напоминание'/>
            <button className='btn-input' onClick={newListTask}>Добавить заметку</button>
        </div>
    );
};

export default AddTaskForm;