import React, { useState } from "react";
import hero from "../image/1.png";
import { CiShoppingCart } from "react-icons/ci";
import { MdHealthAndSafety } from "react-icons/md";
import { ArrowLeft, ArrowRight } from "lucide-react"; // Make sure this package is installed

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
      span: "col-span-1 row-span-2",
    },
    {
      id: 2,
      title: "Foldable screen technology: a trend or the future?",
      tag: "Highlight",
      author: "John Doe",
      date: "9 Apr",
      image:
        "https://cdn.pixabay.com/photo/2020/01/14/08/56/eet-4764501_1280.jpg",
      span: "col-span-2",
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
    {
      id: 4,
      title: "Must-have apps to maximize a new smartphone",
      tag: "Editor Picks",
      author: "John Doe",
      date: "9 Apr",
      image:
        "https://cdn.pixabay.com/photo/2016/11/09/23/44/saito-1-1813135_1280.jpg",
    },
  ];

  const Trending = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      date: "April 10, 2025",
      category: "Trending",
      title: "I tried these headphones with my iPhone for a week (Infographic)"
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      date: "April 10, 2025",
      category: "Trending",
      title: "Top drones compared: Which one deserves your sky time?"
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      date: "April 10, 2025",
      category: "Trending",
      title: "The most popular smartwatch accessories this year"
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      date: "April 10, 2025",
      category: "Trending",
      title: "Do you really need that touchscreen? We break it down"
    }
    
  ];

  // Move these functions inside the component
  const handlePrev = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    const maxPage = Math.ceil(articles.length / 4) - 1;
    setCurrentPage(prev => (prev < maxPage ? prev + 1 : maxPage));
  };

  return (
    <div>
      {/* hero section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
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

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-2 font-sans">
            Tailored Solutions For Your Business
          </h1>
          <p className="text-green-600 mb-6">
            Select an industry to explore our range of printing technology
          </p>
        </div>

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

      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="text-sm font-medium text-gray-500 mb-4">ARTICLE OF THE DAY</div>
          
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
            {Trending.map(item => (
              <div key={item.id} className="flex flex-col">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{item.date}</span>
                  <span className="mx-2">/</span>
                  <span>{item.category}</span>
                </div>
                <h3 className="text-xl font-bold hover:text-blue-600 transition-colors cursor-pointer">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;