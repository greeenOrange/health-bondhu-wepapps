import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import './Header.css'

const Header = () => {
  const [isOpen, setOpen] = useState(false);  

    return (
        <header>
            <nav className="navbar navbar-expand-lg">
  <div className="container">
  <img src="https://i.ibb.co/9ZQ2QkQ/Group-1.png" alt="Group-1" border="0" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <Hamburger toggled={isOpen} toggle={setOpen} />
    </button>
    <div className="collapse navbar-collapse nav-menu" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Departments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts</a>
        </li>
      </ul>
      <button><span className='animate__animated animate__bounce'>Free Consulation</span></button>
    </div>
  </div>
</nav>
        </header>
    );
};

export default Header;