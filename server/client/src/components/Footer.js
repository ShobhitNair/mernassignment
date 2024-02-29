import React, { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";
import axios from "axios";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please provide your email address.");
      return;
    }
    try {
      const response = await axios.post(`${window.location.origin}/api/subscribe`, { email });
      if (response.status === 201) {
        setMessage("Subscription successful");
        setEmail(""); 
      } else {
        setMessage("Server error hai");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("Server error");
    }
  };
  return (
    <div className="bg-dark-blue mt-6">
      <div className="flex justify-evenly p-4">
        <div className="m-6 ">
          <h1 className="text-white text-3xl font-bold">
            XYZ{" "}
            <span className="italic text-white font-light text-3xl">
              INDUSTRIES
            </span>
          </h1>
          <h6 className="text-gray text-xs py-7">
            XYZ Industries: Where real estate dreams<br></br>meet seamless
            transactions, transforming<br></br>aspirations into achievements.
          </h6>
          <button className="text-white border-2 border-white rounded-3xl flex px-7 py-2">
            <span>Explore</span>
            <HiArrowRight className="m-1 ml-2" />
          </button>
        </div>
        <div className="m-6">
          <h1 className="text-white font-bold pb-2">Quick Links</h1>
          <h6 className="text-gray text-sm">About Us</h6>
          <h6 className="text-gray text-sm">Blog</h6>
          <h6 className="text-gray text-sm">Testimonials</h6>
          <h6 className="text-gray text-sm">Terms and Conditions</h6>
          <h6 className="text-gray text-sm">Privacy Policy</h6>
          <h6 className="text-gray text-sm">Site Map</h6>
        </div>
        <div className="m-6">
          <h1 className="text-white font-bold pb-2">Customer Support</h1>
          <h6 className="text-gray text-sm">Feedback</h6>
          <h6 className="text-gray text-sm">Report a Problem</h6>
          <h6 className="text-gray text-sm">Request a Call Back</h6>
        </div>
        <div className="m-6">
          <h1 className="text-white font-bold pb-2">Subscribe Us</h1>
          <h6 className="text-gray text-sm pb-2">
            Subscribe to our weekly newsletter
          </h6>
          <form onSubmit={handleSubmit} >
            <input
              className="p-2 px-14 rounded-lg mb-3"
              type="email"
              placeholder="Email Id"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <button className="bg-light-blue text-white p-2 px-28 rounded-lg " type='submit'>
              Subscribe
            </button>
          </form>
          {message && <p className="text-white">{message}</p>}
        </div>
      </div>
      <hr className="border-white h-0 w-11/12 mx-12" />
      <div className="flex justify-between ">
        <div className="p-5 pb-20 flex">
          <FaYoutube className="text-white ml-10 " />
          <FaTwitter className="text-white ml-2" />
          <FaInstagram className="text-white ml-2" />
          <FaFacebook className="text-white ml-2" />
        </div>
        <div className="flex mr-32 p-4">
          <h1 className="text-gray ml-10">Terms | Privacy</h1>
          <h1 className="flex text-gray ml-10">
            <FaRegCopyright className="ml-4 my-1 text-gray" />
            2024 XYZ
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
