import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiGooglemeet } from 'react-icons/si';
import { FiMail } from 'react-icons/fi';
import axios from 'axios';
import NavbarS from '../Main';
import styles from './styles.module.css';

export const Home = () => {
  const [startupProfiles, setStartupProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/startup'); // Use the correct API endpoint for startup profiles
        setStartupProfiles(response.data);
      } catch (error) {
        console.error('Error fetching startup data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <NavbarS />
      <div className={styles.cardContainer}>
        {Array.isArray(startupProfiles) && startupProfiles.length > 0 ? (
          startupProfiles.map((startup) => (
            <Link to={`/startupview/${startup._id}`} key={startup._id} className={styles.link}>
              <Card style={{ width: '20rem', height: '350px' }} className={styles.card}>
                <Card.Img variant="top" style={{ height: '160px' }} src="https://source.unsplash.com/1600x600/?business" />
                <Card.Body>
                  <Card.Title>{startup.compname}</Card.Title>
                  <Card.Text>{startup.bdesc.length > 100 ? `${startup.bdesc.slice(0, 100)}...` : startup.bdesc}</Card.Text>

                  <ul className={styles.icon_links}>
                    <li>
                      <Link to="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=CllgCJTNqGFPCBxzlQzcdSBChjqHgtRlQDSlNLsJhndjVslcVRDcdJPrztZjFBmRsDNDrFXVpPL">
                        <FiMail />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.linkedin.com/in/aditya-salkar-9587aa230/">
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://meet.google.com/">
                        <SiGooglemeet />
                      </Link>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Link>
          ))
        ) : (
          <p>No startup profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
