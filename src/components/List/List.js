import React from 'react';
import './list.scss'
import {ListGood} from '../ListGood';
import { ScrollToTop } from '../ScrollToTop';
import { randomId } from '../../tools/randomId';

const List = props => {
    const { items } = props;
    const list = items.map(el => <ListGood name={el.name} price={el.price} key={randomId()}/>);
    return (
        <div className="list">
            <ScrollToTop/>
            <div className="wrapper list__wrapper">
                {list}
            </div>
        </div>
    );
}

export default List;