export default function TaskList({todos, onDeleteTask, onEditTask}) {

    const todosHeader = (
	    <li>
	    <div className="taskContainer">
	    <div className="taskItem" style={{alignItems: 'center'}}>
	    <div style={{width: '2%', padding: '5px'}}>No.</div>
	    <div style={{width: '15%', textAlign: 'center'}}>Name</div>
	    <div className="" style={{width: '40%', }}>Description</div>
	    <div className="" style={{width: '10%', }}>Status</div>
	    <div className="" style={{width: '10%', margin: 'auto'}}>Action</div>
	    </div>
	    </div>
	    </li>

    );
    
    return (
	    <ul className="no-bullets surface">
	    {todosHeader}
	    {todos.map((task) => (
		    <li key={task.id}>
		    <Task task={task} onDeleteTask={onDeleteTask}
		onEditTask={onEditTask} />
		    </li>
	    ))}
	</ul>
    );
}

function Task({task, onDeleteTask, onEditTask}) {

    let taskContent = (
	    <div className="taskItem">
	    <div className="taskCell">
	    {task.id}
	</div>
	    <div className="taskCell taskName">
	    {task.name}
	</div>
	    <div className="taskCell taskDesc">
	    {task.desc}
	</div>
	    <div className="taskCell taskStatus">
	    {task.status}
	</div>
	    <div className="taskCell taskActions">
	    <input className="taskButton" type="button" value="Edit"
	onClick={(e) => onEditTask(task, e) }/>
	    <input className="taskButton" type="button" value="Delete"
	onClick={() => onDeleteTask(task.id) }/>
	    </div>
	    </div>
    );

    return (
	<div className="taskContainer">
	    {taskContent}
	</div>
    );
}
