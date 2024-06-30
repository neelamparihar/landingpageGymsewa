import React from "react";
import { NavLink } from "react-router-dom";
import logo1 from "../Assets/logo1.png";
import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import TypewriterEffect from "./TypewriterEffect";

const Home = () => {
  const res = [
    {
      text: "What",
    },
    {
      text: "Our",
    },
    {
      text: "Members",
    },
    {
      text: "Say",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-10 flex justify-between items-center  px-8 py-4 bg-orange-100 shadow-lg cursor-pointer">
        <div className="flex items-center">
          <NavLink
            to="/"
            className="flex justify-center items-center  rounded-full hover:shadow-lg transition duration-300"
          >
            <img src={logo1} alt="Logo" className="h-20 w-20" />
            <h1 className="text-3xl font-bold text-orange-600  rounded-full pr-3">
              GymSewa
            </h1>
          </NavLink>
        </div>
        <div className="flex items-center space-x-6 bg-orange-200 py-4 px-6 rounded-full font-medium text-xl hover:shadow-lg transition duration-300">
          <NavLink
            to="/about"
            className="hover:text-gray-700 transition duration-300"
            activeClassName="font-semibold"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-gray-700 transition duration-300"
            activeClassName="font-semibold"
          >
            Business Type
          </NavLink>
          <NavLink
            to="/pricing"
            className="hover:text-gray-700 transition duration-300"
            activeClassName="font-semibold"
          >
            Pricing
          </NavLink>
          <NavLink
            to="/resources"
            className="hover:text-gray-700 transition duration-300"
            activeClassName="font-semibold"
          >
            Resources
          </NavLink>
        </div>
        <div className="flex items-center space-x-6 font-medium text-xl">
          <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition duration-300">
            Login
          </button>
        </div>
      </nav>
      <div className="flex flex-row pt-10 px-8 mt-28">
        <div className="w-1/2 bg-orange-100 p-8 rounded-lg shadow-lg">
          <div className="flex justify-center items-center text-6xl font-semibold text-center py-12 px-8 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white shadow-lg rounded-lg">
            Everything you need to run your online Gym Business
          </div>

          <div className="flex items-center justify-center bg-orange-100 text-orange-500 text-xl mt-4 font-semibold py-4 italic">
            Transform your gym management effortlessly with our Gym SaaS
            solution. Our platform is tailored to streamline operations, enhance
            member engagement, and optimize your profits.Transform your gym
            management effortlessly with our Gym SaaS solution. Our platform is
            tailored to streamline operations, enhance member engagement, and
            optimize your profits.
          </div>

          <div className="flex items-center justify-center space-x-4 py-10">
            <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-105">
              Get a Demo
            </button>
            <button className="bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800 transition-transform duration-500 ease-in-out transform hover:scale-105">
              Join with us
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col space-y-8">
          <div className="flex justify-start">
            <img
              src={img1}
              alt="Gym"
              className="max-h-48 w-auto rounded-lg ml-8 shadow-md object-cover transition-transform duration-500 ease-in-out transform hover:rotate-12 origin-center"
            />
          </div>
          <div className="flex justify-end">
            <img
              src={img2}
              alt="Gym"
              className="max-h-48 w-auto rounded-lg mr-8 shadow-md object-cover transition-transform duration-500 ease-in-out  transform hover:-rotate-12 origin-center"
            />
          </div>
          <div className="flex justify-start">
            <img
              src={img3}
              alt="Gym"
              className="max-h-48 w-auto rounded-lg ml-8 shadow-md object-cover transition-transform duration-500 ease-in-out transform hover:rotate-12 origin-center"
            />
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="px-8 py-10 bg-gray-100">
        <h2 className="text-center text-3xl font-bold text-orange-600 pt-28">
          {/* What Our Members Say */}
          <TypewriterEffect words={res} />
        </h2>
        <div className="flex flex-col justify-center ite mt-6">
          <div className="bg-white shadow-lg p-6 m-4 rounded italic max-w-2xl">
            <p>
              "Joining GymSewa has transformed my fitness routine completely.
              The support and resources available are top-notch!" - Jane Doe
            </p>
            <p>
              We specialize in developing visually appealing and user-friendly
              gym SaaS platforms, streamlining operations with features like
              Membership Management, Billing and Payment Processing, Attendance
              tracking, and more. Additionally, we excel in presenting complex
              gym-related information in a clear and engaging manner through our
              infographics service.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 m-4 rounded italic max-w-2xl">
            <p>
              "Joining GymSewa has transformed my fitness routine completely.
              The support and resources available are top-notch!" - Jane Doe
            </p>
            <p>
              We specialize in developing visually appealing and user-friendly
              gym SaaS platforms, streamlining operations with features like
              Membership Management, Billing and Payment Processing, Attendance
              tracking, and more. Additionally, we excel in presenting complex
              gym-related information in a clear and engaging manner through our
              infographics service.
            </p>
          </div>
        </div>
      </div>
      <div className="px-8 py-28">
        <h2 className="text-center text-3xl font-bold text-orange-600">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4 mt-4">
          <div className="faq-item">
            <h3 className="font-bold text-xl">
              How do I sign up for a membership?
            </h3>
            <p>
              Signing up is easy! Visit our Pricing page, choose your plan, and
              follow the instructions.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="font-bold text-xl">
              How do I sign up for a membership?
            </h3>
            <p>
              Signing up is easy! Visit our Pricing page, choose your plan, and
              follow the instructions.
            </p>
          </div>
          <div className="faq-item">
            <h3 className="font-bold text-xl">
              How do I sign up for a membership?
            </h3>
            <p>
              Signing up is easy! Visit our Pricing page, choose your plan, and
              follow the instructions.
            </p>
          </div>
          {/* Repeat for other FAQ items as needed */}
        </div>
      </div>
      <div className="px-8 py-10 bg-orange-100">
        <h2 className="text-center text-3xl font-bold text-orange-600">
          Benefits of Using Our Gym Management System
        </h2>
        <ul className="list-disc space-y-2 mt-4 pl-10 text-lg text-gray-700">
          <li>
            Streamlined operations through automated scheduling and member
            management.
          </li>
          <li>
            Enhanced member engagement with tailored communication tools and
            mobile apps.
          </li>
          <li>
            Increased revenue with easy-to-use payment processing and financial
            tracking.
          </li>
          <li>
            Robust reporting features that provide actionable insights and
            data-driven decision-making.
          </li>
          <li>
            Streamlined operations through automated scheduling and member
            management.
          </li>
        </ul>
      </div>
      <div className="px-8 py-10 bg-white">
        <h2 className="text-center text-3xl font-bold text-orange-600">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="font-bold text-xl">Member Management</h3>
            <p>Manage all member information and track activity with ease.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="font-bold text-xl">Financial Tools</h3>
            <p>
              Access integrated billing, payment processing, and financial
              reporting tools.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="font-bold text-xl">Marketing Support</h3>
            <p>
              Automate and manage marketing campaigns to boost member
              acquisition and retention.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="font-bold text-xl">Marketing Support</h3>
            <p>
              Automate and manage marketing campaigns to boost member
              acquisition and retention.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="font-bold text-xl">Marketing Support</h3>
            <p>
              Automate and manage marketing campaigns to boost member
              acquisition and retention.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <h3 className="font-bold text-xl">Marketing Support</h3>
            <p>
              Automate and manage marketing campaigns to boost member
              acquisition and retention.
            </p>
          </div>
        </div>
      </div>
      <footer className="w-full bg-black text-white py-8">
        <div className="container mx-auto flex justify-around">
          <div>
            <h3 className="font-bold text-lg">GymSewa</h3>
            <p>Your complete solution for gym management.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">Explore</h3>
            <ul>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg">Connect</h3>
            <p>Follow us on social media</p>
            <p>Email us: contact@gymsewa.com</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
