import React from 'react';

const Good = ({ name, price, description }) => {

    return (
        <div className="good">
            <div className="wrapper good__wrapper">
                <div className="good__image">
                    <img src="#" alt="#" />
                </div>
                <div className="good__info">
                    <h3 className="good__name">{name}</h3>
                    <div className="good__discription">{description}</div>
                    <div className="good__price">{price}</div>
                    <div className="good__operation">
                        <button className="btn-general">btn1</button>
                        <button className="btn-general">btn2</button>
                        <button className="btn-general">btn3</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Good;