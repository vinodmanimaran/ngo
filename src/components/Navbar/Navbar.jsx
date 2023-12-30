import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const OpenSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const isMobileSize = window.innerWidth < 992;
      setIsMobile(isMobileSize);

      // Update the sidebar state based on the window width
      setSidebarOpen(!isMobileSize);
    };

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Initial call to set the initial state
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`container-fluid nav-bar navbar navbar-expand-lg  ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <div className="row d-sm-none">
        <div className="col col-xxl-3  nav-logo">
          <h5 style={{color:"black"}}>Vinod Kumar</h5>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="col d-lg-none">
          <button className='hamburger-icon' onClick={OpenSidebar}>
            ☰
          </button>
        </div>

        {/* Conditionally render navigation items based on screen size */}
        {!isMobile && (
          <>
            <div className="col col-xxl-1 nav-item">
              <Link to="/" className='link'>
                <p>Home</p>
              </Link>
            </div>
            <div className="col col-xxl-1 nav-item">
              <Link to="/aboutus" className='link'>
                <p>About us</p>

              </Link>
            </div>
            <div className="col col-xxl-1 nav-item">
              <Link to="/whatwedo" className='link'>
                <p>What we do</p>
              </Link>
            </div>
            <div className="col col-xxl-1 nav-item">
              <Link to="/media" className='link'>
                <p>Media</p>
              </Link>
            </div>
            <div className="col col-xxl-1 nav-item">
              <Link to="/contact" className='link'>
                <p>Contact</p>
              </Link>
            </div>

            <div className="col d-none d-lg-block">
              <button className='donate-btn '>Donate</button>
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
          <div className="col col-xxl-3 nav-logo">
          <h5 style={{color:"black",marginLeft:"10%"}}>Vinod Kumar</h5>
        </div>
          <button className='donate-btn mx-3 my-4'>Donate</button>

          <Link to="/" className='sidebar-link'>
            Home
          </Link>
          <Link to="/aboutus" className='sidebar-link'>
            About us
          </Link>
          <Link to="/whatwedo" className='sidebar-link'>
            What we do
          </Link>
          <Link to="/media" className='sidebar-link'>
            Media
          </Link>
          <Link to="/contact" className='sidebar-link'>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
