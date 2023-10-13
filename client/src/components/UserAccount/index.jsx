import React from 'react'
import { Link } from "react-router-dom"; 
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {FaUserEdit} from  'react-icons/fa';
import NavbarS from '../Main';


// import  { useEffect, useState } from 'react';
// import axios from 'axios';

import styles from "./styles.module.css";


export const UserAccount = () => {

// export const UserAccount = ({ userId }) => {
  // const [profile, setProfile] = useState(null);

  // useEffect(() => {
  //   // Fetch user profile data upon login
  //   axios.get(`/api/userProfile/${userId}`)
  //     .then((response) => {
  //       setProfile(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [userId]);

 


  return (
    <div>
      <NavbarS/>
    <Breadcrumb>
    
    <Breadcrumb.Item active>User Profile</Breadcrumb.Item>
    <Breadcrumb.Item > <Link to="/startupaccount">Startup Profile</Link></Breadcrumb.Item>
    </Breadcrumb>
    {/* <h1>This is User Profile Page </h1> */}
    {/* <Link to="/profile"><FaUserEdit/></Link> */}


    

          
    <div className="container">
      <div className="row">
        <div className="col-lg-8 mb-4 mb-sm-5">
          <div className={`card ${styles.profilecard}`}>
            <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
            
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                 <img 
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="..."
                  />
                 <Link to="/profile"><FaUserEdit/></Link>
                </div>
                <div className="col-lg-6 px-xl-10">
                 
                  
                  <ul className="list-unstyled mb-1-9">
                    <li className="mb-3 mb-xl-3 display-28">
                      {/* <span className="display-26 text-secondary me-2 font-weight-600">
                        Position:
                      </span> */}
                      <h3 >
                      {/* {profile.name} */}
                      Aditya Salkar
                    </h3>
                    </li>
                    <li className="mb-2 mb-xl-3 display-28">
                    <span className="display-26 text-secondary me-2 font-weight-600">
                        Phone:
                      </span>
                      507 - 541 - 4567
                    </li>
                    
                    <li className="mb-3 mb-xl-3 display-28">
                      <span className="display-26 text-secondary me-2 font-weight-600">
                        Email:
                      </span>
                      {/* {profile.email} */}
                      adityasalkar@1806
                    </li>
                    <li className="mb-3 mb-xl-3 display-28">
                      <span className="display-26 text-secondary me-2 font-weight-600">
                        Website:
                      </span>
                      {/* {profile.website} */}
                      adityasalkar.com
                    </li>
                    <li className="display-28">
                      {/* <span className="display-26 text-secondary me-2 font-weight-600">
                        Phone:
                      </span>
                      507 - 541 - 4567 */}
                    </li>
                  </ul>
                  
                </div>
                
              </div>
              
              <div className="mt-4" >
              <span className="display-26 text-secondary me-2 font-weight-600"> Bio:</span>
               <p>no need</p>
              
             </div>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4 ">
      <div class="list-group">
      <div class="list-group-item list-group-item-action d-flex gap-2 py-3" aria-current="true">
     
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">My NetWork</h6>
        
        </div>
       <Link to="/mynetwork"> <small class="opacity-50 text-nowrap">ViewAll</small></Link>
      </div>
    </div>

      <Link to="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"/>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Third heading</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
        </div>
        <small class="opacity-50 text-nowrap">1w</small>
      </div>
    </Link>
    
    <Link to="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"/>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Third heading</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
        </div>
        <small class="opacity-50 text-nowrap">1w</small>
      </div>
    </Link>
    <Link to="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"/>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Third heading</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
        </div>
        <small class="opacity-50 text-nowrap">1w</small>
      </div>
    </Link>
    <Link to="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"/>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Third heading</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
        </div>
        <small class="opacity-50 text-nowrap">1w</small>
      </div>
    </Link>
    <Link to="#" class="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
      <img src="https://github.com/twbs.png" alt="twbs" width="32" height="32" class="rounded-circle flex-shrink-0"/>
      <div class="d-flex gap-2 w-100 justify-content-between">
        <div>
          <h6 class="mb-0">Third heading</h6>
          <p class="mb-0 opacity-75">Some placeholder content in a paragraph.</p>
        </div>
        <small class="opacity-50 text-nowrap">1w</small>
      </div>
    </Link>
  </div>
  </div>


        
      </div>
    </div>
                  
          </div>
     
   
   
  )
}

export default UserAccount;


