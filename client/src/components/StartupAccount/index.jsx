import React from 'react'
import { Link } from "react-router-dom";
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGooglemeet } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { BiLinkAlt } from 'react-icons/bi';

import styles from "./styles.module.css";

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { MdEditSquare} from 'react-icons/md';
import NavbarS from '../Main';

// import  { useEffect, useState } from 'react';
// import axios from 'axios';

export const StartupAccount = () => {
  // const [startupProfiles, setStartupProfiles] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('/api/startup'); // Use the correct API endpoint for startup profiles
  //       setStartupProfiles(response.data);
  //     } catch (error) {
  //       console.error('Error fetching startup data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  return (
    <div>
    <NavbarS/>
    <Breadcrumb>
    
    <Breadcrumb.Item><Link to="/useraccount">User Profile</Link></Breadcrumb.Item>
    <Breadcrumb.Item active>Startup Profile</Breadcrumb.Item>
    </Breadcrumb>
    {/* <h1>This is Startup Profile Page </h1> */}
    {/* <Link to="/startup"><MdEditSquare/></Link> */}


    {/* {Array.isArray(startupProfiles) && startupProfiles.length > 0 ? (
        startupProfiles.map((startup) => (
          <div key={startup._id}> */}
            {/* <h2>Company Name: {startup.compname}</h2>
            <p>Email: {startup.email}</p>
            <p>Business Description: {startup.bdesc}</p> */}


            <div>
  
    <hr class="featurette-divider"/>
    <div class="container px-4 py-5">
    {/* <h2 class="pb-2 border-bottom">Features with title</h2> */}
    
    <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
      <div class="col d-flex flex-column align-items-start gap-2">
        <h2 class="fw-bold text-body-emphasis">Integration</h2>
        <Link to="/startup" style={{ fontSize: '20px',}}><MdEditSquare/></Link>
        <p class="text-body-secondary">Social Networking Site</p>
        <ul className={styles.icon_links}>
                <li>
                  <Link to="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJTNqGFPCBxzlQzcdSBChjqHgtRlQDSlNLsJhndjVslcVRDcdJPrztZjFBmRsDNDrFXVpPL"><FiMail /></Link>
                 </li>
                 <li>
                  <Link to="https://www.linkedin.com/in/aditya-salkar-9587aa230/"><FaLinkedinIn /></Link>
                 </li>
                <li>
                  <Link to="https://meet.google.com/"><SiGooglemeet /></Link>
                </li> 
                {/* <li>
                <Link to="/startup"><MdEditSquare/></Link>
                </li>  */}
              
        </ul>
        
      </div>

      <div class="col">
        <div class="row row-cols-1 row-cols-sm-2 g-4">
          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              {/* <svg class="bi" width="1em" height="1em">
                <use xlink:href="#collection"></use>
              </svg> */}
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Year Founded</h4>
            <p class="text-body-secondary">2003.</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              {/* <svg class="bi" width="1em" height="1em">
                <use xlink:href="#gear-fill"></use>
              </svg> */}
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Contact No</h4>
            <p class="text-body-secondary">11111111111</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              {/* <svg class="bi" width="1em" height="1em">
                <use xlink:href="#speedometer"></use>
              </svg> */}
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Website</h4>
            <p class="text-body-secondary"><BiLinkAlt/>patilandsons.com</p>
          </div>

          <div class="col d-flex flex-column gap-2">
            <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
              {/* <svg class="bi" width="1em" height="1em">
                <use xlink:href="#table"></use>
              </svg> */}
            </div>
            <h4 class="fw-semibold mb-0 text-body-emphasis">Address</h4>
            <p class="text-body-secondary">Kalpataru Square </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
    <div class="container marketing px-4 py-5">
      <div class="row">
        <div class="col-lg-4">
         
          <h4 class="fw-normal">Heading</h4>
          <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
          
        </div>
        <div class="col-lg-4">
          
          <h4 class="fw-normal">Heading</h4>
          <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        
        </div>
        <div class="col-lg-4">
          
          <h4 class="fw-normal">Heading</h4>
          <p>And lastly this, the third column of representative placeholder content.</p>
          
        </div>
    </div>


<hr class="featurette-divider"/>


<div class="row featurette">
  <div class="col-md-7">
    <h2 class="featurette-heading fw-normal lh-1">First featurette heading. <span class="text-body-secondary">It’ll blow your mind.</span></h2>
    <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
  </div>
  <div class="col-md-5">
    <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="400" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-bg)"></rect><text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em"></text></svg>
  </div>
