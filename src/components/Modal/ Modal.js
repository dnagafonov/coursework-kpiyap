import React, { useState } from 'react'
import './modal.scss';
import { closeModal } from '../../actions/actions';
import { connect } from 'react-redux';

const Modal = ({ closeModal, child }) => {
    return (
        <div className="modal">
            <div className="modal-wrapper" onClick={() => closeModal()}>
                {child}
            </div>
        </div>
    )
}

const mapState = state => ({
    child: state.other.modalChild
})

const mapDispatch = dispatch => ({
    closeModal() {
        dispatch(closeModal());
    }
});

export default connect(mapState, mapDispatch)(Modal);