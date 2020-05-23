import React from 'react';
import './list-goods.scss'
import { ListGood } from '../ListGood';
import listStub from './listStub.json';
import { randomId } from '../../tools/randomId';
import { Redirect } from 'react-router-dom';

function  ListGoods({ list, loading }) {
    const notReady = listStub.map(e => <ListGood loading={true} key={randomId()} />);
    return (
        <>
            {loading ? notReady : (
                list.map(e => {
                    const listProps = {
                        key: randomId(),
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