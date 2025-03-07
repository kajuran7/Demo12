
import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function DesignDetails() {

  const [design, setDesign] = useState(null);
  const { id } = useParams();
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the initial cart count from local storage
    const initialCartCount = JSON.parse(localStorage.getItem("cartDesigns"))?.length || 0;
    setCartCount(initialCartCount);
  }, []); // Empty dependency array ensures this useEffect runs only once when the component mounts

  const addToCart = () => {
    const cartDesigns = JSON.parse(localStorage.getItem('cartDesigns')) || [];

    // Check if the design is already in the cart
    const isDesignInCart = cartDesigns.some(item => item.id === design._id);

    if (!isDesignInCart) {
      // If the design is not in the cart, add it
      cartDesigns.push({
        id: design._id,
        name: design.name,
        price: design.price,
        designImage: design.designImage,
      });

      localStorage.setItem('cartDesigns', JSON.stringify(cartDesigns));
      setCartCount(cartCount + 1);

      toast.success(`${design.name} added to cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
   

      navigate('/Checkout'); // Change this to the actual path of your cart page
    } else {
      // If the design is already in the cart, provide a message or handle it accordingly
      toast.warning(`${design.name} is already in your cart.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    const fetchDesign = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/design/${id}`);
        setDesign(response.data);
      } catch (error) {
        console.error("Error fetching design data:", error);
      }
    };
    

    fetchDesign();
  }, [id,addToCart]);

  return (
    <>
    <Navbar cartCount={cartCount} />
    
    <section id="portfolio-details" className="portfolio-details">
     <div className="container">
       <div className="row gy-4">
         <div className="col-lg-8">
           <div className="portfolio-details-slider swiper">
             <div className="swiper-wrapper align-items-center">
               {design && (
                 <div className="swiper-slide">
                   <img src={design.designImage.url} alt={design.name} className="img-fluid" />
                 </div>
               )}
             </div>
             <div className="swiper-pagination"></div>
           </div>
         </div>
         <div className="col-lg-4">
           <div className="portfolio-info">
             <h2>{design ? design.name : "Design Details"}</h2>
             <ul>
               <li><strong>Description:</strong> {design && design.description}</li>
               <li><strong>Price:</strong> ${design && design.price}</li>
               <li><strong>Size:</strong> {design && design.size}</li>
               <li><strong>Sheet Size:</strong> {design && design.sheetsize}</li>
               <li><strong>Category:</strong> {design && design.category}</li>
             </ul>
           </div>
           <div className="portfolio-description">
             {design ? (
               
               <Link  className="btn btn-outline-dark" type="button" onClick={addToCart}>Add To Cart</Link>
             ) : (
               
               <p>Loading...</p>)}
        
           </div>
         </div>
       </div>
     </div>
    </section>
    </>
  );
}

export default DesignDetails;
