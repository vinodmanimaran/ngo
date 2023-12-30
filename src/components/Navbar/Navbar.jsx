import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

 
  const OpenSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth < 992;
      const isScrolling = window.scrollY > 0;
  
      if (!isMobileSize && !isScrolling) {
        setSidebarOpen(false);
      }
    };
  
    const handleScroll = () => {
      const isMobileSize = window.innerWidth < 992;
      if (!isMobileSize) {
        setSidebarOpen(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

// best way to track the sidebar with the help of localstorage


  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  useEffect(() => {
    const savedSidebarState = localStorage.getItem('sidebarOpen');
    if (savedSidebarState !== null) {
      setSidebarOpen(JSON.parse(savedSidebarState));
    }
  }, []);



  return (
    <div className={`container-fluid nav-bar navbar   ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="row ">
        <div className="col col-xxl-2  col-1     nav-logo">
          <h5 style={{color:"black"}}>Vinod Kumar</h5>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="col d-lg-none  col-8  ">
          <button className='hamburger-icon' onClick={OpenSidebar}>
            ☰
          </button>
        </div>

        {!isMobile && (
          <>
            <div className="col gx-1  col-xxl-1 nav-item">
              <Link to="/" className='link'>
                <p>Home</p>
              </Link>
            </div>
            <div className="col  gx-1    col-xxl-1 nav-item">
              <Link to="/aboutus" className='link'>
                <p>About us</p>

              </Link>
            </div>
            <div className="col   gx-1   col-xxl-1  nav-item">
              <Link to="/whatwedo" className='link'>
                <p>What we do</p>
              </Link>
            </div>
            <div className="col  gx-1   col-xxl-1  nav-item">
              <Link to="/media" className='link'>
                <p>Media</p>
              </Link>
            </div>
            <div className="col  gx-1   col-xxl-1  nav-item">
              <Link to="/contact" className='link'>
                <p>Contact</p>
              </Link>
            </div>

            <div className="col col-xxl-1  d-sm-none">
              <button className='donate-btn donate-lg '>Donate</button>
            </div>
          </>
        )}
      </div>
      <hr className='nav-line' />

      {/* Sidebar */}
      {isSidebarOpen && (
       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
       <button className='close-btn' onClick={closeSidebar}>
         ✕
       </button>
       
       <div className="col col-sm-1 nav-logo">
         <h5 style={{color: "black", marginLeft: "10%"}}>Vinod Kumar</h5>
       </div>
     
       <button className='donate-btn mx-3 my-4'>Donate</button>
     
       <Link to="/" className='sidebar-link border-bottom py-2'>
         Home
       </Link>
       <Link to="/aboutus" className='sidebar-link border-bottom  py-2'>
         About us
       </Link>
       <Link to="/whatwedo" className='sidebar-link border-bottom  py-2'>
         What we do
       </Link>
       <Link to="/media" className='sidebar-link border-bottom  py-2'>
         Media
       </Link>
       <Link to="/contact" className='sidebar-link border-bottom border-primary py-2'>
         Contact
       </Link>
     </div>
     
      )}
    </div>
  );
};

export default Navbar;
