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
		desc: action.name,
		status: 'Draft'
	    },
      ];
    }
    default: {
	throw Error('Unknown action: ' + action.type);
    }
    }
};
