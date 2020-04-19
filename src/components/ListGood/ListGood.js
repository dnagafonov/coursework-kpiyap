import React from 'react';
import './list-good.scss';
import { openGood } from '../../actions/actions';
import { connect } from 'react-redux';

const ListGood = props => {
    const { name, price, openGood} = props;
    return (
        <div className="list-good shadow" onClick={() => openGood(props)}>
            <div className="list-good__image">
                <div className="list-good__name text-container">{name}</div>
            </div>
            <div className="list-good__description">
                <div className="list-good__price">{price}</div>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    openGood(good){
        dispatch(openGood(good));
    }
})

export default connect(null, mapDispatchToProps)(ListGood);