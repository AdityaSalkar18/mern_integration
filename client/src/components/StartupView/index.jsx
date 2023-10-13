import React from 'react'
import { Link, useParams } from "react-router-dom"; 
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGooglemeet } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import { BiLinkAlt } from 'react-icons/bi';
import { AiOutlineUsergroupAdd} from 'react-icons/ai';
import {useEffect , useState} from 'react';


import styles from "./styles.module.css";

export const StartupView = () => {
  const { id } = useParams(); 
  const [startup, setStartup] = useState({});
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/startup/${id}`); // Replace with your actual API route
        if (response.ok) {
          const data = await response.json();
          setStartup(data); // Update the state with the fetched startup data
        } else {
          // Handle error here
        }
      } catch (error) {
        // Handle network or other errors here
      }
    };
    fetchData();
  }, [id]);
return (
  <div>

  <div>
  <h1>StartupView</h1>
  <hr class="featurette-divider"/>
  <div class="container px-4 py-5">
  {/* <h2 class="pb-2 border-bottom">Features with title</h2> */}
  
  <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
    <div class="col d-flex flex-column align-items-start gap-2">
      <h2 class="fw-bold text-body-emphasis">{startup.compname}</h2>
    
      <p class="text-body-secondary">jhfsaihfisafas sahfoasofjop</p>
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
              <li>
                 <Link to="#"><AiOutlineUsergroupAdd /></Link>
               </li> 
            
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
          <p class="text-body-secondary">{startup.eyear}.</p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#gear-fill"></use>
            </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Contact No</h4>
          <p class="text-body-secondary">{startup.cno}</p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#speedometer"></use>
            </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Website</h4>
          <p class="text-body-secondary"><BiLinkAlt/>{startup.web}</p>
        </div>

        <div class="col d-flex flex-column gap-2">
          <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
            {/* <svg class="bi" width="1em" height="1em">
              <use xlink:href="#table"></use>
            </svg> */}
          </div>
          <h4 class="fw-semibold mb-0 text-body-emphasis">Address</h4>
          <p class="text-body-secondary">{startup.add}</p>
        </div>
      </div>
    </div>
  </div>
</div>
<hr class="featurette-divider"/>

  <div class="container marketing px-4 py-5">
    <div class="row">
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h4 class="fw-normal">Heading</h4>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h4 class="fw-normal">Heading</h4>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
      
      </div>
      <div class="col-lg-4">
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <h4 class="fw-normal">Heading</h4>
        <p>And lastly this, the third column of representative placeholder content.</p>
        
      </div>
  </div>


<hr class="featurette-divider"/>


<div class="row featurette">
<div class="col-md-7">
  <h2 class="featurette-heading fw-normal lh-1">{startup.btitle}</h2>
  <h5>{startup.ps}</h5>
  <p class="lead">{startup.bdesc}</p>
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
        <p>{startup.tm}</p>
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
        <p>{startup.cp}</p>
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
        <p>{startup.sms}</p>
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
        <p>{startup.bm}</p>
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
        <p>{startup.mjc}</p>
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
        <p>{startup.cad}</p>
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
 <p class="pb-2">{startup.fdesc} </p>
 <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
    <div class="col">
       <div className="card border-secondary mb-3" style={{ maxWidth: '18rem' }}>
    <div className="card-body" style={{ textAlign: 'right' }}>
       <h1 className="card-title" style={{ fontSize: '2em', fontWeight: 'normal' }}>{startup.rev}</h1>
       <p className="card-text">Revenues</p>
    </div>
    </div>
 </div>
 <div class="col">
    <div className="card border-secondary mb-3" style={{ maxWidth: '18rem' }}>
    <div className="card-body" style={{ textAlign: 'right' }}>
       <h1 className="card-title" style={{ fontSize: '2em', fontWeight: 'normal' }}>{startup.expen}</h1>
       <p className="card-text">Expenditure</p>
    </div>
 </div>
</div>
<div class="col">
 <div className="card border-secondary mb-3" style={{ maxWidth: '18rem' }}>
 <div className="card-body" style={{ textAlign: 'right'}}>
       <h1 className="card-title" style={{ fontSize: '2em', fontWeight: 'normal' }}>{startup.net}</h1>
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
  
)
}



export default StartupView;