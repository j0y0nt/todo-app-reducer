//import {useState} from 'react';

export default function ProductList({products}) {
    return (
	    <ul className="no-bullets surface">
	    {products.map((product) => (
		    <li key={product.id}>
		    <Product product={product} />
		    </li>
	    ))}
	</ul>
    );
}

function Product({product}) {
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
	    
	    </div>
    );

    return (
	<div className="productContainer">
	    {productContent}
	</div>
    );
}
