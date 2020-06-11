import React, { useEffect, useState } from 'react';
import './list.scss'
import { ListGood } from '../ListGood';
import { ScrollToTop } from '../ScrollToTop';
import { connect } from 'react-redux';
import { setList } from '../../actions/actions';
import listStub from './listStub.json';
import { randomId } from '../../tools/randomId';

//TODO
function Cart() {
    return (
        <div className="cart">
            <div className="cart__wrapper wrapper">

            </div>
        </div>
    );
}
export default Cart;