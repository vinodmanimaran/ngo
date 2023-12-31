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

import { FaHeart, FaStethoscope, FaGraduationCap, FaComments } from 'react-icons/fa';

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

     <div className="container-fluid  home-page">


 
    <div className="row main-header">

      <div className="col header-img col-12 col-xxl-12 ">
      <img src={HeaderImg}  alt=""  className='home-header img-fluid'/>
        <div className="head-top">
        <h1 className='head-top-text'>Caring Together: A World of Love for Special Friends</h1>
        <div className="row">
          <div className="col col-5 col-xxl-2 col-xl-2">
          <button className='whatwedo'>What  we do</button>

          </div>
          <div className="col-5 play  col-xxl-2 mx-1  col-xl-2 my-2">
            
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
  <div className="row about-info">
    <div className="col col-xxl-1  col-xl-1 col-1" >
      <hr  className='about-title-line'/>
    </div>
    <div className="col col-1  col-xl-1 col-xxl-1">
    <h3 className='about-title'>Know About us</h3>

    </div>
  </div>
  <div className="row about-text">
    <div className="col content col-xxl-4 col-xl-4 col-12"> 

<h1 className='about-name'>We provide a place for children with special needs</h1>
<div className="para">
    <p>At our organization, we provide a nurturing and inclusive environment for children with special needs. Every child is unique, and our dedicated team is committed to fostering their growth, development, and happiness.</p>
    <p>We believe in the potential of every child and strive to create a place where they can learn, play, and thrive. Through personalized care and support, we aim to empower children to overcome challenges and discover their strengths.</p>
  </div>

<button className='learn-more'>Learn More</button>
</div>


    <div className="col   col-xxl-6  col-xl-6 col-12 about-image-box">
      <img src={About} alt='about' className='about-img' loading='lazy'/>
    </div>
  </div>
</div>



<div className=" supporter">
<div className="row">
  <div className="col-2 col-xxl-2   col-xl-1" >
  <h3 className='support-title'>Our Supporters</h3>

  </div>
  <div className="col-10 col-xxl-10 col-xl-10">
    <hr className='supporter-line'/>
  </div>
</div>
<div className="row supporters ">
<div className="col logo gx-1 col-1 col-xxl-2  col-xl-2">
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div>
  <div className="col logo col-1  col-xxl-2 col-xl-2">
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div><div className="col logo col-1 col-xxl-2 col-xl-2" >
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div><div className="col logo col-1 col-xxl-2 col-xl-2" >   
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div><div className="col logo col-1 col-xxl-2  col-xl-2 ">
    <img src={Logo} alt='suppporter' className='sup-logo'/>
  </div>
</div>
  
</div>

<div className="services">
  <div className="row">
    <div className="col col-xxl-1 col-xl-1 col-6" >
      <hr className='service-line'/>
    </div>
    <div className="col col-6 col-xl-10 col-xxl-10">
      <h3 className='services-title'>What we do</h3>
    </div>
  </div>

  <div className="row">
    <div className="col col-12 col-xl-4 col-xxl-6">
      <h1 className='main-service-title'>Empowering Children for a Brighter Future</h1>
      <p className='main-service-text'>Our organization is dedicated to providing comprehensive support and care for children, ensuring they have the resources and opportunities needed to thrive.</p>

      <div className="service">
        <h3 className='service-title'>
          <span className="icon-bg">
            <FaHeart />
          </span>
          Family Support
        </h3>
        <p className='service-text'>We offer assistance to families in need, fostering a supportive environment for children to grow and develop.</p>

        <h3 className='service-title'>
          <span className="icon-bg">
            <FaStethoscope />
          </span>
          Health Benefits
        </h3>
        <p className='service-text'>Ensuring the health and well-being of children through access to medical care and preventive health programs.</p>

        <h3 className='service-title'>
          <span className="icon-bg">
            <FaGraduationCap />
          </span>
          Scholarships
        </h3>
        <p className='service-text'>Providing educational opportunities with scholarships, empowering children to pursue their dreams and aspirations.</p>

        <h3 className='service-title'>
          <span className='icon-bg'><FaComments /></span>
          Therapy
        </h3>
        <p className='service-text'>Offering counseling and therapy services to address the emotional and psychological needs of children facing challenges.</p>
      </div>
    </div>

    <div className="col col-12 col-xl-8 col-xxl-6">
      <img src={Kid} alt='Happy Kids' className="service-img" />
    </div>
  </div>
</div>


<div className="projects">
<div className="row project-card">
    <div className="col  col-xxl-1 col-3 col-xl-1 " >
