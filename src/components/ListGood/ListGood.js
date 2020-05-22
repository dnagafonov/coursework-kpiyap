import React, { useState } from 'react';
import './list-good.scss';

function ListGood(props) {
    const { name, price, loading, redirectToGood } = props;
    const [redirect, setRedirect] = useState(false);
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
            {redirect ? redirectToGood : null}
            {loading ? notReady : (
                <div className="list-good shadow" onClick={() => setRedirect(true)}>
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


export default ListGood;