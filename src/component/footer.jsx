import React from "react";
import img from "../image/1.png";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const productLinks = [
    { title: "Firewall Devices" },
    { title: "Network Cables" },
    { title: "CCTV and Surveillance" },
    { title: "Server and Network Rack" },
    { title: "Network Switches" },
    { title: "AP (Access Point Devices)" },
    { title: "Wireless Devices" },
    { title: "Servers and Computers" },
  ];

  const serviceLinks = [
    { title: "Hardware level Services" },
    { title: "Server and Computer Installation" },
    { title: "CCTV Installation" },
    { title: "Networking and Troubleshooting" },
    { title: "Firewall Configuration and Security" },
    { title: "Software and Application Services" },
    { title: "Server and Computer Installation" },
    { title: "CCTV Installation" },
    { title: "Networking and Troubleshooting" },
    { title: "Firewall Configuration and Security" },
  ];

  const whatToDoLinks = [
    { title: "Software Expertise" },
    { title: "Hardware Expertise" },
    { title: "Highlighted Success meter" },
  ];

  const portfolioLinks = [
    { title: "Recent Project" },
    { title: "View All Project" },
  ];

  const contactInfo = [
    { icon: <IoCall />, info: "9851155538" },
    {
      icon: <MdEmail />,
      info: "info@dnstech.com.np",
    },
    {
      icon: <FaLocationDot />,
      info: "Baneshwor,Kathmandu",
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook className="text-white text-xl" />,
      name: "Facebook",
      url: "https://www.facebook.com/dns.tech1",
    },
    {
      icon: <FaInstagram className="text-white text-xl" />,
      name: "Instagram",
      url: "https://www.instagram.com/dns_tech1/",
    },
    {
      icon: <FaLinkedin className="text-white text-xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/d-n-s-technolgoy-pvt-ltd/posts/?feedView=all",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 px-4 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={img}
                alt="DNS Technology Logo"
                className="w-12 h-12 mr-3"
              />
              <div className="font-bold text-4xl bg-gradient-to-r from-[#67B442] via-[#50B565] to-[#2F7255] bg-clip-text text-transparent">
                Durba Labels Center
              </div>
            </div>
            <p className="text-sm mb-6">
              Your trusted partner for comprehensive IT solutions and network
              infrastructure services.
            </p>

            {/* Newsletter */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-green-500 mb-3">
                Newsletter
              </h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border border-gray-700 bg-gray-900 px-4 py-2 text-sm rounded-l w-full focus:outline-none"
                />
                <button className="bg-[#357C57] hover:bg-green-600 text-white px-4 py-2 text-sm rounded-r transition duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg text-green-500 mb-3">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-8 h-8  hover:bg-green-600 rounded-full flex items-center justify-center transition duration-200"
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg text-green-500 mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-green-500 transition duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg text-green-500 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.slice(0, 6).map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-green-500 transition duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg text-green-500 mt-6 mb-4">
              Portfolio
            </h3>
            <ul className="space-y-2">
              {portfolioLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-green-500 transition duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & More */}
          <div>
            <h3 className="font-semibold text-lg text-green-500 mb-4">
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-green-500 transition duration-200"
                >
                  About DNS
                </a>
              </li>
              {whatToDoLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm hover:text-green-500 transition duration-200"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-lg text-green-500 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 mr-3 flex-shrink-0">{item.icon}</span>
                  <span className="text-sm">{item.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          <p className="text-gray-500">
            © {new Date().getFullYear()} DNS Technology Pvt. Ltd. All rights
            reserved. Powered by MoxCreative.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
