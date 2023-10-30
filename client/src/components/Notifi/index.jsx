import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiSolidMessageEdit } from 'react-icons/bi';
import NavbarS from '../Main';
import axios from "axios";
export const Notifi = () => {

  const [formData, setFormData] = useState({
    sname: "",rname: "", msg: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/notifi"; 
      const response = await axios.post(url, formData);
      console.log("Message Send:", response.data);
      alert("Message Send")
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        console.error("Error Message Not Send:", error);
        alert("Message Not Send")
      }
    }
  };


  const [notifi, setnotifi] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/notifi'); 
        setnotifi(response.data);
      } catch (error) {
        console.error('Error fetching notfi data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
     <NavbarS />
        <div>


<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Notification Box</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div>
      Hi
      Add Notification/Message/Annoucement 
    </div>
    <div class="card card-body mt-2">
    <div className='container'>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label className="col-form-label">Sender:</label>
    <input type="text" name="sname" className="form-control" value={formData.sname} onChange={handleChange} id="sname" />
  </div>
  <div className="mb-3">
    <label className="col-form-label">Recipient:</label>
    <input type="text" name="rname" className="form-control" value={formData.rname} onChange={handleChange} id="rname" />
  </div>
  <div className="mb-3">
    <label className="col-form-label">Message:</label>
    <textarea name="msg" className="form-control" value={formData.msg} onChange={handleChange} id="msg"></textarea>
  </div>
  {error && <div >{error}</div>}
  <button type="submit" className="btn " style={{ backgroundColor: '#3bb19b' }}>Send message</button>
</form>
    </div>
    
  </div>
  </div>
</div></div>

<div className='container'>
{Array.isArray(notifi) && notifi.length > 0 ? (
          notifi.map((notifi) => (
  <div class="list-group list-group-checkable d-grid gap-2 border-0 pb-2">
    
    <label class="list-group-item rounded-3 py-3" for="listGroupCheckableRadios1">
    <p>{notifi.sname}</p> 
     
    <p>To:{notifi.rname}</p>
      <span class="d-block small opacity-50">{notifi.msg}</span>
    </label>

   
  </div>
   ))
   ) : (
     <p>No Message/Notification found.</p>
   )}
</div>

<div class="position-relative">
<div class="position-absolute bottom-0 end-0 mx-3">
<Link  data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
<div>
    
<BiSolidMessageEdit style={{ fontSize: '35px', color: '#3bb19b' }} />
     </div>
</Link>
</div>
</div>
        </div>
  )
}


export default Notifi;