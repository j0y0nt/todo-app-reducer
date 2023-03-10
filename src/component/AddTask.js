import {useState} from 'react';

export default function AddTask({onAddTask}) {
    const [name, setName] = useState('');
    const [desc, setDescription] = useState('');
    
    return (<div className="addTaskPanel">
	    <div className="field">
	    <input type="name" value={name} size="40" placeholder="Enter title..."
	    onChange={e => {
		setName(e.target.value);
	    }} />
	    </div>
	    <div className="field">
	    <input type="desc" value={desc} size="40" placeholder="Enter description..."
	    onChange={e => {
		setDescription(e.target.value);
	    }} />
	    </div>
	    <div className="addButtonDiv">
	    <input className="taskButton" type="button" value="Add"
	    onClick={(e) => {
		if(name.length > 0 && desc.length > 0) {
		    onAddTask(name, desc);
		    setName(name => '');
		    setDescription(desc => '');
		} else {
		    alert('Name and Description are required field.');
		}
	    }}/>
	    </div>
	    </div>
    )
}
