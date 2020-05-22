import React from 'react';
import './list-goods.scss'
import { ListGood } from '../ListGood';
import listStub from './listStub.json';
import { randomId } from '../../tools/randomId';
import { Redirect, useLocation } from 'react-router-dom';

function ListGoods({ list, loading }) {
    const location = useLocation();
    const notReady = listStub.map(e => <ListGood loading={true} key={randomId()} />);
    return (
        <>
            {loading ? notReady : (
                list.map(e => {
                    const listProps = {
                        key: e.id,
                        name: e.name,
                        price: e.currentPrice.price + " " + e.currentPrice.symbol,
                        redirectToGood: <Redirect to={`${e.type + "/" + e.id}`} />
                    }
                    return <ListGood {...listProps} />
                })
            )}
        </>
    );
}

export default ListGoods;