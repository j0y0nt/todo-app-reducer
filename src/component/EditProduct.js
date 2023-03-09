
export default function EditProduct({show, hide, product, setProduct, updateProduct}) {
   
    function closeDialog() {
	hide(show => !show);
    }

    function onInputChange(event) {
	const target = event.target;
	const value = target.value;
	const name = target.name;
	setProduct({
	    ...product,
	    [name]: value
        });
    }

    function onFormSubmit(event) {
	updateProduct(product);
	hide(show => !show);
	event.preventDefault();
    }
    
    return (
	    <dialog id="editProduct" open={show} style={{border: '1px solid lightgrey', borderRadius: '6px'}}>
	    <div>
	    <div style={{border: '1px solid', marginBottom: '10px'}}>
	    Edit Product
	</div>
	    <form action="#" onSubmit={e =>onFormSubmit(e)} >
	    <div className="editRow">
	    <div style={{width: '40%', margin: '5px', textAlign: 'left'}}>
	    <label>Name</label>
	    </div>
	    <div style={{margin: '5px'}}>
	    <input name="name" defaultValue={product.name}
	onChange={(e) => onInputChange(e)} />
	    </div>
	    </div>
	    
	    <div className="editRow">
	    <div style={{width: '40%', textAlign: 'left'}}>
	    <label>Description</label>
	    </div>
	    <div style={{margin: '5px'}}>
	    <input name="desc" defaultValue={product.desc}
	onChange={e => onInputChange(e)} />
	    </div>
	    </div>
	    
	    <div className="editRow editProductBtnRow">
	    <div style={{width: '50%'}}>
	    <button onClick={e => closeDialog(e)}>Cancel</button>
	    </div>
	    <div style={{width: '50%'}}>
	    <button onClick={e => updateProduct(product)} >Save</button>
	    </div>
	    </div>
	    </form>

	</div>
	    </dialog>
    );
}
