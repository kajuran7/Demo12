import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import PSDlImage from "../Components/assets/PSDl.png";
import { FaShoppingCart } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = user ? user.role : "";

  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  useEffect(() => {
    // Fetch the initial cart count from local storage
    const initialCartCount = JSON.parse(localStorage.getItem("cartDesigns"))?.length || 0;
    setCartCount(initialCartCount);
  }, [cartCount]);

  const handleLogout = () => {
    // Perform logout actions (remove token, etc.)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/users/logout`, {
      method: 'POST',
      credentials: 'include'
    })
      .then(response => {
        if (response.ok) {
          setTimeout(() => {
            toast.success("logout success");
          }, 3000);
          localStorage.removeItem('user');
          localStorage.removeItem('cartDesigns');
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
    navigate('/Register');
  };

  const handleMenuOpen = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true)
    } else {
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 left-0 z-[100] w-full shadow-lg h-20 flex justify-center items-center bg-primary text-text" id="navbar">
      <div className="container flex justify-between items-center w-full">
        <div className="flex gap-2 items-center">
          <img src={PSDlImage} alt="PSDynamic Logo" className="h-20 w-20" />
          <Link className="font-semibold text-2xl hidden md:block" to="/">PSDynamic</Link>
        </div>

        {/* <button
          className=""
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="1navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=""></span>
        </button> */}
        <div className="hidden lg:flex gap-8 items-center" id="navbarSupportedContent">
          <ul className="flex gap-8 items-center">
            <li className="">
              <Link className="" to="/">Home</Link>
            </li>
            <li className="">
              <Link className="" to="/About">About</Link>
            </li>
            <li className="">
              <Link className="" to="/Designs">Designs</Link>
            </li>
            <li className="">
              <Link className="" to="/Contact">Contact Us</Link>
            </li>
            <li className="">
              <Link style={{ textDecoration: "none" }} to="/Checkout" className="flex relative">
                <FaShoppingCart className="text-xl" />
                <span className="absolute -top-2 -right-3 bg-red-500 h-4 w-4 flex justify-center items-center text-white rounded-lg">{cartCount}</span>
              </Link>
            </li>
            {role === "admin" && (
              <li className="">
                <Link className="" to="/Admin">Dashboard</Link>
              </li>
            )}
          </ul>

          {user ? (
            <button
              onClick={handleLogout}
              className="bg-text text-primary font-semibold h-10 w-28 flex justify-center items-center rounded-md"
            >
              SignOut
            </button>
          ) : (
            <a
              href="Register"
              className="bg-text text-primary font-semibold h-10 w-28 flex justify-center items-center rounded-md"
            >
              SignIn
            </a>
          )}
        </div>

        {
          !isMenuOpen ? (
            <div className="h-12 w-12 flex lg:hidden justify-center items-center">
              <LuMenu className="text-2xl h-8 w-8" onClick={handleMenuOpen} />
            </div>
          ) : (
            <div className="">
              <div className="h-12 w-12 flex lg:hidden justify-center items-center">
                <IoClose className="text-2xl h-8 w-8" onClick={handleMenuOpen} />
              </div>
              <div className="absolute top-full right-0 flex flex-col items-center md:items-end justify-center md:justify-start gap-8 w-full md:w-1/3 min-h-screen bg-primary/80 backdrop-blur-sm">
                <ul className="md:relative md:top-8 md:right-8 flex flex-col gap-8 items-center md:items-end">
                  <li className="">
                    <Link className="" to="/">Home</Link>
                  </li>
                  <li className="">
                    <Link className="" to="/About">About</Link>
                  </li>
                  <li className="">
                    <Link className="" to="/Designs">Designs</Link>
                  </li>
                  <li className="">
                    <Link className="" to="/Contact">Contact Us</Link>
                  </li>
                  <li className="">
                    <Link style={{ textDecoration: "none" }} to="/Checkout" className="flex relative">
                      Cart
                      <span className="absolute -top-2 -right-3 bg-red-500 h-4 w-4 flex justify-center items-center text-white rounded-lg">{cartCount}</span>
                    </Link>
                  </li>
                  {role === "admin" && (
                    <li className="">
                      <Link className="" to="/Admin">Dashboard</Link>
                    </li>
                  )}
                </ul>

                {user ? (
                  <button
                    onClick={handleLogout}
                    className="md:relative md:top-8 md:right-8 bg-text text-primary font-semibold h-10 w-28 flex justify-center items-center rounded-md"
                  >
                    SignOut
                  </button>
                ) : (
                  <a
                    href="Register"
                    className="md:relative md:top-8 md:right-8 bg-text text-primary font-semibold h-10 w-28 flex justify-center items-center rounded-md"
                  >
                    SignIn
                  </a>
                )}
              </div>
            </div>
          )
        }



        {/* Mobile Screen */}
      </div>
    </nav>
  );
};

export default Navbar;