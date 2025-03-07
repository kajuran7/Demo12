
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
const download = () => {
 
  return (
    
<div>
<Navbar/>

<div className="container" >
      <h2>Payment Successful</h2>
      <p>Your order might take some time to process.</p>
      <p>Check your order status After 10mins.</p>
      <p>
        Incase of any inqueries 
        <strong>contact Us</strong>
        <br/>
        <Link  className="btn btn-outline-dark" type="button"  to="/Download" >Ok</Link>
      </p>
</div>



</div>
  );
};
export default download;
