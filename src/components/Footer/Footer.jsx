import React from 'react';
import './Footer.css';
import NewsLetter from '../NewsLetter/NewsLetter';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className=" col-3 col-xxl-2">
          <Link to="/" className="f-link">
            <h5 className='logo'>Vinod Kumar</h5>
          </Link>
        </div>
        <div className=" col-3 col-xxl-2">
          <h4 className="link-title">Short-cuts</h4>
          <Link to="/" className='f-link'>
            <p className="footer-link">Home</p>
          </Link>
          <Link to="/about" className='f-link'>
            <p className="footer-link">About us</p>
          </Link>
          <Link to="/team" className='f-link'>
            <p className="footer-link">Team</p>
          </Link>
          <Link to="/whatwedo" className='f-link'>
            <p className="footer-link">What we do</p>
          </Link>
          <Link to="/contact" className='f-link'>
            <p className="footer-link">Contact</p>
          </Link>
        </div>
        <div className=" col-3 col-xxl-2">
          <h4 className="link-title">More</h4>
          <Link to="/projects" className='f-link'>
            <p className="footer-link">Projects</p>
          </Link>
          <Link to="/events" className='f-link'>
            <p className="footer-link">Events</p>
          </Link>
          <Link to="/donate" className='f-link'>
            <p className="footer-link">Donate</p>
          </Link>
          <Link to="/blog" className='f-link'>
            <p className="footer-link">Blog</p>
          </Link>
        </div>
        <div className=" col-3 col-xxl-2">
          <h4 className="link-title">Connect</h4>
          <Link to="" className='f-link'>
            <p className="footer-link">Facebook</p>
          </Link>
          <Link to="" className='f-link'>
            <p className="footer-link">Instagram</p>
          </Link>
          <Link to="" className='f-link'>
            <p className="footer-link">Twitter</p>
          </Link>
          <Link to="" className='f-link'>
            <p className="footer-link">LinkedIn</p>
          </Link>
        </div>
        <div className="col-4 newsletter">
          <NewsLetter />
        </div>
      </div>
    </div>
  );
}

export default Footer;
