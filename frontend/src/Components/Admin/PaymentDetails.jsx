
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = () => {
  const [payment, setPayment] = useState([]);

  useEffect(() => {
    const fetchPayment = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/getPayment`);
        setPayment(response.data);
      } catch (error) {
        console.error('Error fetching Payment Details:', error);
      }
    };

    fetchPayment();
  }, []);


  return (
    <div className="designlist">
      <h2>Payment List</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th> Order ID</th>
            <th>User ID </th>
            <th>Paid Amount</th>
            <th>PaymentStatus</th>
            {/* <th>Description</th>
            <th>Prize</th>
            <th>category</th> */}
          
          </tr>
        </thead>
        <tbody>
          {payment.map((payment) => (
            <tr key={payment._id}>
               <td>{payment.user}</td>
              <td>{payment._id}</td>
              <td>{payment.amount}</td>
              <td>{payment.paymentStatus}</td>
             
              <td>{payment.size}</td>
{/*              
              <td>{payment.price}</td>
              <td>{payment.category}</td> */}
             
              {/* <td>
                {design.designImage && (
                  <img src={design.designImage.url} alt="Design" style={{ width: '100px', height: 'auto' }} />
                )}
              </td> */}
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentList;
