import React, { useEffect, useState } from 'react';
import './list.scss'
import { ListGood } from '../ListGood';
import { ScrollToTop } from '../ScrollToTop';
import { connect } from 'react-redux';
import { setList } from '../../actions/actions';
import listStub from './listStub.json';
import stub from '../App/services-stub.json';
import { randomId } from '../../tools/randomId';

function List(props) {
    const { list } = props;
    const [toLoad, setToLoad] = useState(true);
    useEffect(() => {
        if(toLoad){
            (async() => {
                await setList(stub, "rub");
            })();
            setToLoad(false);
        }  
    }, [list, toLoad]);
    
    return (
        <>
            {list ?
                <div className="list">
                    <ScrollToTop />
                    <div className="wrapper list__wrapper">
                        {list.map(e => <ListGood key = {randomId()} name={e.name} price={e.currentPrice.price + " " + e.currentPrice.symbol} />)}
                    </div>
                </div> :
                <div className="list">
                    <ScrollToTop />
                    <div className="wrapper list__wrapper">
                        {listStub.map(e => <ListGood loading={true} key = {randomId()}/>)}
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