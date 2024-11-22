import "../style/service.css";
import React from "react";
import { FaCode } from "react-icons/fa6";
import { GrGamepad } from "react-icons/gr";
import { RiImageEditLine } from "react-icons/ri";
import { RiVideoAddLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineCamera } from "react-icons/hi2";

const Service = () => {
  return (
    <main className="main">
      <div className="container">
        {/* upper div */}
        <div className="upper">
            <h2 className="title">Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi quam laboriosam corrupti. Deleniti, minus, doloremque earum nobis similique harum consequuntur consectetur Perferendis, at voluptatem?</p>
        </div>
        {/* bottom div */}
        <div className="dabba">
            <div className="box">
                <FaCode className="icons"/>
                <h3>Web Development</h3>
                <span>E-Commerce, Websites </span>
            </div>
            <div className="box">
                <GrGamepad className="icons"/>
                <h3>Game Development</h3>
                <span>Story Mode, Fighting ETC. </span>
            </div>
            <div className="box">
                <RiVideoAddLine className="icons"/>
                <h3>Video Editing</h3>
                <span>Long/Shorts Edits</span>
            </div>
            <div className="box">
                <RiImageEditLine className="icons"/>
                <h3>Graphic Designs</h3>
                <span>Thumbnails, Logo, Banners ETC </span>
            </div>
            <div className="box">
                <HiOutlineCamera className="icons"/>
                <h3>PhotoGraphy</h3>
                <span>Wedding, Birthdays And More. </span>
            </div>
            <div className="box">
                <IoIosAdd className="icons"/>
                <h3>Advertisement</h3>
                <button className="btn00">Buy Now</button>
            </div>
          

        </div>
      </div>
    </main>
  );
};

export default Service;
