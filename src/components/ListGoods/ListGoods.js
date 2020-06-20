import React from 'react';
import './list-goods.scss'
import { ListGood } from '../ListGood';
import { randomId } from '../../tools/randomId';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { deleteGoodFromCart } from '../../actions/actions';

function  ListGoods({ list, loading, enableDelete, accountId, deleteGoodFromCart }) {
    const notReady = Array(30).fill(0).map(e => <ListGood loading={true} key={randomId()} />);
    return (
        <>
            {loading ? notReady : (
                list.map(e => {
                    const id = enableDelete ? e.serviceId : e._id;
                    const listProps = {
                        accountId,
                        enableDelete,
                        deleteGoodFromCart,
                        good: e,
                        key: randomId(),
                        name: e.name,
                        price: e.currentPrice.price + " " + e.currentPrice.symbol,
                        redirectToGood: <Redirect to={`${e.type + "/" + id}`} />
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
    accountId: PropTypes.string,
    loading: PropTypes.bool,
    enableDelete: PropTypes.bool,
    deleteGoodFromCart: PropTypes.func.isRequired,
};

const mapState = state => ({
    accountId: state.account._id
});


const mapDispatch = dispatch => ({
    deleteGoodFromCart(id, service) {
        dispatch(deleteGoodFromCart(id, service))
    }
})

export default connect(mapState, mapDispatch)(ListGoods);