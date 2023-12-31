import React from 'react';
import Title from '../../containers/Title';
import Product from './Product';
import {ProductConsumer} from '../../context/context';

const ProductList = () => {


    return (
        <React.Fragment>
            <div>
                <div style={{position: 'relative', left: '2rem', top: '2rem'}}>
                    <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                return value.products && value.products.map(product => {
                                    return <Product key={product.id} product={product}/>
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default ProductList;