<hr  className='project-hr'/>

    </div>
    <div className="col col-9 col-xxl-11  col-xl-11 ">
    <h3>Projects we have done</h3>
    </div>

  </div>
  <h1 className='project-title '>We are creating a place where children with special needs can thrive</h1>

  <div className="row">
    <div className="col col-12 col-xl-4 col-xxl-4">
      <img src={Project1} alt='project' className='project'/>

      <div className="project-details">
    <h3 className='project-details-name'>Mission smile 1k: Outdoor charity</h3>
    <p className='project-details-para'>Support our cause to bring joy to a thousand faces through outdoor charity initiatives. Your contribution can make a significant impact in creating positive change within our community.</p>
    <button className='learnmore'>Learn More</button>
</div>

    </div>
    <div className="col col-12 col-xl-4 col-xxl-4">
      <img src={Project2} alt='project' className='project'/>
      <div className="project-details">
    <h3 className='project-details-name'>Weekly Excursions</h3>
    <p className='project-details-para'>
        Embark on a journey of discovery with our weekly excursions. 
        Whether it's exploring nature trails, visiting historical landmarks, 
        or enjoying cultural experiences, our excursions offer a blend of 
        adventure and learning for everyone. 
    </p>
    <button className='learnmore'>Learn More</button>
</div>

    </div> <div className="col col-12 col-xl-4 col-xxl-4">
    <img src={Project3} alt='project' className='project'/>

    <div className="project-details">
    <h3 className='project-details-name'>Monthly public awareness</h3>
    <p className='project-details-para'>
    Join us every month in raising awareness about crucial social issues. 
        Through engaging events, informative campaigns, and community involvement, 
</p>    <button className='learnmore'>Learn More</button>
  </div>    </div>
  </div>
</div>

<div className="donation-chart">
      <div className="row">
        <div className="col col-6 col-xl-6  col-xxl-6">
          <div className="chart-content">
          <h5 className="donation-title">How we spend your donations and where it goes</h5>
          <p className="donation-para">
            We understand that when you make a donation, you want to know exactly where your money is going, and we pledge
            to be transparent.
          </p>
          </div>
         
        </div>
        <div className="col col-5  col-xl-6 gx-1 pie-chart col-xxl-6 pie" >
          <Pie data={data} key={Date.now()} options={options} className='pie'/>
        </div>
      </div>

      <div className="row-data">
        <div className="row-data-text">
        <div className="col col-4 col-xxl-4">
    <span className='color child-care-home'></span>
    <p className='data-text'>40% child care home</p>
  </div>
  <div className="col col-4 col-xxl-4">
    <span className='color cleanliness-program'></span>
    <p className='data-text'>35% cleanliness program</p>
  </div>
  <div className="col col-4">
    <span className='color helping-people'></span>
    <p className='data-text'>10% helping people</p>
  </div>
  <div className="col col-4">
    <span className='color excursions'></span>
    <p className='data-text'>10% excursions</p>
  </div>
  <div className="col col-4">
    <span className='color feeding-the-poor'></span>
    <p className='data-text'>5% feeding the poor</p>
  </div>
      </div>
      
        </div>
    
    </div>
    <div className="cta-image">
  <div className="row ">
    <div className="col col-12 col-xl-12 col-xxl-12">
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
<div className="col-2 col-xxl-2 col-xl-2">
    <h3 className='event-title'>Our Events</h3>

    </div>
    <div className="col-10 col-xl-10 col-xxl-10">
      <hr  className='event-title-line'/>
    </div>
   
  </div>  <div className="row  event-cards">
  <div className="col col-6 col-xl-6 event-card">
      <div className="date">
        <div className="row">
          <div className="col ">
            <h1 className='date-event-no'>19th</h1>
            <h3 className='date-event-mon'>Apr</h3>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="event-details">
          <div className="row">
            <div className="col">
              {/* Empty space on the left */}
            </div>
            <div className="col col-12">
              <h3 className='title-event'>Next Events</h3>
            </div>
            <div className="col col-xxl-4 col-xl-4">
              <hr  className='event-hr'/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        </div>
        <div className="col col-10">
          <h2 className='event-name'>A day with our wonderful children</h2>
        </div>
        <div className="col">
          <div className="circle-icon">
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>

    <div className="col col-6 col-xl-6  event-card">
      <div className="date">
        <div className="row">
          <div className="col ">
            <h1 className='date-event-no'>19th</h1>
            <h3 className='date-event-mon'>Apr</h3>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="event-details">
          <div className="row">
            <div className="col">
              {/* Empty space on the left */}
            </div>
            <div className="col col-12">
              <h3 className='title-event'>Next Events</h3>
            </div>
            <div className="col col-xxl-4 col-xl-4">
              <hr  className='event-hr'/>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
        </div>
        <div className="col col-10">
          <h2 className='event-name'>A day with our wonderful children</h2>
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