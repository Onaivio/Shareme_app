import React, { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
// import { AiFillCloseCircle } from "react-icons/ai";
import { Routes, Route, Link } from "react-router-dom";
import { Sidebar, Login, UserProfile } from "../components/index";
import logo from "../assets/logo.png";
// import Pins from "./Pins"
import client from '../client'
import { userQuery } from "../utils/data";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState();
  const scrollRef = useRef(null);

  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear();

  useEffect(() => {
    const query = userQuery(userInfo?.googleId)

    client.fetch(query)
    .then((data) => {
      setUser(data[0])
    })
  }, [])
  

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu 
        fontSize={40}
        className="cursor-pointer" />
        <Link to="/">
          <img src={logo} alt="" className="w-28" />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt="" className="w-28" />
        </Link>
      </div>
      home
    </div>
  );
};

export default Home;
