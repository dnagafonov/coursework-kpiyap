import React, { useEffect } from 'react';
import { ScrollToTop } from '../ScrollToTop';
import { connect } from 'react-redux';
import { fetchListData, clearList } from '../../actions/actions';
import { ListGoods } from '../ListGoods';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types'

import './list.scss'

function List({ dataUrl, list, currency, fetchListData, clearList }) {
    const location = useLocation().pathname;
    useEffect(() => {
        fetchListData(dataUrl, currency)
        return () => clearList();
        // eslint-disable-next-line
    }, [dataUrl, currency, location]);

    return (
        <>
            {list ?
                <div className="list">
                    <ScrollToTop />
                    <div className="list__wrapper wrapper">
                        <ListGoods list={list} />
                    </div>
                </div> :
                <div className="list">
                    <ScrollToTop />
                    <div className="list__wrapper wrapper">
                        <ListGoods loading={true} />
                    </div>
                </div>}
        </>
    );
}

List.propTypes = {
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
    currency: PropTypes.string.isRequired,
    clearList: PropTypes.func.isRequired,
    fetchListData: PropTypes.func.isRequired
}

const mapState = state => ({
    list: state.goodReducer.list,
    currency: state.account.currency
});

export default connect(mapState, { clearList, fetchListData })(List);