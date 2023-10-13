import React from "react";
import { Link } from "react-router-dom"; 
import styles from "./styles.module.css";
import { TbLogout2 } from 'react-icons/tb';
const NavbarS = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Integration</h1>
        <ul className={styles.nav_links}>
          {/* Add navigation links here */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/useraccount">Account</Link>
          </li>
          <li>
            <Link to="#">Notification</Link>
          </li>
          <li>
            <Link to="/mynetwork">MyNetwork</Link>
          </li>
          
        </ul>
        
        <button  className={styles.white_btn} onClick={handleLogout}>
         Logout<TbLogout2/>
        </button>
      </nav>
    </div>
  );
};

export default NavbarS;
