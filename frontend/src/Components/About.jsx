import React from "react"; 
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

const About = () => {
    return(
        <div> 
            <Navbar   />

            <div>
            <section id="about"style={{paddingTop:"100px"}}>
                <div className="container my-5 py-5" >
                    <div className="row">
                        <div className="col-md-6">
                    
                                  < img src={require("../Components/assets/101.jpg")} alt="About"
                            className="w-75 mt-5 img-fluid" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">About Us</h3>
                            <h1 className="display-6 mb-2">Who <b>We</b> Are</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">
{/* Welcome to our enchanting world of wedding album design, where creativity blends seamlessly with your love story. Our unique platform connects you with a talented pool of experienced designers, each specializing in the art of capturing the essence of your special day. Whether you envision a classic, romantic album or a modern, vibrant masterpiece, our designers are here to bring your dreams to life. With personalized consultations, exquisite layouts, and a commitment to perfection, we're dedicated to crafting a wedding album that reflects the beauty of your journey together. Join our creative community today and embark on a delightful journey towards preserving your cherished moWelcomements in a timeless, visually stunning album. Your love story deserves to be showcased in a way that is as extraordinary as the day itself.. */}

Our templates are carefully crafted, saving the designers' significant hours of work.<br/>
Designers can easily access and customize these templates to create personalized albums efficiently.<br/>
Saves designers time in crafting unique album designs.<br/>
Provides customers with quick access to fashionable album templates.
Eliminates the need for extended wait times to receive custom albums.

</p>
                           <span> <Link to="/Designs" className="btn btn-outline-dark">Get Started</Link> </span> 
                            <Link to="/Contact" className="btn btn-outline-dark">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>

</div>
)
}
export default About;