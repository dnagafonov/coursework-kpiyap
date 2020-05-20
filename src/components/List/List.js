import React, { useEffect, useState } from 'react';
import './list.scss'
import { ScrollToTop } from '../ScrollToTop';
import { connect } from 'react-redux';
import { setList, getListData } from '../../actions/actions';
import { ListGoods } from '../ListGoods';

function List({ dataUrl, list, currency, setList, getListData }) {
    const [toLoad, setToLoad] = useState(true);
    useEffect(() => {
        if (toLoad) {
            const data = getListData(dataUrl);
            setList(data, currency);
            setToLoad(false);
        }
        // eslint-disable-next-line
    }, [list, currency]);

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
    setList(list, currency) {
        dispatch(setList(list, currency));
    },
    getListData(url) {
        dispatch(getListData(url))
    }
})

export default connect(mapState, mapDisp)(List);