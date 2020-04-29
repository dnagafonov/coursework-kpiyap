import React, { useEffect, useState } from 'react';
import './list.scss'
import { ListGood } from '../ListGood';
import { ScrollToTop } from '../ScrollToTop';
import { randomId } from '../../tools/randomId';
import { connect } from 'react-redux';
import { setList } from '../../actions/actions';
import listStub from './listStub.json';
import stub from '../App/services-stub.json';

function List(props) {
    const { setList, list } = props;
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    useEffect(() => {
        (async () => {
            await setList(stub, "rub");
        })();
        setLoading(false);}, []);
    return (
        <>
            {loading ?
                <div className="list">
                    <ScrollToTop />
                    <div className="wrapper list__wrapper">
                        {listStub.map(e => <ListGood loading={true} />)}
                    </div>
                </div> :
                <div className="list">
                    <ScrollToTop />
                    <div className="wrapper list__wrapper">
                    {listStub.map(e => <ListGood loading={true} />)}
                </div>
                </div>}
        </>
    );
}

const mapState = state => ({
    list: state.goodReducer.list
});

const mapDisp = dispatch => ({
    setList(list, currency) {
        dispatch(setList(list, currency));
    }
})

export default connect(mapState, mapDisp)(List);