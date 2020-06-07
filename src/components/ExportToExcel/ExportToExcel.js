import React from 'react';
import ReactExport from "react-data-export";
import { connect } from 'react-redux';

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
            <ExcelSheet data={[{username}]} name="Username">
                <ExcelColumn label="Username" value="username"/>
            </ExcelSheet>
            <ExcelSheet data={[{email}]} name="Email">
                <ExcelColumn label="Email" value="email"/>
            </ExcelSheet>
            <ExcelSheet data={[{total: totalPrice}]} name="Total">
                <ExcelColumn label="Total" value="total"/>
            </ExcelSheet>
        </ExcelFile>
    )    
}

const mapState = state => ({
    list: state.account.cart,
    totalPrice: state.account.totalPrice,
    username: state.account.username,
    email: state.account.email
})

export default connect(mapState)(ExportToExcel);
