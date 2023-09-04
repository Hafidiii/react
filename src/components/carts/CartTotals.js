import React from 'react';
import {ButtonWrapper} from "../orders/OrderComponent";
export default function CartTotals({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart} = value;
    return (
        <React.Fragment>

            <div className="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right" style={{ fontFamily: 'Lato_medium'}}>

                        <ButtonWrapper bgColor='#606779' color="#FFF" className="mr-2" onClick={() => {
                            clearCart()
                        }}>
                            Clear
                        </ButtonWrapper>
                        <ButtonWrapper bgColor='#D6AE4F' color='#FFF' className="mb-5">Approve</ButtonWrapper>

                        <h5>
                            <span> Sum :</span>{" "}
                            <strong>$ {cartSubTotal} </strong>
                        </h5>
                        <h5>
                            <span> tax :</span>{" "}
                            <strong>$ {cartTax} </strong>
                        </h5>
                        <h5 className="mt-5">
                            <span> total :</span>{" "}
                            <strong>$ {cartTotal} </strong>
                        </h5>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
