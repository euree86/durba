import React from "react";
import { useState } from "react";
import hero from "../image/1.png";
import { CiShoppingCart } from "react-icons/ci";
import { MdHealthAndSafety } from "react-icons/md";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Star } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Home = () => {
  // Move useState hook inside the component
  const [currentPage, setCurrentPage] = useState(0);

  const industry = [
    {
      logo: <CiShoppingCart />,
      title: "Retail",
    },
    {
      logo: <MdHealthAndSafety />,
      title: "Healthcare",
    },
    {
      logo: <MdHealthAndSafety />,
      title: "Manufacturing",
    },
    {
      logo: <MdHealthAndSafety />,
      title: "Food & Hospitality",
    },
    {
      logo: <MdHealthAndSafety />,
      title: "T & L",
    },
    {
      logo: <MdHealthAndSafety />,
      title: "Government",
    },
    {
      logo: <MdHealthAndSafety />,
      title: "RFID",
    },
  ];

  const articles = [
    {
      id: 1,
      title: "A guide to choosing smartphones with the best cameras",
      tag: "Featured",
      author: "John Doe",
      date: "3 Apr",
      image:
        "https://cdn.pixabay.com/photo/2014/04/05/11/29/scanner-315882_1280.jpg",
      span: "col-span-2 row-span-2",
    },
    {
      id: 2,
      title: "Foldable screen technology: a trend or the future?",
      tag: "Highlight",
      author: "John Doe",
      date: "9 Apr",
      image:
        "https://cdn.pixabay.com/photo/2020/01/14/08/56/eet-4764501_1280.jpg",
      span: "col-span-1",
    },
    {
      id: 3,
      title: "The advantages of the latest chipsets in smart watch",
      tag: "Editor Picks",
      author: "John Doe",
      date: "9 Apr",
      image:
        "https://cdn.pixabay.com/photo/2018/02/14/22/54/shopping-cart-3154095_1280.jpg",
    },
  ];

  const Trending = [
    {
      id: 1,
      image:
        "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      date: "April 10, 2025",
      category: "Trending",
      title: "I tried these headphones with my iPhone for a week (Infographic)",
    },
    {
      id: 2,
      image:
        "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      date: "April 10, 2025",
      category: "Trending",
      title: "Top drones compared: Which one deserves your sky time?",
    },
    {
      id: 3,
      image:
        "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      date: "April 10, 2025",
      category: "Trending",
      title: "The most popular smartwatch accessories this year",
    },
    {
      id: 4,
      image:
        "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      date: "April 10, 2025",
      category: "Trending",
      title: "Do you really need that touchscreen? We break it down",
    },
  ];

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    const maxPage = Math.ceil(articles.length / 4) - 1;
    setCurrentPage((prev) => (prev < maxPage ? prev + 1 : maxPage));
  };

  const latest = [
    {
      id: 1,
      category: "BUYING GUIDES",
      title:
        "Best Cameras for Content Creators: DSLR vs. Mirrorless vs. Smartphone",
      author: "Natalie Stanley",
      date: "March 17, 2025",
      image:
        "https://img.freepik.com/free-photo/close-up-scanning-box_23-2148923094.jpg?t=st=1745742270~exp=1745745870~hmac=83fc40ff1b6eca109186f8554ff1a8baf83fac2be3c24d95e16c99794cf23674&w=900",
      alt: "DSLR camera",
    },
    {
      id: 2,
      category: "BUYING GUIDES",
      title: "The Best Smart Home Gadgets to Upgrade Your House",
      author: "Natalie Stanley",
      date: "March 17, 2025",
      image:
        "https://img.freepik.com/free-photo/nurse-cutting-plastic-from-pouch-sealer-packaging-machinery_23-2147862118.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      alt: "Smart home tablet",
    },
    {
      id: 3,
      category: "REVIEWS",
      title: "Top 10 Smartphones Under $500 in 2025",
      author: "Natalie Stanley",
      date: "March 17, 2025",
      image:
        "https://img.freepik.com/premium-photo/female-online-business-owner-scan-shipping-label-parcel_1421-8127.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      alt: "Woman with smartphone",
    },
    {
      id: 4,
      category: "BUYING GUIDES",
      title: "The Best Wireless Earbuds for Every Budget",
      author: "Natalie Stanley",
      date: "March 17, 2025",
      image:
        "https://img.freepik.com/premium-photo/printer-check_253658-2875.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      alt: "Wireless earbuds and phone",
    },
    {
      id: 5,
      category: "REVIEWS",
      title: "MacBook Air M3 Review: Lightweight, Powerful, and Worth It?",
      author: "Natalie Stanley",
      date: "March 17, 2025",
      image:
        "https://img.freepik.com/premium-photo/barcode-scanner-blurred-image-supermarkets_39684-352.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      alt: "Macbook",
    },
    {
      id: 6,
      category: "REVIEWS",
      title: "Meta Quest 3 Review: The Best VR Headset for Gamers?",
      author: "Natalie Stanley",
      date: "March 17, 2025",
      image:
        "https://img.freepik.com/premium-photo/two-printer-check_253658-3655.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      alt: "Woman using VR headset",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    alert(`Thanks for subscribing! Name: ${name}, Email: ${email}`);
    e.target.reset();
  };
  // Move these functions inside the component

  const renderLatest = (latest) => (
    <div
      key={latest.id}
      className="flex mb-6 bg-white rounded-lg shadow-sm overflow-hidden"
    >
      <div className="w-1/3">
        <img
          src={latest.image}
          alt={latest.alt}
          className="h-46 w-full object-cover"
        />
      </div>
      <div className="w-2/3 p-4">
        <div className="text-sm text-green-600 font-medium mb-1">
          {latest.category}
        </div>
        <h3 className="text-lg font-bold mb-1">{latest.title}</h3>
        <div className="flex items-center text-gray-500 text-sm">
          <span>{latest.author}</span>
          <span className="mx-2">•</span>
          <span>{latest.date}</span>
        </div>
      </div>
    </div>
  );

  const testimonials = [
    {
      id: 1,
      text: "I am absolutely thrilled with the Smart Home Automation services provided by your company! The convenience and control I now have over my home is remarkable. It has truly transformed the way I live and made my daily routines so much easier.",
      name: "Jimmy Watts",
      position: "Businessman",
      avatar:
        "https://cdn.pixabay.com/photo/2021/06/23/16/54/woman-6359198_960_720.jpg",
      rating: 5,
    },
    {
      id: 2,
      text: "The app interface is incredibly intuitive and user-friendly. Being able to control my home's temperature, lighting, and security from anywhere has been a game-changer. I recommend this service to all my friends and family!",
      name: "Sarah Johnson",
      position: "Software Engineer",
      avatar:
        "https://cdn.pixabay.com/photo/2017/06/01/00/42/woman-2362130_1280.jpg",
      rating: 5,
    },
    {
      id: 3,
      text: "What impressed me most was the professional installation and ongoing customer support. The team was knowledgeable, efficient, and addressed all my questions. My smart home system has been running flawlessly for over a year now.",
      name: "Michael Chen",
      position: "Medical Doctor",
      avatar:
        "https://cdn.pixabay.com/photo/2022/06/27/02/22/woman-7286576_1280.jpg",
      rating: 5,
    },
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-2 py-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-gray-400 fill-gray-400"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* hero section */}
      <div className="container mx-auto px-4 py-8 lg:px-16 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 md:mt-24 relative">
          {/* Background Text - Hidden on small screens, adjusted on larger ones */}
          <h1
            className="hidden md:block absolute text-6xl lg:text-8xl xl:text-[10rem] font-bold text-green-800/10 top-0
          left-0 md:-translate-y-1/2 lg:-translate-y-3/5 lg:translate-x-2/3 translate-x-1/4  select-none pointer-events-none z-0"
          >
            ABRUD
          </h1>

          <div className="relative z-10 order-2 md:order-1 text-center md:text-left">
            {/* Foreground Content */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold font-serif tracking-wider md:tracking-widest text-green-800">
              DURBA
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-serif italic leading-relaxed text-emerald-700 md:px-16">
              The Labels
            </p>
            <p className="py-4 md:py-6 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore consequuntur laborum atque quaerat iste repudiandae
              assumenda dicta tempore, numquam iusto praesentium doloribus quas
              qui itaque dolorem eaque culpa dolorum nobis.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4 justify-center md:justify-start">
              <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-sm font-medium tracking-wide transition-all duration-300 transform hover:scale-105">
                Shop Collection
              </button>
              <button className="border border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-6 py-2 sm:px-8 sm:py-3 rounded-sm font-medium tracking-wide transition-all duration-300">
                Explore
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center relative order-1 md:order-2">
            <div className="rounded-t-full h-64 sm:h-80 md:h-96 w-[60%] sm:w-[70%] md:w-[80%] bg-gradient-to-b from-green-200 to-white"></div>
            <div
              className="absolute -top-16 sm:-top-20 md:-top-1/3 left-1/2 md:left-1/4 transform -translate-x-1/2 md:translate-x-0 w-48 sm:w-64 md:w-80 h-32 sm:h-48 md:h-64 z-50 rounded-full bg-[radial-gradient(circle,_#fefce8,_#fef9c3,_#fff)]
          blur-2xl opacity-90"
            ></div>

            <img
              src={hero}
              alt=""
              className="absolute z-50 w-[50%] sm:w-[60%] md:w-[60%] -top-6 sm:-top-12 md:-top-1/8"
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white via-[#fffbe0] to-white">
        <div className="container mx-auto px-4 py-8 md:py-20 ">
          {/* <div className="text-center py-12">
            <h1 className="text-4xl font-bold mb-2 font-sans">
              Tailored Solutions For Your Business
            </h1>
            <p className="text-green-600 mb-6">
              Select an industry to explore our range of printing technology
            </p>
          </div> */}

          <div className="flex justify-between px-6 flex-wrap relative group ">
            {industry.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 items-center text-center w-32 hover:text-green-600 transform scale-105 duration-300"
              >
                <div className="text-4xl  ">{item.logo}</div>
                <span className="font-medium text-sm ">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 auto-rows-[350px]">
          {articles.map((article) => (
            <div
              key={article.id}
              className={`relative bg-cover bg-center text-white p-6 flex flex-col justify-end rounded-md overflow-hidden shadow-lg ${
                article.span || ""
              }`}
              style={{ backgroundImage: `url(${article.image})` }}
            >
              <div className="absolute top-4 right-4 bg-white text-black text-sm px-2 py-1 rounded">
                {article.date}
              </div>
              <p className="text-sm">
                {article.tag} / {article.author}
              </p>
              <h2 className="text-lg font-bold">{article.title}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* about us */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="mb-12 text-center md:text-left">
          <div className="inline-block mb-6">
            <span className="text-emerald-600 font-medium tracking-wider">
              WHO WE ARE
            </span>
            <div className="w-3/4 h-0.5 bg-emerald-200 mt-2"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-green-900 font-bold mb-6 leading-tight">
            Crafting Excellence <br className="hidden md:block" /> Since ......
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
            <button className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900 font-medium group">
              <span>Watch our story</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-46 items-center mt-20">
          <div className="w-full md:w-1/2 relative">
            <div className="relative group">
              <img
                src="https://img.freepik.com/premium-photo/image-selfservice-kiosk-with-pos-interface-customers-place-orders_1314467-44445.jpg?w=740"
                alt="Modern kiosk interface"
                className="rounded-lg w-full h-auto shadow-xl transition-transform duration-500 group-hover:scale-95"
              />
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-2 border-emerald-200 rounded-lg group-hover:-bottom-3 group-hover:-right-3 transition-all duration-300"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="inline-block mb-6">
              <span className="text-emerald-600 font-medium tracking-wider">
                WHY CHOOSE US
              </span>
              <div className="w-1/2 h-0.5 bg-emerald-200 mt-2"></div>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-6 font-semibold leading-tight">
              Unmatched Quality <br className="hidden md:block" /> & Innovation
            </h2>

            <p className="text-gray-600 mb-8 text-lg leading-relaxed text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore voluptates, placeat suscipit deleniti nihil magnam nobis
              ipsam consequuntur modi obcaecati distinctio sed doloribus quam
              eaque nesciunt velit commodi corporis est!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Premium quality materials and craftsmanship
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Innovative designs that stand the test of time
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-emerald-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">
                  Exceptional customer service and support
                </p>
              </div>
            </div>

            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-sm font-medium tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-200">
              Our Products
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-sm font-medium text-gray-500 mb-4">
          ARTICLE OF THE DAY
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Trending Now</h2>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 border border-gray-300 rounded hover:bg-gray-100"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Trending.map((item) => (
            <div key={item.id} className="flex flex-col">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span>{item.date}</span>
                <span className="mx-2">/</span>
                <span>{item.category}</span>
              </div>
              <h3 className="text-xl font-bold hover:text-green-600 transition-colors cursor-pointer">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 ">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-full">
            <h2 className="text-2xl font-bold text-green-800 mb-6">
              Latest Articles
            </h2>

            {/* Latest Articles List */}
            {latest.map((item) => renderLatest(item))}
          </div>

          <div className="md:w-1/3">
            {/* Newsletter Form */}
            <div className="bg-gray-900 text-white p-6 mb-4 ">
              <h3 className="text-lg font-bold mb-4">
                Sign up our newsletter to get update information.
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full mb-2 p-3 rounded text-gray-800 bg-white focus:outline-none "
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full mb-4 p-3 rounded text-gray-800 bg-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="w-full p-3 bg-green-800 text-white font-medium rounded flex items-center justify-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  SIGN UP
                </button>
              </form>
            </div>

            {/* Advertisement */}
            <div className="mb-8">
              <div className="text-right text-xs text-gray-500 ">
                Advertisement
              </div>
              <div className="bg-white shadow-sm overflow-hidden">
                <div className="relative">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-vertical-poster-template-cyber-monday-sale_23-2150889020.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740"
                    alt="Advertisement"
                    className="w-full h-[32rem] "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent flex flex-col justify-end p-6">
                    <div className="text-white text-2xl font-bold mb-2">
                      ONLINE BUSINESS SOLUTION
                    </div>
                    <div className="w-1/2 h-1 bg-white mb-4"></div>
                    <p className="text-white text-xs mb-4">
                      Donec facilisis ullamcorper. Nullam varius felis sed
                      posuere. Cras mattis et congue dictum magna orci ultricies
                      tortor ut sollicitudin mauris. Quisque commodo tortor.
                    </p>
                    <button className="bg-gray-800 text-white text-xs py-2 px-4 inline-block">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row rounded-lg overflow-hidden h-[32rem]">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://img.freepik.com/free-photo/young-business-woman-checking-satisfaction-checklist-box-copy-space_1258-88647.jpg?t=st=1745744677~exp=1745748277~hmac=30359d4f0da939aff3b1b9c68a0ebf5797b6c648148544e3de1964cedbec976d&w=1380"
              alt="Person using smart home app"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Testimonial */}
          <div className="bg-gray-800 rounded-r-lg px-12 py-4">
            <h1 className="font-bold text-5xl text-white py-12">
              Real FeedBacks From Our Client
            </h1>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              slidesPerView={1}
              loop={true}
              className="w-full max-w-2xl mx-auto"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div>
                    <p className="mt-2 text-gray-400 italic">"{testimonial.text}"</p>
                    <StarRating rating={testimonial.rating} />
                    <div className="flex items-center mt-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="text-lg text-white font-bold">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-400 font-semibold">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
