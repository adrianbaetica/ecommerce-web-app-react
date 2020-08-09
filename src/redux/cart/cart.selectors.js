import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedPrice, cartItem) => 
        accumulatedPrice + cartItem.price*cartItem.quantity, 
        0
    )
);

export const selectCartPaidItems = createSelector(
    [selectCart],
    (cart) => cart.paidItems
);

export const selectCartPaymentSuccessful = createSelector(
    [selectCart],
    cart => cart.paymentSuccessful
);

export const selectCartPaidTotal = createSelector(
    [selectCartPaidItems],
    cartPaidItems => cartPaidItems.reduce(
        (accumulatedPrice, cartPaidItem) => 
        accumulatedPrice + cartPaidItem.price*cartPaidItem.quantity, 
        0
    )
);
