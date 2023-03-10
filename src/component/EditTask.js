
export default function EditProduct({show, hide, task, setTask, updateTask}) {
   
    function closeDialog(event) {
	hide(show => !show);
	setTask({
	    name: '', desc: ''
	});
	event.preventDefault();
    }

    function onInputChange(event) {
	const target = event.target;
	const value = target.value;
	const name = target.name;
	setTask({
	    ...task,
	    [name]: value
        });
	event.preventDefault();
    }

    function onFormSubmit(event) {
	updateTask(task);
	hide(show => !show);
	event.preventDefault();
    }
    
    return (
	    <dialog id="editTask" open={show}
	style={{border: '1px solid lightgrey', borderRadius: '6px'}}>
	    <div>
	    <div style={{border: '1px solid', marginBottom: '10px'}}>
	    Edit Task
	</div>
	    <form action="#" onSubmit={e =>onFormSubmit(e)} >
	    <div className="editRow">
	    <div style={{width: '40%', margin: '5px', textAlign: 'left'}}>
	    <label>Name</label>
	    </div>
	    <div style={{margin: '5px'}}>
	    <input name="name" defaultValue={task.name}
	onChange={(e) => onInputChange(e)} />
	    </div>
	    </div>
	    
	    <div className="editRow">
	    <div style={{width: '40%', textAlign: 'left'}}>
	    <label>Description</label>
	    </div>
	    <div style={{margin: '5px'}}>
	    <input name="desc" defaultValue={task.desc}
	onChange={e => onInputChange(e)} />
	    </div>
	    </div>
	    
	    <div className="editRow editTaskBtnRow">
	    <div style={{width: '50%'}}>
	    <button onClick={e => closeDialog(e)}>Cancel</button>
	    </div>
	    <div style={{width: '50%'}}>
	    <button onClick={e => updateTask(task )} >Save</button>
	    </div>
	    </div>
	    </form>

	</div>
	    </dialog>
    );
}
