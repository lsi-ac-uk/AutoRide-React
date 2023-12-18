import React from 'react';
import Sidebar from '../components/layout/SideBar';
import Table from '../components/layout/Table';
import NavBar from '../components/layout/NavBar';
import SearchHeadBar from '../components/layout/SearchHeadBar';

function TripPage(){
    return (
        <div className="container-fluid min-vh-100">
        <div className='row'>
            <div className='col-2 vh-100 bg-warning'>
                <Sidebar />
            </div>
            <div className='col-10 vh-100'>
            <NavBar />
            <SearchHeadBar firstInput="Amount" secondInput="Start Time"/>
            <Table dataType="trip"/>
            </div>
        </div>  
    </div>
    );

}

export default TripPage;