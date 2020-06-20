import React from 'react'
import { closeModal } from '../../actions/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import './modal.scss';

const Modal = ({ closeModal, child }) => {
    return (
        <div className="modal" onClick={() => closeModal()}>
            <div className="modal-wrapper" onClick={e => e.stopPropagation()}>
                {child}
            </div>
        </div>
    )
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    child: PropTypes.node.isRequired
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