import React from 'react';
import { addProductToCart } from "features/Cart/cartSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const dispatch = useDispatch();
const history = useHistory();

export const handleClickAddCart = (x) => {
    const action = addProductToCart(x);
    dispatch(action);
}
export const handleClickView = (x) => {
    const urlView = `/${x.id}`;
    history.push(urlView);
}
export const handleCLickPayment = (x) => {
    console.log("clickpayment");
}

