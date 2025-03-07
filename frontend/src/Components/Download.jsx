

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DownloadPage = ({ match }) => {
//   const [order, setOrder] = useState(null);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const response = await axios.get(`/api/orders/${match.params.orderId}`);
//         setOrder(response.data);
//       } catch (error) {
//         console.error('Error fetching order:', error);
//       }
//     };

//     fetchOrder();
//   }, [match.params.orderId]);

//   return (
//     <div className="download-page">
//       <h1>Your Download Page</h1>
//       {order ? (
//         <div>
//           <p>Order ID: {order._id}</p>
//           <p>Payment Status: {order.paymentStatus}</p>
//           <h2>Designs:</h2>
//           <ul>
//             {order.designs.map((design) => (
//               <li key={design.design._id}>



// </li>
//             ))}
//           </ul>
//           {order.paymentStatus === 'paid' && (
//             <div>
//               <p>Download Here </p>
//               {/* Render download links for each design */}
//             </div>
//           )}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default DownloadPage;



import React, { useState, useEffect } from 'react';

import Navbar from "./Navbar";

function Checkout() {
  const [cartDesigns, setCartDesigns] = useState([]);

  useEffect(() => {
    // Retrieve cart designs from local storage
    const storedCartDesigns = JSON.parse(localStorage.getItem('cartDesigns')) || [];
    setCartDesigns(storedCartDesigns);
  }, []);
  
  const handleDownload = (design) => {
    // Implement your download logic here, e.g., open a new window or initiate a download
    console.log('Downloading design:', design);
    // You can replace the console.log with your actual download logic
  };










  return (
    <div>
      <Navbar />

      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col"  style={{ Color: '#191d44' }}><h4><b>Download </b></h4></div>
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
                    <button className="btn btn-primary btn-sm" style={{ backgroundColor: 'blue' }}  onClick={() => handleDownload(design)}>Downlod</button>
                  </div>
                  <div className="col"> {design.price} <span className="close">RS</span></div>
                </div>
              </div>
            ))}
          </div>


          
            {/* <div className="btn btn-primary btn-sm mr-2" totalPrice={calculateTotalPrice()} handlePayment={(token, amount) => handlePayment(token, amount)} style={{ backgroundColor: 'blue' }}>CHECKOUT</div> */}
       
          </div>
        </div>
       
      </div>
  
  );
}

export default Checkout;




