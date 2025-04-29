import React from "react";
import { useState } from "react";
import hero from "../image/1.png";
import { CiShoppingCart, CiCalendar } from "react-icons/ci";
import { MdChevronRight } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Star } from "lucide-react";
import Footer from "./footer";
import Nav from "./nav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { EffectCoverflow, Pagination } from "swiper/modules";
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

  const latestArticles = [
    {
      title:
        "Best Cameras for Content Creators: DSLR vs. Mirrorless vs. Smartphone",
      date: "March 17, 2025",
    },
    {
      title: "The Best Smart Home Gadgets to Upgrade Your House",
      date: "March 17, 2025",
    },
    {
      title: "Top 10 Smartphones Under $500 in 2025",
      date: "March 17, 2025",
    },
    {
      title: "The Best Wireless Earbuds for Every Budget",
      date: "March 17, 2025",
    },
    {
      title: "MacBook Air M3 Review: Lightweight, Powerful, and Worth It?",
      date: "March 17, 2025",
    },
  ];

  const products = [
    {
      name: "Soma Slim XS Wood Top",
      description:
        "This amazing accent Pot is hand-crafted with a solid Stone and upper wood frame.",
      price: "$699.00",
      image:
        "https://img.freepik.com/free-photo/point-sale-machine-design-resource_53876-105925.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
    },
    {
      name: "Sculpture Coffee Table",
      description:
        "A triumph of minimalist design that combines natural and man made materials for a ...",
      price: "$503.10",
      image:
        "https://img.freepik.com/free-vector/conctacless-payment-background-design_23-2147692634.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
    },
    {
      name: "Tuber Large",
      description:
        "A simple, post-modern design that works well with a variety of styles.",
      price: "$113.89",
      image:
        "https://img.freepik.com/free-photo/close-up-baker-bakery-shop_23-2149233716.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
    },
    {
      name: "Soma L All Stone",
      description:
        "Experience modern art with this beautiful mid-century table.",
      price: "$237.00",
      image:
        "https://img.freepik.com/free-psd/3d-render-illustration-trolley-shopping-cart-isolated-icon_439185-10951.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
    },
  ];

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

  const client = [
    {
      main: "https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      sub: "https://img.freepik.com/free-photo/cheerful-young-family-with-child_171337-2371.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
    text:"Bhatbhateini"
    },

    {
      main: "https://img.freepik.com/premium-photo/human-hand-working-with-3d-rendering-cashier-machine_493806-1446.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      sub: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPLspAVOpnWLCMyomOGN17_KWuVajx4nSedw&s",
    },

    {
      main: "https://img.freepik.com/free-photo/high-angle-customer-paying-with-nfc-device_23-2150690008.jpg?uid=R25115437&ga=GA1.1.2040509304.1743746768&semt=ais_hybrid&w=740",
      sub: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVe7Tea7ijy8pHUjXTzdZ8sWRaL91wmL4hag&s",
    },
    {
      main: "https://img.freepik.com/free-photo/volunteer-scanning-food-donations-charity_23-2149230520.jpg?t=st=1745901732~exp=1745905332~hmac=e49e82f73d883f6cd71909bd57cf184859039d72561e8d8a990876ea9508a04c&w=996",
      sub: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/1706662924_bhatbhateni-1200x560_20240131134202.jpg",
    },

    {
      main: "https://img.freepik.com/free-photo/volunteer-scanning-food-donations-charity_23-2149230520.jpg?t=st=1745901732~exp=1745905332~hmac=e49e82f73d883f6cd71909bd57cf184859039d72561e8d8a990876ea9508a04c&w=996",
      sub: "https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/1706662924_bhatbhateni-1200x560_20240131134202.jpg",
    },
  ];

  const youtubeVideos = [
    {
      id: 1,
      title: "Video 1",
      videoId: "1CxAUPJlgos",
    },
    {
      id: 2,
      title: "Video 2",
      videoId: "YdqFa13Q1pg",
    },
    {
      id: 3,
      title: "Video 3",
      videoId: "dQw4w9WgXcQ", // Replace with real video IDs
    },
  ];

  const companies = [
    { name: "Microsoft", url: "https://logo.clearbit.com/microsoft.com" },
    { name: "Google", url: "https://logo.clearbit.com/google.com" },
    { name: "IBM", url: "https://logo.clearbit.com/ibm.com" },
    { name: "Amazon", url: "https://logo.clearbit.com/amazon.com" },
    { name: "Cisco", url: "https://logo.clearbit.com/cisco.com" },
  ];
  return (
    <div>
      <Nav />
      {/* hero section */}
      <div className="container mx-auto px-4 py-12 lg:px-16 md:py-28">
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
              className="absolute -top-16 sm:-top-20 md:-top-1/3 left-1/2 md:left-1/4 transform -translate-x-1/2 md:translate-x-0 w-48 sm:w-64 md:w-80 h-32 sm:h-48 md:h-64 z-10 rounded-full
               bg-[radial-gradient(circle,_#fefce8,_#fef9c3,_#fff)]
          blur-2xl opacity-90 "
            ></div>

            <img
              src={hero}
              alt=""
              className="absolute z-50 w-[50%] sm:w-[60%] md:w-[60%] -top-6 sm:-top-12 md:-top-1/8"
            />
          </div>
        </div>
      </div>

      {/* tailored solution for business */}
      <div className="bg-gradient-to-b from-white to-gray-300">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-sans text-gray-900">
              Tailored Solutions For Your Business
            </h1>
            <p className="text-green-600 font-medium mb-6 text-lg">
              Select an industry to explore our range of printing technology
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 px-4">
            {industry.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center text-center group cursor-pointer"
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-2 w-32 h-32 flex flex-col items-center justify-center border border-gray-100 hover:border-green-100">
                  <div className="text-4xl text-green-600 mb-3 group-hover:text-green-700 transition-colors">
                    {item.logo}
                  </div>
                  <span className="font-medium text-sm text-gray-700 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* featured product */}
      <div className="container mx-auto px-4 py-8 md:py-16 my-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold">Feature Product</h2>
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

      {/* mixmax */}
      <div className="bg-gray-900 text-white outline-2 outline-green-400">
        <div className="container mx-auto px-4 py-8 md:py-16  grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <h2 className="text-green-500 font-medium mb-4">LATEST BLOGS</h2>

              <div className="space-y-6">
                {latestArticles.map((article, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4">
                    <h3 className="font-bold mb-1">{article.title}</h3>
                    <p className="text-gray-400 text-sm">{article.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-5">
            <div className="relative h-96 mb-8">
              <img
                src="https://cdn.pixabay.com/photo/2017/10/13/15/39/printer-2847972_1280.jpg"
                alt="DSLR camera"
                className="w-full h-full object-cover rounded"
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Best Cameras for Content Creators: DSLR vs. Mirrorless vs.
                Smartphone
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel a
                quia veritatis animi neque saepe iure, placeat, magni in
                incidunt quas eligendi quam ad temporibus, consequatur
                blanditiis repellendus cupiditate id?
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <h2 className="text-green-500 font-medium mb-4 uppercase">
              Product Guide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/1CxAUPJlgos?si=ILHII0XaMYsIb3Vv"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>

              <div className="relative overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YdqFa13Q1pg?si=r2sj-S22RtYmqrqT"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>

              <div className="relative overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/1CxAUPJlgos?si=ILHII0XaMYsIb3Vv"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>

              <div className="relative overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YdqFa13Q1pg?si=r2sj-S22RtYmqrqT"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>

              <div className="relative overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/YdqFa13Q1pg?si=r2sj-S22RtYmqrqT"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>

              <div className="relative overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/1CxAUPJlgos?si=ILHII0XaMYsIb3Vv"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about us */}
      <div>
        <div className="container mx-auto px-4 py-12 md:py-12 relative">
          <div className="mb-12 text-center md:text-left">
            <div className="inline-block mb-6">
              <span className="text-emerald-600 font-medium tracking-wider">
                WHO WE ARE
              </span>
              <div className="w-3/4 h-0.5 bg-emerald-200 mt-2"></div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-green-900 font-bold mb-6 leading-tight">
              Crafting Excellence <br className="hidden md:block" /> Since
              ......
            </h1>

            <p className="text-gray-600 max-w-2xl mx-auto md:mx-0 text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
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

          <div className="flex flex-col md:flex-row gap-12 lg:gap-46 items-center ">
            <div className="w-full md:w-1/3 relative">
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
                Unmatched Quality <br className="hidden md:block" /> &
                Innovation
              </h2>

              <p className="text-gray-600 mb-8 text-lg leading-relaxed text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Inventore voluptates, placeat suscipit deleniti nihil magnam
                nobis ipsam consequuntur modi obcaecati distinctio sed doloribus
                quam eaque nesciunt velit commodi corporis est!
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
      </div>

      {/* latest collection */}
      <div className="bg-[#1E2939] outline-2 outline-green-400">
        <div className="container mx-auto px-4 py-8 md:py-16 my-12">
          <div className="text-sm font-medium text-emerald-600 uppercase tracking-wider">
            Latest
          </div>
          <div className="flex justify-between items-center pb-12">
            <h2 className="text-4xl font-bold text-white uppercase">
              Our Latest Collection
            </h2>
            <h2 className="text-sm font-medium text-emerald-600">See More ....</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h2 className="text-lg font-bold text-gray-800 group-hover:text-emerald-600 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 mt-2 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">
                      {product.price}
                    </span>
                    <button className="text-emerald-600 hover:text-emerald-800 font-medium text-sm transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* products at market */}
      <div className="container mx-auto px-4 mb-12 ">
        <h2 className="text-4xl font-bold uppercase pb-12">
          {" "}
          Products at market
        </h2>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper py-12"
        >
          {client.map((item, index) => (
            <SwiperSlide key={index} className="relative py-8 pb-24 ">
              <img src={item.main} alt="" className="rounded-lg w-full h-84" />
              <img
                src={item.sub}
                alt=""
                className="rounded-full w-42 h-42 absolute -translate-y-1/2 -right-4 outline-4 outline-white"
              />
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* trusted by brands  */}
      <div className="py-16 bg-gradient-to-t from-gray-500 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted By Industry Leaders
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 mx-auto mb-6"></div>
            <p className="text-lg text-white max-w-2xl mx-auto">
              We're proud to partner with organizations across various
              industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-center">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-center"
              >
                <img
                  src={company.url}
                  alt={company.name}
                  className="h-12 object-contain transition-all"
                />
              </div>
            ))}
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
                    <p className="mt-2 text-gray-400 italic">
                      "{testimonial.text}"
                    </p>
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

      <Footer />
    </div>
  );
};

export default Home;
