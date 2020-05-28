import React, { useState } from 'react';
import './list-good.scss';
import { connect } from 'react-redux';
import { deleteGoodFromCart } from '../../actions/actions';

function ListGood(props) {
    const { name, price, loading, redirectToGood, good, enableDelete, deleteGoodFromCart, accountId} = props;
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
    const handleDelete = e => {
        e.stopPropagation();
        deleteGoodFromCart(accountId, good)
    }
    const deleteButton = <div className="btn-delete" onClick={handleDelete}><i className="fa fa-trash"></i></div>
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
                    {enableDelete ? deleteButton : null}
                </div>
            )}
        </>
    );
}

const mapState = state => ({
    accountId: state.account._id
});


const mapDispatch = dispatch => ({
    deleteGoodFromCart(id, service){
        dispatch(deleteGoodFromCart(id, service))
    }
})

export default connect(mapState, mapDispatch)(ListGood);