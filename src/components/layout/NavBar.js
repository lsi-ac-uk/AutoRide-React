import React from 'react';
import Image from '../../assets/images/profile.jpg';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className='m-2 ms-auto justify-content-between'>
                <a className='text-decoration-none d-flex align-itemcenter mt-2'>
                <img src={Image} width="40px" height="40px" class="rounded-circle"/>
                <span className='ms-1 fs-5 text-dark'>Ana Smith</span>
                </a>

                </div>
        </nav>
    );
}

export default NavBar;
