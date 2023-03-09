import {useState, useReducer} from 'react';
import {initialState, productReducer} from './productReducer.js';
import ProductList from './ProductList.js';
import AddProduct from './AddProduct.js';
import EditProduct from './EditProduct.js';

import './product.css';

export default function Product() {
    const [products, dispatch] = useReducer(productReducer, initialState.products);
    const [nextProductId, setNextProductId] = useState(3);
    const [show, hide] = useState(false);
    const [product, setProduct] = useState({name: '', desc: ''});
    
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

    function onEditProduct(uproduct, e) {
	setProduct(product => uproduct);
	hide(!show);
    }

    function updateProduct(product) {
	dispatch({
	    type: 'update_product',
	    product: product
	});
    }

    
    return(
        <>
          <AddProduct onAddTask={handleAddProduct} />
            <ProductList products={products} onDeleteProduct={handleDeleteProduct}
	onEditProduct={onEditProduct}
	    />
	    <EditProduct show={show} hide={hide} product={product}
	setProduct={setProduct}
	updateProduct={updateProduct} />
        </>
    );
}
