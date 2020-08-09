import React from 'react';
import {connect} from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import {billCart} from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({price, billCart}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51HAzQrJUaAebZ0dRoGLs9AtxxR5kjYZ9IJYfv3MjSTHoW7r3089kZfBqb2Q36yHSLnwJ7zEYRiZK2ZAFpJxLtnyo00rEoGbDEe';

    const onToken = token => {
        billCart();
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='E-commerce Clothing'
            billingAddress
            shippingAddress
            description={`Your total is €${price}`}
            currency='EUR'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

const mapDispatchToProps = dispatch => ({
    billCart: () => dispatch(billCart())
});

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);