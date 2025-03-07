import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

const Signup = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
 
  const Registeruser = async (userData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {   
        throw new Error('Error Registration');
    
      }

      const data = await response.json();
      toast.success('Registration successful!');
      localStorage.setItem('user', JSON.stringify(data));

      
      navigate('/Home');
      return data;

    } catch (error) {
      console.error(error);
      toast.error('Registration Failed!');
    }
  };

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

   const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { name, email, password } = formState;

    // Basic name validation
    if (!name.trim()) {
      toast.error('Name is required');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }

    // Password length validation
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

  try {
     await Registeruser(formState);
  } catch (error) {
    console.error(error);
  }
};




  // LOGIN

  const [formState1, setFormState1] = useState({
    email: '',
    password: '',
  });

  const Loginuser = async (userData) => {
    try
     {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/login`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),


      });



      if (!response.ok) {
        throw new Error('Error Login');
      }

      const data = await response.json();
      toast.success('Login successful!',
      {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    localStorage.setItem('user', JSON.stringify(data));
    // Redirect based on user role
   
      navigate('/');
  
   
    return data;
  } catch (error) {
    console.error(error);
    toast.error('Login Failed!');
    navigate('/Register');
  }
};


  const handleInputChange1 = (event) => {
    setFormState1({
      ...formState1,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit1 = async (event) => {
    event.preventDefault();
    const { email, password } = formState1;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Invalid email address');
      return;
    }
  
    // Password length validation
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }
  
    try {
      await Loginuser(formState1);
    } catch (error) {
      console.error(error);
    }
  };

    return(
 
<div>
<Navbar   />
  <body className="LoginLL"/> 
<div className="container" 
style={{marginLeft:'400px',width:'1000px',}}>
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
        <img src={require("../Components/assets/Login2.png")} alt="login"/>
        <div className="text">
       
        </div>
      </div>

      <div className="back">
        <img className="backImg" src={require("../Components/assets/Login2.png")} alt="login"/>
        <div className="text">
        
      
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form onSubmit={handleFormSubmit1}>
             <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input name="email" value={formState1.email} onChange={handleInputChange1} 
                type="text" placeholder="Enter your email" required/>
              </div>

              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input  type="password" name='password' value={formState1.password}onChange={handleInputChange1}
                 placeholder="Enter your password" required/>
              </div>

              <div className="text">

              </div>
              <div className="button input-box">
                <input type="submit"  value="LOGIN"/>
              </div>
              <div className="text sign-up-text">Don't have an account? <label htmlFor="flip">Sigup now </label>
              </div>
            </div>
        </form>
      </div>




        <div className="signup-form">
          <div className="title">Signup</div>
        <form onSubmit={handleFormSubmit}  >

            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input name="name" value={formState.name} onChange={handleInputChange} 
                 type="text" placeholder="Enter your name" />
              </div> 
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input  name="email" value={formState.email} onChange={handleInputChange} 
                type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input name='password' value={formState.password} onChange={handleInputChange}
                 type="password"  placeholder="Enter your password" />
              </div>
              <div className="button input-box"> 
                <input   
                 type="submit" value="SIGNUP"/>
              </div>
              <div className="text sign-up-text">Already have an account? <label  htmlFor="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>

  </div>

    )
}
export default Signup;

