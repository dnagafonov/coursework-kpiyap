import React, { useEffect, useState } from 'react';
import './list.scss'
import { ListGood } from '../ListGood';
import { ScrollToTop } from '../ScrollToTop';
import { randomId } from '../../tools/randomId';
import { connect } from 'react-redux';
import { fetchRateData, setRate } from '../../actions/actions';
import { getExchangeRate } from '../../tools/get-exchange-rate';

function List(props) {
    const { items, setRate, fetchRateData } = props;
    const listStub = require('./listStub.json');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchRateData();
        setLoading(false);
    }, []);
    const list = items.map(el => <ListGood name={el.name} price={el.price} key={randomId()} />);
    return (
        <>
            {loading ?
                <div className="list">
                    <ScrollToTop />
                    <div className="wrapper list__wrapper">
                        {listStub.map(e => <ListGood loading={true}/>)}
                    </div>
                </div> :
                <div className="list">
                    <ScrollToTop />
                    <div className="wrapper list__wrapper">
                        {list}
                    </div>
                </div>}
        </>
    );
}

const mapDisp = dispatch => ({
    fetchRateData() {
        dispatch(fetchRateData());
    }
})

export default connect(null, mapDisp)(List);