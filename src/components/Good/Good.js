import React, { useEffect, useState } from 'react';
import './good.scss';
import { ScrollToTop } from '../ScrollToTop';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addGoodToCart, setGoodData } from '../../actions/actions';

function Good({ good, addGoodToCart, setGoodData, username }) {
    const { type, id } = useParams();
    const [toLoad, setToLoad] = useState(true);
    useEffect(() => {
        console.log("Good:", good)
        if(toLoad){
            setGoodData(type, id)
            setToLoad(false);
        }
    },[good]);
    const handleClick = event => {
        event.preventDefault();
        addGoodToCart(good);
    }
    const btn = <div className="shadow">To add you need to log in</div>;
    const btnLog = <button className="btn-general" onClick={handleClick}>Add to cart</button>;
    const notReady = (
        <div className="good">
            <ScrollToTop />
            <div className="good__wrapper wrapper">
                <div className="good__image">
                    <div className="good__image__wrapper shadow loading-row"></div>
                </div>
                <div className="good__info">
                    <div className="info__wrapper">
                        <h3 className="good__name loading-row"> </h3>
                        <div className="good__discription loading-row"></div>
                        <div className="good__operation loading-row"></div>
                    </div>
                </div>
            </div>
        </div >
    );
    return (
        <>
            {good ? (
                <div className="good">
                    <ScrollToTop />
                    <div className="good__wrapper wrapper">
                        <div className="good__image">
                            <div className="good__image__wrapper shadow">
                                <img src="#" alt="#" />
                            </div>
                        </div>
                        <div className="good__info">
                            <div className="info__wrapper">
                                <h3 className="good__name">{good.name}</h3>
                                <div className="good__discription"></div>
                                <form className="good__operation">
                                    <div className="good__price">{good.price}</div>
                                    {username ? btnLog : btn}
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            ) : notReady}
        </>
    );
}

const mapState = state => ({
    good: state.goodReducer.good,
    username: state.account.username
});

const mapDispatch = dispatch => ({
    setGoodData(type, id){
        dispatch(setGoodData(type, id))
    },
    addGoodToCart(good) {
        dispatch(addGoodToCart(good))
    }
})

export default connect(mapState, mapDispatch)(Good);