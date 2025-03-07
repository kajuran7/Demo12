import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
    return(
<div>
<Navbar/>

<div className="container">
    <div className="content">
      <div className="image-box">
       <img src={require("../Components/assets/01.jpg")} alt=""/>
      </div>
    <form action="1">
      <div className="topic">Send us a message</div>
      <div className="input-box">
        <input type="text" required/>
        <label>Enter your name</label>
      </div>
      <div className="input-box">
        <input type="text" required/>
        <label>Enter your email</label>
      
      </div>
      <div className="input-box1">
        <input type="text" required/>
        <label>Enter your Message </label>
      
      </div>
      <div className="input-box">
        <input type="submit" value="Send Message"/>
      </div>
    </form>
  </div>
  </div>

</div>
    )
}
export default Contact;