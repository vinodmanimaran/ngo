import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="row">
        <div className="col-md-12 ">
            <h4 className='newsletter_title'>Subcribe to get latest updates</h4>
            <form className='newsletter-form' >
                <input type="email" name="email" id="email" placeholder='Your Email' className='form-input' />
                <button className='form-btn'>Subscribe</button>
                </form> 
        </div>
    </div>
  )
}

export default NewsLetter