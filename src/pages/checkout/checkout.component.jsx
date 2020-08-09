import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutItemSuccessful from '../../components/checkout-item-successful/checkout-item-successful.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { selectCartItems, selectCartTotal, selectCartPaymentSuccessful, selectCartPaidItems, selectCartPaidTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total, paymentSuccessful, cartPaidItems, paidTotal, history}) => (
    <div className='checkout-page'>
        {paymentSuccessful ? (
            <div className='payment-successful'>
                <div className='thank-you-payment'>
                    <h1 className='thank-you'>Thank you!</h1>
                    <h2 className='payment-successful-message'>Your payment has been successful.</h2>
                </div>
                <div className='checkout-header'>
                    <div className='header-block-product'>
                        <span>Product</span>
                    </div>
                    <div className='header-block-quantity'>
                        <span>Quantity</span>
                    </div>
                    <div className='header-block-price'>
                        <span>Price</span>
                    </div>
                </div>
                {   
                    cartPaidItems.map(cartPaidItem => <CheckoutItemSuccessful key={cartPaidItem.id} cartPaidItem={cartPaidItem} />)
                }
                <div className='total-paid'>
                    TOTAL PAID: €{paidTotal}
                </div>
                    <div className='after-payment-options'>
                        <CustomButton onClick={()=>{
                            history.push('/');
                            }}> 
                            BACK HOME 
                        </CustomButton>

                        <CustomButton onClick={()=>{
                            history.push('/shop');
                            }}> 
                            GO TO SHOP
                        </CustomButton>
                    </div>
            </div>
        ) : (
        <div className='checkout-informations'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => 
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
            }
            <div className='total'>
                <span>TOTAL: €{total}</span>
            </div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - Exp: 01/21 - CVV:123
            </div>
            <StripeCheckoutButton price={total} />
        </div>)}
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
    paymentSuccessful: selectCartPaymentSuccessful,
    cartPaidItems: selectCartPaidItems,
    paidTotal: selectCartPaidTotal
});

export default connect(mapStateToProps)(CheckoutPage);