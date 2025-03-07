import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Login from "../Components/assets/Login2.png";
import About from "../Components/assets/101.jpg"
import CoverImage from "../Components/assets/01.jpg"
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <section className="container relative flex flex-col lg:flex-row gap-16 lg:gap-0 justify-center lg:justify-between items-center w-[calc(100%-20px)] md:w-[calc(100%-60px)] lg:w-full min-h-[calc(100vh-100px)] lg:min-h-[calc(100vh-80px)]">
        <div className="lg:w-1/2 lg:h-full text-center lg:text-start">
          <h1 className="text-5xl md:text-[5rem] lg:text-[6rem] font-semibold text-primary leading-32">EVERYTHINGS WERE DESIGNED</h1>
          <p className="md:text-xl lg:text-3xl font-light md:leading-8 lg:leading-12">Photography is the art of capturing light with a camera,
            usually via a digital create an image,Saves designers time in crafting unique albums.
          </p>
          <div className="w-full flex justify-center lg:justify-start">
            <Link to="/Designs" className="relative top-8 h-10 w-48 bg-primary text-text font-semibold flex items-center justify-center rounded-md">See our designs</Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-end">
          < img src={Login} alt="" data-speed="-3" className="" />
        </div>
        <Link to="#about" className="animate-bounce absolute bottom-10 left-1/2 text-xl text-primary">
          <FaArrowDown />
        </Link>
      </section>
      <div>
        <section id="about" className="flex items-center justify-center">
          <div className="container flex items-center gap-16">
            <div className="w-1/2">
              <img src={About} alt="About"
                className="w-full img-fluid" />
            </div>
            <div className="w-1/2">
              <h3 className="text-5xl font-semibold text-primary leading-20">About Us</h3>
              <h1 className="">Who <b>We</b> Are</h1>
              <hr className="" />
              <p className="">
                Our templates are carefully crafted, saving the designers' significant hours of work.<br />
                Designers can easily access and customize these templates to create personalized albums efficiently.<br />
                Saves designers time in crafting unique album designs.<br />
                Provides customers with quick access to fashionable album templates.
                Eliminates the need for extended wait times to receive custom albums.

              </p>
              <span>
                <Link to="/Designs" className="btn btn-outline-dark">Get Started</Link>
              </span>
              <Link to="/Contact" className="btn btn-outline-dark">Contact Us</Link>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="content">
          <div className="image-box">
            <img src={CoverImage} alt="" />
          </div>
          <form action="1">
            <div className="topic">Send us a message</div>
            <div className="input-box">
              <input type="text" required />
              <label>Enter your name</label>
            </div>
            <div className="input-box">
              <input type="text" required />
              <label>Enter your email</label>

            </div>
            <div className="input-box1">
              <input type="text" required />
              <label>Enter your Message </label>

            </div>
            <div className="input-box">
              <input type="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;