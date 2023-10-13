import { useState } from "react";
import axios from "axios";

import styles from "./styles.module.css";

const Profile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    website: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/profile"; // Update the URL to your backend server running on port 8080
      const response = await axios.post(url, formData);
      console.log("Profile created:", response.data);
      // You can add logic to redirect or display a success message here
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        console.error("Error creating profile:", error);
      }
    }
  };
  

  return (
    <div className={styles.profile_container}>
      <form onSubmit={handleSubmit} className={styles.profile_form}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="bio"
          placeholder="Bio"
          value={formData.bio}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
          className={styles.input}
        />
        {error && <div className={styles.error_msg}>{error}</div>}
        <button type="submit" className={styles.green_btn}>
          Update Profile
        </button>
        
      </form>
    </div>
  );
};

export default Profile;
