import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeaderImg from '../../assets/home-header.jpg'
import About from '../../assets/about.jpg'
import Logo from '../../assets/Logo.png'
import Kid from '../../assets/kid.jpg'
import Project1 from '../../assets/project1.jpg'
import Project2 from '../../assets/project2.jpg'
import Project3 from '../../assets/project3.jpg'
import CTA from '../../assets/cta.jpg'
import { BsArrowRight } from 'react-icons/bs';
import { MdOutlinePlayCircle } from "react-icons/md";


import { Pie } from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);

const Home = () => {

  const data = {
    labels: ['Child Care Home', 'Cleanliness Program', 'Helping People', 'Excursions', 'Feeding the Poor'],
    datasets: [
      {
        data: [40, 35, 10, 10, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
      },
    ],
  };

  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var label = data.labels[tooltipItem.index];
          var value = dataset.data[tooltipItem.index];
          return `${label}: ${value}%`;
        },
      },
    },
  };
  return (
    <>
        <Navbar/>

     <div className="container-fluid ">


 
    <div className="row main-header">

      <div className="col header-img col-12 ">
      <img src={HeaderImg}  alt=""  className='home-header img-fluid'/>
        <div className="head-top">
        <h1 className='head-top-text'>Inclusive care for children with special needs</h1>
        <div className="row">
          <div className="col col-5">
          <button className='whatwedo'>What  we do</button>

          </div>
          <div className="col play  col- mx-1 my-2">
            
            <h3 className='play-text'>
            <span>
              <MdOutlinePlayCircle fontSize={16}/>
            </span>
            Play Video

            </h3>
          </div>
          
        </div>
        </div>
        
        <div className="row below">
          <div className="col col-xxl-3 col-3">
            <p className='below-text'>230 childrens under our care </p>

          </div>
          <div className="col divide-line col-xxl-7 col-7 ">
            <hr className="divide" />
          </div>
          <div className="col col-xxl-2 col-2">
            <p className='below-text'>58 donations collected</p>
          </div>
        </div>
 

      </div>

   
    </div>
  


<div className="about-content">
  <div className="row">
    <div className="col col-xxl-1 col-6">
      <hr  className='about-title-line'/>
    </div>
    <div className="col col-6">
    <h3 className='about-title'>Know About us</h3>

    </div>
  </div>
  <div className="row">
    <div className="col content col-xxl-6 col-12"> 

<h1>We provide a place for children with special needs</h1>
<div className="para">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.

‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
</div>

<button className='learn-more'>Learn More</button>
</div>


    <div className="col   col-xxl-4 col-12">
      <img src={About} alt='about' className='about-img'/>
    </div>
  </div>
</div>



<div className=" supporter">
<div className="row">
  <div className="col col-xxl-2  col-xxl-1">
  <h3 className='support-title'>Our Supporters</h3>

  </div>
  <div className="col col-xxl-6">
    <hr/>
  </div>
</div>
<div className="row ">
<div className="col logo col-2 col-xxl-1">
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div>
  <div className="col logo col-2  col-xxl-1">
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div><div className="col logo col-2 col-xxl-1" >
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div><div className="col logo col-2 col-xxl-1" >   
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div><div className="col logo col-2 col-xxl-1">
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div><div className="col logo col-2 col-xxl-1">
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div>  
</div>
  
</div>

<div className="services">

  <div className="row">
    <div className="col col-xxl-3 col-6">
<hr />
    </div>
    <div className="col col-6">
    <h3 className='services-title'>What we do</h3>

    </div>
  </div>
  <div className="row">
  <div className="col col-12 col-xxl-6 " style={{border:"1px solid black"}}>
<h1 className='main-service-title'>Some services we provide for our children</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>

<div className="service">
  <h3 className='service-title'>Family support</h3>
  <p className='service-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
  <h3 className='service-title'>Health benefits</h3>
  <p className='service-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

  <h3 className='service-title'>Scholarships</h3>
  <p className='service-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

  <h3 className='service-title'>Therapy</h3>
  <p className='service-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

</div>
  </div>



  <div className="col  col-12 col-xxl-6">
<img src={Kid}  alt='service' className="service-img"/>
  </div>
  </div>
 
</div>

<div className="projects">
<div className="row project-card">
    <div className="col col-xxl-3 col-6 ">
<hr />

    </div>
    <div className="col col-6">
    <h3>Projects we have done</h3>
    </div>

  </div>
  <h1 className='project-title'>We are creating a place where children with special needs can thrive</h1>

  <div className="row">
    <div className="col col-12 col-xxl-4">
      <img src={Project1} alt='project' className='project'/>

  <div className="project-details">
    <h3 className='project-details-name'>Mission smile 1k: Outdoor charity</h3>
    <p className='project-details-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className='learnmore'>Learn More</button>
  </div>
    </div>
    <div className="col col-12 col-xxl-4">
      <img src={Project2} alt='project' className='project'/>
      <div className="project-details">
    <h3 className='project-details-name'>Weekly excursions</h3>
    <p className='project-details-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className='learnmore'>Learn More</button>
  </div>
    </div> <div className="col col-12 col-xxl-4">
    <img src={Project3} alt='project' className='project'/>

    <div className="project-details">
    <h3 className='project-details-name'>Monthly public awareness</h3>
    <p className='project-details-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
    <button className='learnmore'>Learn More</button>
  </div>    </div>
  </div>
</div>

<div className="donation-chart">
      <div className="row">
        <div className="col col-4 col-xxl-6">
          <div className="chart-content">
          <h5 className="donation-title">How we spend your donations and where it goes</h5>
          <p className="donation-para">
            We understand that when you make a donation, you want to know exactly where your money is going, and we pledge
            to be transparent.
          </p>
          </div>
         
        </div>
        <div className="col col-5 col-xxl-6 pie">
          <Pie data={data} key={Date.now()} options={options} className='pie'/>
        </div>
      </div>

      <div className="row-data">
        <div className="row">
        <div className="col col-3 ">
    <span className='color child-care-home'></span>
    <p>40% child care home</p>
  </div>
  <div className="col col-3">
    <span className='color cleanliness-program'></span>
    <p>35% cleanliness program</p>
  </div>
  <div className="col col-3">
    <span className='color helping-people'></span>
    <p>10% helping people</p>
  </div>
  <div className="col col-3">
    <span className='color excursions'></span>
    <p>10% excursions</p>
  </div>
  <div className="col col-3">
    <span className='color feeding-the-poor'></span>
    <p>5% feeding the poor</p>
  </div>
      </div>
      
        </div>
    
    </div>
    <div className="cta-image">
  <div className="row position-relative">
    <div className="col col-12 col-xxl-12">
      <img src={CTA} alt='cta' className='cta-img'/>
      <div className="cta-buttons">
      <h2 className='cta-title'>You can contribute to provide a place for children with special needs!</h2>

        <button className='cta-btn join'>Join As a Volunteer</button>
        <button className='cta-btn donate'>Donate</button>
      </div>
    </div>
  </div>
</div>


<div className="events">
<div className="row">
<div className="col col-xxl-2">
    <h3 className='event-title'>Our Events</h3>

    </div>
    <div className="col">
      <hr  className='event-title-line'/>
    </div>
   
  </div>  <div className="row">
  <div className="col event-card">
      <div className="date">
        <div className="row">
          <div className="col">
            <h1>19th</h1>
            <h3>Apr</h3>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="event-details">
          <div className="row">
            <div className="col">
              {/* Empty space on the left */}
            </div>
            <div className="col">
              <h3 className='title-event'>Next Events</h3>
            </div>
            <div className="col col-xxl-4">
              <hr  className='event-hr'/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        </div>
        <div className="col">
          <h2 className='event-name'>A day with our wonderful children</h2>
        </div>
        <div className="col">
          <div className="circle-icon">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
    <div className="col event-card">
      <div className="date">
        <div className="row">
          <div className="col">
            <h1>25th</h1>
            <h3>Apr</h3>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="event-details">
          <div className="row">
            <div className="col">
              {/* Empty space on the left */}
            </div>
            <div className="col">
              <h3 className='title-event'>Next Events</h3>
            </div>
            <div className="col col-xxl-4">
              <hr  className='event-hr'/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {/* Empty space on the left */}
        </div>
        <div className="col">
          <h2 className='event-name'>Seminar: Caring for children with autism</h2>
        </div>
        <div className="col">
          <div className="circle-icon">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
   </div>
       <Footer/>

    </>
  
  )
}

export default Home