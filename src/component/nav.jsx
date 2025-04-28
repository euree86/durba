import React from "react";
import { Link } from "react-router-dom";
import img from "../image/1.png";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export default function Navbar() {
  return (
    <nav className="w-full">
      {/* Logo */}
      <div className="mx-auto  px-4 py-2 sm:px-6 lg:px-36">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center">
            <img src={img} alt="" className="w-8" />
            <p className="font-medium text-normal text-center md:text-left">
              DNS Technology Pvt Ltd.
            </p>
          </div>

          <div className="w-full md:w-[300px] relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-8 py-1 rounded-lg bg-gray-200 text-gray-800 focus:outline-none"
            />
            <CiSearch className="absolute right-5 top-2.5 h-4 w-4 text-gray-500" />
          </div>

          <div className="flex flex-row gap-24 sm:gap-8">
            <div className="flex items-center gap-1">
              <IoIosCall />
              <span className="text-normal font-medium">9851155538</span>
            </div>

            <div className="flex items-center gap-1">
              <MdEmail />
              <span className="text-normal font-medium hidden sm:inline">
                info@dnstech.com.np
              </span>
              <span className="text-normal font-medium sm:hidden">Email</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 items-center   justify-between px-4 sm:px-6 lg:px-24 relative 
      bg-gradient-to-r from-[#D7FBE2] via-green-600 to-[#D7FBE2]">
        {/* Desktop Navigation - Centered */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <ul className="flex space-x-8">
            {/* Home */}
            <Link to="/home">
              <li className="py-6 text-white">Home</li>
            </Link>

            {/* About */}
            <Link to="/about">
              <li className="group relative z-50 py-6">
                <button className="flex items-center text-white transition-colors hover:text-gray-200">
                  About Us
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="pointer-events-none absolute top-full w-[1200px] -translate-x-80 transform 
                opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100
                  z-100">
                  <div className="overflow-hidden rounded-lg shadow-lg bg-white p-6 grid grid-cols-3 gap-6">
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">
                        Product Features
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Explore our product features
                      </p>
                    </a>
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">Pricing</p>
                      <p className="mt-1 text-sm text-gray-500">
                        View our pricing plans
                      </p>
                    </a>
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">Case Studies</p>
                      <p className="mt-1 text-sm text-gray-500">
                        See how others use our product
                      </p>
                    </a>
                  </div>
                </div>
              </li>
            </Link>

            {/* Product */}
            <Link to="/products">
              <li className="group relative perspective-[300px] z-50 py-6">
                <div className="flex items-center text-white transition-colors hover:text-gray-200">
                  Product
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div
                  className="pointer-events-none absolute top-full w-[1200px] -translate-x-64 transform
               rotate-x-[-90deg] origin-top transform-style-preserve-3d opacity-0 transition-all duration-500 ease-in-out
                group-hover:opacity-100 group-hover:rotate-x-0 group-hover:pointer-events-auto z-50"
                >
                  <div className="overflow-hidden rounded-lg shadow-lg bg-white p-6 grid grid-cols-3 gap-6">
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">Main Page</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Visit our homepage
                      </p>
                    </a>
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">About Us</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Learn about our company
                      </p>
                    </a>
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">Careers</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Join our team
                      </p>
                    </a>
                  </div>
                </div>
              </li>
            </Link>

            {/* Services*/}
            <Link to="/services">
              <li className="group relative perspective-[300px] z-50 py-6">
                <button className="flex items-center text-white transition-colors hover:text-gray-200">
                  Services
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="pointer-events-none absolute left-1/2 top-full w-[1200px] -translate-x-104 transform rotate-x-[-90deg] origin-top transform-style-preserve-3d opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:rotate-x-0 group-hover:pointer-events-auto z-50">
                  <div className="overflow-hidden rounded-lg shadow-lg bg-white p-6 grid grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        Categories
                      </h3>
                      <ul className="mt-4 space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900"
                          >
                            Men
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900"
                          >
                            Women
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900"
                          >
                            Kids
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900"
                          >
                            Accessories
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900">
                        Collections
                      </h3>
                      <ul className="mt-4 space-y-2">
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900"
                          >
                            Summer 2023
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900"
                          >
                            Winter Essentials
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-sm text-gray-500 hover:text-gray-900"
                          >
                            Bestsellers
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4">
                      <div className="font-medium text-gray-900">Featured</div>
                      <div className="mt-2 text-sm text-gray-500">
                        Check out our latest collection
                      </div>
                      <div className="mt-4 aspect-video w-full bg-gray-200 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </li>
            </Link>

            {/* What we do */}
            <Link to="/whatwedo">
              <li className="group relative perspective-[300px]  z-50 py-6">
                <button className="flex items-center text-white transition-colors hover:text-gray-200">
                  What we do
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="pointer-events-none absolute top-full w-[1200px] -translate-x-120 transform rotate-x-[-90deg] origin-top transform-style-preserve-3d opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:rotate-x-0 group-hover:pointer-events-auto z-50">
                  <div className="overflow-hidden rounded-lg shadow-lg bg-white p-6 grid grid-cols-3 gap-6">
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">
                        Product Features
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        Explore our product features
                      </p>
                    </a>
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">Pricing</p>
                      <p className="mt-1 text-sm text-gray-500">
                        View our pricing plans
                      </p>
                    </a>
                    <a href="#" className="rounded-lg p-3 hover:bg-gray-50">
                      <p className="font-medium text-gray-900">Case Studies</p>
                      <p className="mt-1 text-sm text-gray-500">
                        See how others use our product
                      </p>
                    </a>
                  </div>
                </div>
              </li>
            </Link>

            {/* Portfolio */}
            <Link to="/portfolio">
              <li className="group relative perspective-[300px] z-50 py-6">
                <button className="flex items-center text-white transition-colors hover:text-gray-200">
                  Portfolio
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="pointer-events-none absolute left-1/2 top-full w-[1200px] -translate-x-6/9 transform rotate-x-[-90deg] origin-top transform-style-preserve-3d opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:rotate-x-0 group-hover:pointer-events-auto z-50">
                  <div className="overflow-hidden rounded-lg shadow-lg bg-white p-6 grid grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <h3 className="text-base font-medium text-gray-900">
                        Recent Posts
                      </h3>
                      <a href="#" className="block">
                        <p className="font-medium text-gray-900">
                          How to get started
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Posted 2 days ago • 5 min read
                        </p>
                      </a>
                      <a href="#" className="block">
                        <p className="font-medium text-gray-900">
                          Tips and tricks
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Posted 1 week ago • 3 min read
                        </p>
                      </a>
                      <a href="#" className="block">
                        <p className="font-medium text-gray-900">
                          Latest updates
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Posted 2 weeks ago • 7 min read
                        </p>
                      </a>
                    </div>
                    <div className="col-span-2 bg-gray-50 p-4 rounded-md">
                      <h3 className="text-base font-medium text-gray-900">
                        Blog Categories
                      </h3>
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <a
                          href="#"
                          className="text-sm text-gray-500 hover:text-gray-900"
                        >
                          Tutorials
                        </a>
                        <a
                          href="#"
                          className="text-sm text-gray-500 hover:text-gray-900"
                        >
                          News
                        </a>
                        <a
                          href="#"
                          className="text-sm text-gray-500 hover:text-gray-900"
                        >
                          Guides
                        </a>
                        <a
                          href="#"
                          className="text-sm text-gray-500 hover:text-gray-900"
                        >
                          Case Studies
                        </a>
                      </div>
                      <div className="mt-4">
                        <a
                          href="/blog"
                          className="text-sm font-medium text-gray-900 hover:underline"
                        >
                          View all posts →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </Link>

            {/* Contact */}
            <li className="py-6">
              <a
                href="/contact"
                className="text-white transition-colors hover:text-gray-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-900 focus:outline-none"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu (hidden by default) */}
      <div className="lg:hidden hidden">
        <div className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="text-xl font-bold">Logo</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/shop"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Shop
                </a>
                <a
                  href="/product"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Product
                </a>
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </a>
                <a
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Blog
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
