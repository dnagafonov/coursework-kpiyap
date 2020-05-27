import React, { useEffect } from 'react';
import './list.scss'
import { ScrollToTop } from '../ScrollToTop';
import { connect } from 'react-redux';
import { fetchListData, clearList } from '../../actions/actions';
import { ListGoods } from '../ListGoods';
import { useLocation } from 'react-router-dom';

function List({ dataUrl, list, currency, fetchListData }) {
    const location = useLocation().pathname;
    useEffect(() => {
        fetchListData(dataUrl, currency)
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

const mapState = state => ({
    list: state.goodReducer.list,
    currency: state.account.currency
});

const mapDisp = dispatch => ({
    clearList(){
        dispatch(clearList())
    },
    fetchListData(url, currency) {
        dispatch(fetchListData(url, currency))
    }
})

export default connect(mapState, mapDisp)(List);