</div>

<hr class="featurette-divider"/>

<div class="container px-4 py-5" id="hanging-icons">
    
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
        </div>
        <div>
          <h4 class="fs-2 text-body-emphasis">Target Market</h4>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          {/* <a href="#" class="btn btn-primary">
            Primary button
          </a> */}
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#cpu-fill"></use></svg> */}
        </div>
        <div>
          <h4 class="fs-2 text-body-emphasis">Customer Problem</h4>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          {/* <a href="#" class="btn btn-primary">
            Primary button
          </a> */}
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg> */}
        </div>
        <div>
          <h4 class="fs-2 text-body-emphasis">Sales/Marketing Strategy</h4>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          {/* <a href="#" class="btn btn-primary">
            Primary button
          </a> */}
        </div>
      </div>
    </div>
  </div>

<hr class="featurette-divider"/>

<div class="container px-4 py-5" id="hanging-icons">
   
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#toggles2"></use></svg> */}
        </div>
        <div>
          <h4 class="fs-2 text-body-emphasis">Business Model</h4>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          {/* <a href="#" class="btn btn-primary">
            Primary button
          </a> */}
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#cpu-fill"></use></svg> */}
        </div>
        <div>
          <h4 class="fs-2 text-body-emphasis">Major Competitors</h4>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          {/* <a href="#" class="btn btn-primary">
            Primary button
          </a> */}
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
          {/* <svg class="bi" width="1em" height="1em"><use xlink:href="#tools"></use></svg> */}
        </div>
        <div>
          <h4 class="fs-2 text-body-emphasis">Competetive Advantage</h4>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          {/* <a href="#" class="btn btn-primary">
            Primary button
          </a> */}
        </div>
      </div>
    </div>
  </div>


<hr class="featurette-divider"/>


<div class="container px-4 py-5" id="custom-cards">
   <h5>25 Jan 2023 To 06 Jun 2023 </h5>
   <p class="pb-2">Financial Desc </p>
   <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <div class="col">
       <div className="card border-secondary mb-3" style={{ maxWidth: '18rem' }}>
    <div className="card-body" style={{ textAlign: 'right' }}>
       <h1 className="card-title" style={{ fontSize: '2em', fontWeight: 'normal' }}>30%</h1>
       <p className="card-text">Revenues</p>
    </div>
    </div>
 </div>
 <div class="col">
    <div className="card border-secondary mb-3" style={{ maxWidth: '18rem' }}>
    <div className="card-body" style={{ textAlign: 'right' }}>
       <h1 className="card-title" style={{ fontSize: '2em', fontWeight: 'normal' }}>70%</h1>
       <p className="card-text">Expenditure</p>
    </div>
 </div>
</div>
<div class="col">
 <div className="card border-secondary mb-3" style={{ maxWidth: '18rem' }}>
 <div className="card-body" style={{ textAlign: 'right'}}>
       <h1 className="card-title" style={{ fontSize: '2em', fontWeight: 'normal' }}>40%</h1>
       <p className="card-text">Net</p>
  </div>
</div>
</div>
</div>

</div>
<hr class="featurette-divider"/>

</div>
    
  </div>
            
          </div>
      //   ))
      // ) : (
      //   <p>No startup profiles found.</p>
      // )}
    // </div>
    
  )
}

export default StartupAccount;
