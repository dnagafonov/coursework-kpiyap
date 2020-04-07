import React from 'react';
import './list.scss'
import {ListGood} from '../ListGood';

const List = props => {
    const { items } = props;
    const list = items.map(el => <ListGood name={el.name} price={el.price} key={el.name}/>)
    return (
        <div className="list">
            <div className="wrapper list__wrapper">
                {list}
            </div>
        </div>
    );
}

export default List;