import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";

export default function AdminSideBar(props) {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      }
    });
  }, []);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login", { replace: true });
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="sidebar ">
        <div className="scrollbar-inner sidebar-wrapper">
          <div className="user">
            <div className="photo border border-primary rounded-pill">
              <img src={`assets/img/profile4.jpg`} />
            </div>
            <div className="info">
              <a>
                <span>
                 Marco Gonzalez
                  <span className="user-level">Administrator</span>
                </span>
              </a>
            </div>
          </div>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/">
                <i className="la la-dashboard"></i>
                <p>Dashboard</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/medicalstocks">
                <i className="la la-ambulance"></i>
                <p>Medicine Stocks</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/equipment">
                <i className="la la-align-justify"></i>
                <p>Equipment</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/location">
                <i className="la la-sticky-note"></i>
                <p>Location</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
