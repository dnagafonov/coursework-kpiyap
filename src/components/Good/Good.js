import React from 'react';
import './good.scss';
import { ScrollToTop } from '../ScrollToTop';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { addGoodToCart } from '../../actions/actions';

function Good({ list, addGoodToCart, username }) {
    const { id } = useParams();
    let item = null;
    if (list) {
        item = list.filter(e => e.id === +id)[0];
    }
    const handleClick = event => {
        event.preventDefault();
        addGoodToCart(item);
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
            {item ? (
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
                                <h3 className="good__name">{item.name}</h3>
                                <div className="good__discription"></div>
                                <form className="good__operation">
                                    <div className="good__price">{item.currentPrice.price + " " + item.currentPrice.symbol}</div>
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
    list: state.goodReducer.list,
    username: state.account.username
});

const mapDispatch = dispatch => ({
    addGoodToCart(good) {
        dispatch(addGoodToCart(good))
    }
})

export default connect(mapState, mapDispatch)(Good);