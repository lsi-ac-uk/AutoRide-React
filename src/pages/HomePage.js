import React from 'react';
import Sidebar from '../components/layout/SideBar';
import Header from '../components/layout/Header';

function HomePage(){
    return (
    <div className="container-fluid min-vh-100">
        <div className='row '>
            <div className='col-2 bg-warning'>
                <Sidebar />
            </div>
            <div className='col-10 p-0'>
                <Header />
            </div>
        </div>  
    </div>
    );

}

export default HomePage;