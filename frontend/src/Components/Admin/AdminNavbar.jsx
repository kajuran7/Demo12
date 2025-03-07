// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"))
  const handleLogout = () => {
    // Perform logout actions (remove token, etc.)

    // Send a POST request to the server-side logout endpoint
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/logout`, {
      method: 'POST',
      credentials: 'include'
    })
      .then(response => {
        if (response.ok) {
          setTimeout(() => {
            toast.success("logout success")
          }, 5000);
          localStorage.removeItem('user');
          window.location.reload();
          window.location.href = '/';
        } else {
          throw new Error('Logout failed.');
        }
      })
      .catch(error => {
        console.error(error);
      });


    // Redirect to the Signup page
    navigate('/Signup');
  };
  return (
    <nav className='dashnav'>
      <Link to="/Admin" className="logo">Admin</Link>
      <ul className='mx-auto' >
        <li >
          <Link to="/">
            Home
          </Link>
        </li>
        <li><Link to="/Admin/userList">Users</Link></li>
        <li><Link to="/Admin/DesignsList">Designs</Link></li>
        <li><Link to="/Admin/Orders">Payment Details</Link></li>
        <li><Link to="/Admin/DesignForm"> Create Designs</Link></li>
     
      </ul>
      {/* Conditional rendering of Signup/Logout button */}
      {user ? (
        <button
          onClick={handleLogout}
          className="btn p-2 my-lg-0 my-2"
          style={{
            marginLeft: "50px",
            backgroundColor: "white",
            color: "rgb(14, 13, 61",
            fontSize: "20px",
            fontWeight: "600"
          }}
        >
        SignOut
        </button>
      ) : (
        <a
          href="Signup"
          className="btn p-2 my-lg-0 my-2"
          style={{
            marginLeft: "50px",
            backgroundColor: "white",
            color: "rgb(14, 13, 61",
            fontSize: "20px",
            fontWeight: "600"
          }}
        >SignIn
        </a>
      )}
    </nav>
  );
};

export default AdminNavbar;
