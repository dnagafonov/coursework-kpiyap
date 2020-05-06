import React from 'react';
import './account.scss';
import { connect } from 'react-redux';

function Account (props) {
    
    return (
       <div className="account">
           <div className="wrapper account__wrapper">
               
           </div>
       </div>
    );
}

const mapState = state => ({
    account: state.account
})

export default connect(mapState)(Account);