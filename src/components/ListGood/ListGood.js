import React from 'react';
import './list-good.scss';
import { connect } from 'react-redux';
import { setGoodData } from '../../actions/actions';

function ListGood(props) {
    const { name, price, loading } = props;
    const notReady = (
        <div className="list-good shadow" >
            <div className="list-good__image loading-row">
                <div className="list-good__name text-container"></div>
            </div>
            <div className="list-good__description">
                <div className="list-good__price loading-row"></div>
            </div>
        </div>
    );
    return (
        <>
            {loading ? notReady : (
                <div className="list-good shadow">
                    <div className="list-good__image">
                        <div className="list-good__name text-container">{name}</div>
                    </div>
                    <div className="list-good__description">
                        <div className="list-good__price">{price}</div>
                    </div>
                </div>
            )}
        </>
    );
}

const mapDispatch = dispatch => ({
    setGoodData(goodInfo, currentPrice) {
        dispatch(setGoodData(goodInfo, currentPrice));
    }
});


export default connect(null, mapDispatch)(ListGood);