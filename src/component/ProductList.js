//import {useState} from 'react';

export default function ProductList({products, onDeleteProduct}) {

    const productsHeader = (
	    <li>
	    <div className="productContainer">
	    <div className="productItem" style={{alignItems: 'center'}}>
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
	    {productsHeader}
	    {products.map((product) => (
		    <li key={product.id}>
		    <Product product={product} onDeleteProduct={onDeleteProduct} />
		    </li>
	    ))}
	</ul>
    );
}

function Product({product, onDeleteProduct}) {
    let productContent = (
	    <div className="productItem">
	    <div className="productCell">
	    {product.id}
	</div>
	    <div className="productCell productName">
	    {product.name}
	</div>
	    <div className="productCell productDesc">
	    {product.desc}
	</div>
	    <div className="productCell productStatus">
	    {product.status}
	</div>
	    <div className="productCell productActions">
	    <input className="productButton" type="button" value="Delete"
	onClick={() => onDeleteProduct(product.id) }/>
	    </div>
	    </div>
    );

    return (
	<div className="productContainer">
	    {productContent}
	</div>
    );
}
