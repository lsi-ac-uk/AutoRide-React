// Header.js

import React from 'react';
import NavBar from './NavBar';

const Header = () => {
  return (
    <div className='h-100'>
     
      {/* home page */}
      <div className='container-fluid bg-secondary h-100 px-0'>
      
      <div className='d-flex flex-column h-100'>
        <NavBar />
        <div className='d-flex flex-column h-100 justify-content-around'>
          <div className='row justify-content-around'>

            <div className='col-md-3'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-3'>Total Customers: 2000</h3>
                  <p className='fs-6'>Joined This month: +20</p>
                </div>
                
              </div>
            </div>

            <div className='col-md-3'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-3'>230</h3>
                  <p className='fs-6'>Products</p>
                </div>
                <i className='bi bi-cart-plus p-3 fs-1'></i>
              </div>
            </div>

            </div>
            <div className='row justify-content-around'>

            <div className='col-md-3'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-3'>Total Trips: 4100</h3>
                  <p className='fs-6'>Longest Distance: 12 mile</p>
                  <p className='fs-6'>The most popular model: BMW X3</p>
                </div>
                
              </div>
            </div>

            <div className='col-md-3'>
              <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                <div>
                  <h3 className='fs-2'>230</h3>
                  <p className='fs-5'>Products</p>
                </div>
                <i className='bi bi-cart-plus p-3 fs-1'></i>
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>


    </div>

  );
}

export default Header;
