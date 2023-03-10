export const initialState = {
    todos: [
	{id: 1, name: 'Task 1', desc: 'This is Task 1 desc.', status: 'Draft'},
	{id: 2, name: 'Task 2', desc: 'This is Task 2 desc.', status: 'Draft'}]
    
};

export function todoReducer(todos, action) {
    switch (action.type) {
    case 'add_task': {
	return [
            ...todos,
	    {
		id: action.id,
		name: action.name,
		desc: action.desc,
		status: 'Draft'
	    },
	];
    }
    case 'update_task': {
	return todos.map(t => {
	    if(t.id === action.task.id) {
		return action.task;
	    } else {
		return t;
	    }
	});
    }
    case 'delete_task': {
	let deleteIdx = -1;
	deleteIdx = todos.findIndex(task => task.id === action.id);
	if(deleteIdx !== -1) {
	    const newTodos = todos.splice(deleteIdx, 1);
	    return [
		newTodos
	    ];
	} else {
	    return [
		...todos
	    ];
	}
    }
    default: {
	throw Error('Unknown action: ' + action.type);
    }
    }
};
