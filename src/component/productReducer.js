export const initialState = {
    products: [
	{id: 1, name: 'Product 1', desc: 'This is product 1 desc.', status: 'Draft'},
	{id: 2, name: 'Product 2', desc: 'This is product 2 desc.', status: 'Draft'}]
    
};

export function productReducer(products, action) {
    switch (action.type) {
    case 'add_product': {
	return [
            ...products,
	    {
		id: action.id,
		name: action.name,
		desc: action.desc,
		status: 'Draft'
	    },
	];
    }
    case 'update_product': {
	return products.map(p => {
	    if(p.id === action.product.id) {
		return action.product;
	    } else {
		return p;
	    }
	});
    }
    case 'delete_product': {
	let deleteIdx = -1;
	deleteIdx = products.findIndex(product => product.id === action.id);
	if(deleteIdx !== -1) {
	    const newProducts = products.splice(deleteIdx, 1);
	    return [
		newProducts
	    ];
	} else {
	    return [
		...products
	    ];
	}
    }
    default: {
	throw Error('Unknown action: ' + action.type);
    }
    }
};
