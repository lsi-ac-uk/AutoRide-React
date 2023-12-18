import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Image from '../../assets/images/logo.png';


function Sidebar(){
    return (
            <div className='bg-warning p-2 d-flex align-content-between flex-wrap vh-100'>
                <div className='m-2'>
                <a className='text-decoration-none d-flex align-itemcenter mt-2'>
                <img src={Image} width="40px" height="40px" class="rounded-circle d-none d-sm-inline d-md-inline"/>
                <span className='ms-1 fs-5 text-dark d-none d-sm-inline d-md-inline'>AutoRide</span>
                </a>

                </div>
                <div className='d-flex'>
                    <ul className='nav nav-pills flex-column mb-4 mt-sm-0'>
                        <li className='nav-item'>
                            <Link to="/" class="nav-link text-dark">
                                <i className='bi bi-house'></i>
                                <span className='ms-3 fs-6 d-none d-sm-inline d-md-inline'>Dashboard</span>
                            </Link>
                        </li>
                        <li className='nav-item py-2 py-sm-0'>
                            <Link to="/customer" class="nav-link text-dark">
                                <i className='bi bi-speedometer2'></i>
                                <span className='ms-3 fs-6 d-none d-sm-inline d-md-inline'>Customers</span>
                            </Link>
                        </li>
                        <li className='nav-item py-sm-0'>
                            <Link to="/trip" class="nav-link text-dark">
                                <i className='bi bi-table py-2'></i>
                                <span className='ms-3 fs-6 d-none d-sm-inline d-md-inline'>Trips</span>
                            </Link>
                        </li>
                        <li className='nav-item py-2 py-sm-0'>
                            <Link to="/vehicle" class="nav-link text-dark">
                                <i className='bi bi-car-front'></i>
                                <span className='ms-3 fs-6 d-none d-sm-inline d-md-inline'>Vehicle</span>
                            </Link>
                        </li>
                        <li className='nav-item py-sm-0'>
                            <Link to="/payment" class="nav-link text-dark">
                                <i className='bi bi-credit-card'></i>
                                <span className='ms-3 fs-6 d-none d-sm-inline d-md-inline'>Payment</span>
                            </Link>
                        </li>
                    
                    </ul>
                </div>
                <div className='d-flex w-100'>
                    <ul className='nav nav-pills flex-column mt-5 mt-sm-0 mb-4'>
                        <li className='nav-item py-sm-0'>
                            <Link to="/" class="nav-link text-dark">
                                <i className='bi bi-gear'></i>
                                <span className='ms-3 d-none fs-6 d-sm-inline d-md-inline'>Setting</span>
                            </Link>
                        </li>
                        <li className='nav-item py-sm-0'>
                            <Link to="/" class="nav-link text-dark">
                                <i className='bi bi-door-closed'></i>
                                <span className='ms-3 fs-6 d-none d-sm-inline d-md-inline'>LogOut</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

    );
}

export default Sidebar