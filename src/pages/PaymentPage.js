import React from 'react';
import Sidebar from '../components/layout/SideBar';
import NavBar from '../components/layout/NavBar';
import Table from '../components/layout/Table';
import SearchHeadBar from '../components/layout/SearchHeadBar';

function PaymentPage(){
    return (
        <div className="container-fluid min-vh-100">
        <div className='row'>
            <div className='col-2 vh-100 bg-warning'>
                <Sidebar />
            </div>
            <div className='col-10 vh-100'>
            <NavBar />
            <SearchHeadBar firstInput="Name/Family" secondInput="Transactio ID"/>
            <Table dataType="payment" />
            </div>
        </div>  
    </div>
    );

}

export default PaymentPage;