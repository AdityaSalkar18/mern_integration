import { useState } from "react";
import axios from "axios";

import styles from "./styles.module.css";

const Startup = () => {
  const [formData, setFormData] = useState({
    compname: "",eyear: "",cno: "",add: "", email: "", web: "", bio: "",mteam: "",bdesc: "",ps: "",tm: "",cp: "",sms: "",bm: "",mjc: "",cad: "",
    tp: "",fdesc: "",rev: "",expen: "",net: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/startup"; // Update the URL to your backend server running on port 8080
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
    <div className={styles.startup_container}>
      <form onSubmit={handleSubmit} className={styles.startup_form}>
        <input
          type="text"
          name="compname"
          placeholder="Company Name"
          value={formData.compname}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="eyear"
          placeholder="Year Founded"
          value={formData.eyear}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="number"
          name="cno"
          placeholder="Contact Number"
          value={formData.cno}
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
          name="add"
          placeholder="Address"
          value={formData.add}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="text"
          name="web"
          placeholder="Website Url"
          value={formData.web}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="bio"
          placeholder="Add Bio"
          value={formData.bio}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="mteam"
          placeholder="Managment Team"
          value={formData.mteam}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="btitle"
          placeholder="Business Title"
          value={formData.btitle}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="bdesc"
          placeholder="Business Description"
          value={formData.bdesc}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="ps"
          placeholder="Product/Services"
          value={formData.ps}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="tm"
          placeholder="Target Market"
          value={formData.tm}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="cp"
          placeholder="Customer Problem"
          value={formData.cp}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="sms"
          placeholder="Sales/Marketing Strategy"
          value={formData.sms}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="bm"
          placeholder="Business Model"
          value={formData.bm}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="mjc"
          placeholder="Major Copetitor"
          value={formData.mjc}
          onChange={handleChange}
          className={styles.input}
        />
        <textarea
          name="cad"
          placeholder="Copetitive Advantage"
          value={formData.cad}
          onChange={handleChange}
          className={styles.input}
        />
        <h1>Financial Status</h1>
        <textarea
          name="fdesc"
          placeholder="Financial Description"
          value={formData.fdesc}
          onChange={handleChange}
          className={styles.input}
        />
         <input
          type="string"
          name="tp"
          placeholder="Time Period"
          value={formData.tp}
          onChange={handleChange}
          className={styles.input}
        />
         <input
          type="number"
          name="rev"
          placeholder="Revenue"
          value={formData.rev}
          onChange={handleChange}
          className={styles.input}
        />
         <input
          type="number"
          name="expen"
          placeholder="Expenditures"
          value={formData.expen}
          onChange={handleChange}
          className={styles.input}
        />
         <input
          type="number"
          name="net"
          placeholder="Net"
          value={formData.net}
          onChange={handleChange}
          className={styles.input}
        />
        {error && <div className={styles.error_msg}>{error}</div>}
        <button type="submit" className={styles.green_btn}>
          Share Startup
        </button>
        
      </form>
    </div>
  );
};

export default Startup;

