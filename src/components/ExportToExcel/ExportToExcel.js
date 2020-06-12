import React from 'react';
import ReactExport from "react-data-export";
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const ExportToExcel = ({list, totalPrice, username, email}) => {
    const convertedList = list.map(e => ({
        name: e.name,
        type: e.type,
        description: e.description,
        price: e.currentPrice.price,
        currency: e.currentPrice.symbol
    }))
    return(
        <ExcelFile element={<button className="btn-general">Create report!</button>}>
            <ExcelSheet data={convertedList} name="Checkout">
                <ExcelColumn label="Name" value="name"/>
                <ExcelColumn label="Type" value="type"/>
                <ExcelColumn label="Description" value="description"/>
                <ExcelColumn label="Price" value="price"/>
                <ExcelColumn label="Currency" value="currency"/>
            </ExcelSheet>
            <ExcelSheet data={[{username, email, totalPrice }]} name="Other">
                <ExcelColumn label="Username" value="username"/>
                <ExcelColumn label="Email" value="email"/>
                <ExcelColumn label="Total" value="totalPrice"/>
            </ExcelSheet>
        </ExcelFile>
    )    
}

ExportToExcel.propTypes = {
    list: PropTypes.arrayOf(PropTypes.exact({
        _id: PropTypes.string.isRequired,
        serviceId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        currentPrice: PropTypes.exact({
            price: PropTypes.number.isRequired,
            symbol: PropTypes.string.isRequired
        })
     })),
    totalPrice: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

const mapState = state => ({
    list: state.account.cart,
    totalPrice: state.account.totalPrice,
    username: state.account.username,
    email: state.account.email
})

export default connect(mapState)(ExportToExcel);
