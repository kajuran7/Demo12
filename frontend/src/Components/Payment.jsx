import React from 'react'

function Payment() {
  return (
    <div>
        
        <div className="payment"> 
  
  <form action="#"> 

      <div className="row"> 

        
          <div className="col"> 
              <h3 className="title">Payment</h3> 

              <div className="inputBox"> 
                 
           
              </div> 

              <div className="inputBox"> 
               
                  <input type="text" id="cardName" 
                         placeholder="Enter Your name" 
                         required/> 
              </div> 

              <div className="inputBox"> 
                  <label for="cardNum"> 
                        Credit Card Number: 
                    </label> 
                  <input type="text" id="cardNum" 
                         placeholder="1111-2222-3333-4444" 
                         maxlength="19" required/> 
              </div> 

              <div className="inputBox"> 
                  <label for="">Exp Month:</label> 
                  <select name="" id=""> 
                      <option value="">Choose month</option> 
                      <option value="January">January</option> 
                      <option value="February">February</option> 
                      <option value="March">March</option> 
                      <option value="April">April</option> 
                      <option value="May">May</option> 
                      <option value="June">June</option> 
                      <option value="July">July</option> 
                      <option value="August">August</option> 
                      <option value="September">September</option> 
                      <option value="October">October</option> 
                      <option value="November">November</option> 
                      <option value="December">December</option> 
                  </select> 
              </div> 


              <div className="flex"> 
                  <div className="inputBox"> 
                      <label for="">Exp Year:</label> 
                      <select name="" id=""> 
                          <option value="">Choose Year</option> 
                          <option value="2023">2023</option> 
                          <option value="2024">2024</option> 
                          <option value="2025">2025</option> 
                          <option value="2026">2026</option> 
                          <option value="2027">2027</option> 
                      </select> 
                  </div> 

                  <div className="inputBox"> 
                      <label for="cvv">CVV</label> 
                      <input type="number" id="cvv" 
                             placeholder="1234" required/> 
                  </div> 
              </div> 

          </div> 

      </div> 

      <input type="submit" value="Proceed to Checkout" 
             className="submit_btn"/> 
  </form> 

</div> 


        
    </div>
  )
}

export default Payment;



