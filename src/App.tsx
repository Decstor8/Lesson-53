import { useState } from 'react';
import './App.css';
import AddTaskForm from "./List/AddTaskForm.tsx";
import TaskList from "./List/TaskList.tsx";

interface Props {
    id: string;
    message: string;
}

function App() {
    const [tasks, setTasks] = useState<Props[]>([
        { id: '11231', message: 'Подтянуть знания' },
        { id: '21322', message: 'Отучится' },
        { id: '21522', message: 'Переехать' },
    ]);


    const newsTask = (message: string) => {
        const random = Math.random().toString();
        const newTask = {
            id: random,
            message: message,
        };
        const copyTask = [...tasks];
        copyTask.push(newTask);
        setTasks(copyTask);
    };

    const deleteTask = (id: string) => {
        const update: Props[] = [];
        for (const task of tasks) {
            if (task.id !== id) {
                update.push(task);
            }
        }
        setTasks(update);
    };

  return (
      <div>
          <h1>Заметки</h1>
          <AddTaskForm newTask={newsTask} />

          <div>
              {tasks.map(task => (
                  <TaskList
                      key={task.id}
                      id={task.id}
                      message={task.message}
                      deleted={deleteTask}
                  />
              ))}
          </div>
      </div>
  );
}

export default App;
