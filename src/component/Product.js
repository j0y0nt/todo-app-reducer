import {useState, useReducer} from 'react';
import {initialState, productReducer} from './productReducer.js';
import ProductList from './ProductList.js';
import AddProduct from './AddProduct.js';

import './product.css';

export default function Product() {
    const [products, dispatch] = useReducer(productReducer, initialState.products);
    const [nextProductId, setNextProductId] = useState(3);
    
    function handleAddProduct(name, desc) {
        dispatch({
            type: 'add_product',
            name: name,
            desc: desc,
            id: nextProductId
        });
        setNextProductId(nextProductId => nextProductId+1);
    }

    function handleDeleteProduct(productId) {
	dispatch({
	    type: 'delete_product',
	    id: productId
	});
    }
    
    return(
        <>
          <AddProduct onAddTask={handleAddProduct} />
            <ProductList products={products} onDeleteProduct={handleDeleteProduct} />
        </>
    );
}
