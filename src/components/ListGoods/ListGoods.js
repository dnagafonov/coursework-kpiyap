import React from 'react';
import './list-goods.scss'
import { ListGood } from '../ListGood';
import listStub from './listStub.json';
import { randomId } from '../../tools/randomId';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

function  ListGoods({ list, loading, enableDelete }) {
    const notReady = listStub.map(e => <ListGood loading={true} key={randomId()} />);
    return (
        <>
            {loading ? notReady : (
                list.map(e => {
                    const listProps = {
                        enableDelete,
                        good: e,
                        key: randomId(),
                        name: e.name,
                        price: e.currentPrice.price + " " + e.currentPrice.symbol,
                        redirectToGood: <Redirect to={`${e.type + "/" + e._id}`} />
                    }
                    return <ListGood {...listProps} />
                })
            )}
        </>
    );
}

ListGoods.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        currentPrice: PropTypes.exact({
            price: PropTypes.number.isRequired,
            symbol: PropTypes.string.isRequired
        })
    })),
    loading: PropTypes.bool,
    enableDelete: PropTypes.bool
};

export default ListGoods;