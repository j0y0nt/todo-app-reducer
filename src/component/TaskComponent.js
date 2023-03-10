import {useState, useReducer} from 'react';
import {initialState, todoReducer} from './todoReducer.js';
import './product.css';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import EditTask from './EditTask.js';

export default function TaskComponent() {
    const [todos, dispatch] = useReducer(todoReducer, initialState.todos);
    const [nextTaskId, setNextTaskId] = useState(3);
    const [show, hide] = useState(false);
    const [task, setTask] = useState({name: '', desc: ''});
    
    function handleAddTask(name, desc) {
        dispatch({
            type: 'add_task',
            name: name,
            desc: desc,
            id: nextTaskId
        });
        setNextTaskId(nextTaskId => nextTaskId + 1);
    }

    function handleDeleteTask(taskId) {
	dispatch({
	    type: 'delete_task',
	    id: taskId
	});
    }

    function onEditTask(utask, e) {
	setTask(task => utask);
	hide(!show);
    }

    function updateTask(task) {
	dispatch({
	    type: 'update_task',
	    task: task
	});
    }

    
    return(
            <>Hello
	   
          <AddTask onAddTask={handleAddTask} />
            
	       <TaskList todos={todos} onDeleteTask={handleDeleteTask}
	onEditTask={onEditTask}
	    />
	    <EditTask show={show} hide={hide} task={task}
	setTask={setTask}
	updateTask={updateTask} />
	    
        </>
    );
}
