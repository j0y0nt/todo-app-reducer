import {useState} from 'react';

export default function AddProduct({onAddTask}) {
    const [name, setName] = useState('');
    const [desc, setDescription] = useState('');

    return (<div className="addProductPanel">
	    <div className="field">
	    <input type="name" value={name}
	    onChange={e => setName(e.target.value)} />
	    </div>
	    <div className="field">
	    <input type="desc" value={desc}
	    onChange={e => setDescription(e.target.value)} />
	    </div>
	    <div className="addButtonDiv">
	    <input className="addProduct" type="button" value="Add"
	    onClick={() => onAddTask(name, desc) }/>
	    </div>
	    </div>
    )
}
