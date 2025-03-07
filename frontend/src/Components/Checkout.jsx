import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useNavigate} from 'react-router-dom';
import Navbar from "./Navbar";

function Checkout() {
  const navigate = useNavigate(); // Add this line to get the history object

  const [cartDesigns, setCartDesigns] = useState([]);

  useEffect(() => {
    // Retrieve cart designs from local storage
    const storedCartDesigns = JSON.parse(localStorage.getItem('cartDesigns')) || [];
    setCartDesigns(storedCartDesigns);
  }, []);
  
  const removeCart = (designId) => {
    const updatedCartDesigns = cartDesigns.filter((design) => design.id !== designId);
    setCartDesigns(updatedCartDesigns);
    localStorage.setItem('cartDesigns', JSON.stringify(updatedCartDesigns));
  
  };

  const calculateTotalPrice = () => {
    return cartDesigns.reduce((total, design) => total + design.price, 0);
  };



  const handleToken = (token) => {
    
    const backendUrl = `${process.env.REACT_APP_BACKEND_URL}/api/payment`;
    const user = JSON.parse(localStorage.getItem("user"))
    const Designs = JSON.parse(localStorage.getItem('cartDesigns')) || [];
    fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Designs,
        user,
        token,
        amount: calculateTotalPrice() * 100,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Payment response:', data);

        navigate('/Success');
        // Handle success, e.g., update order status, redirect to success page
      })
      .catch((error) => {
        console.error('Payment failed:', error);
        navigate('/Checkout'); 
        // Handle failure, e.g., show error message to the user
      });
  };





  return (
    <div>
      <Navbar />

      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col"  style={{ Color: '#191d44' }}><h4><b>Shopping Cart</b></h4></div>
                <div className="col align-self-center text-right text-muted">{cartDesigns.length} items</div>
              </div>
            </div>

            {/* Render cart items */}
            {cartDesigns.map((design) => (
              <div key={design.id} className="row border-top border-bottom">
                <div className="row main align-items-center">
                  <div className="col-2"><img className="img-fluid" src={design.designImage.url} alt={design.name}  /></div>
                  <div className="col">
                    <div className="row text-muted">{design.category}</div>
                    
                    <div className="row">{design.name}</div>
                  </div>
                  <div className="col">
                    <button className="btn btn-danger btn-sm" onClick={() => removeCart(design.id)}>Remove</button>
                  </div>
                  <div className="col"> {design.price} <span className="close">RS</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4 summary">
            <div><h5><b>Summary</b></h5></div>
            <hr />
            <div className="row">
              <div className="col">ITEMS</div>
              <div className="col text-right">{cartDesigns.length} Designs</div>
            </div>


            <div className="row">
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">{calculateTotalPrice()} LKR</div>
            </div>
          
            {/* <div className="btn btn-primary btn-sm mr-2" totalPrice={calculateTotalPrice()} handlePayment={(token, amount) => handlePayment(token, amount)} style={{ backgroundColor: 'blue' }}>CHECKOUT</div> */}
            <StripeCheckout
              stripeKey="pk_test_51OpTDBSAE4qVD58Fve7SfCcTLU4NdPvExC1mtlGlPBB3zgRhHaDmevpJrBuk1UZd78Ocll7Y8ZcXVFhOWWNLgp6H00w56j0Z27"
              token={handleToken}
              amount={calculateTotalPrice() * 100} // Amount in cents
              name="PSDynamic"
              description="Payment for Designs"
              currency="LKR"
            >


              <button className="btn btn-primary btn-sm" style={{ backgroundColor:'Blue'}}>
                CHECKOUT
              </button>

            </StripeCheckout>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Checkout;
