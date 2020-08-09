import React from 'react';
import {connect} from 'react-redux';

import {registerPayment} from '../../redux/cart/cart.actions';

import './checkout-item-successful.styles.scss';

class CheckoutItemSuccessful extends React.Component{
    componentWillUnmount(){
        this.props.registerPayment();
    }

    render(){
    const {name, imageUrl, price, quantity} = this.props.cartPaidItem;
    
    return (
    <div className='checkout-item-successful'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'> {name} </span>
        <span className='quantity'>{quantity}</span>
        <span className='price'> €{price} </span>
    </div>
    )};
}

const mapDispatchToProps = dispatch => ({
    registerPayment: () => dispatch(registerPayment())
});

export default connect(null, mapDispatchToProps)(CheckoutItemSuccessful);