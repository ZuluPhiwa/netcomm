import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ux from "../assets/icons/ux.png";
import software from "../assets/icons/software.png";
import printer from "../assets/icons/printer.png";
import networking from "../assets/icons/networking.png";
import global from "../assets/icons/global.png";
import computer from "../assets/icons/computer.png";
import kaspersky from "../assets/icons/kaspersky.svg";
import cisco from "../assets/icons/cisco.svg";
import acer from "../assets/icons/acer.svg";
import bitdefender from "../assets/icons/bitdefender-2.svg";
import dell from "../assets/icons/dell-technologies-logo.svg";
import eset from "../assets/icons/eset-logo.svg";
import lenovo from "../assets/icons/lenovo-logo.svg";
import hp from "../assets/icons/hp-new-logo.svg";
import hp2 from "../assets/icons/hewlett-packard-enterprise-logo.svg";
import mecer from "../assets/icons/mecer.svg";
import microsoft from "../assets/icons/microsoft-6.svg";
import red from "../assets/icons/red-hat-logo.svg";
import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <div className="bg-[#f9f7f4] w-full  mt-8 ">
        <section className="w-full  px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto ">
          <div>
            <h3 className="text-4xl md:text-6xl font-semibold">
              Welcome to <span className="text-blue-500">NetComm</span>
            </h3>
            <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
              Providing IT solutions, Hardware, Software <br /> and Consultancy
              Services throughout Eswatini.
            </p>
            <Link to={"/netcomm/about"}>
              <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-blue-600 active:scale-95">
                Learn More
              </button>
            </Link>
          </div>
          <div className="hidden md:block">
            <ShuffleGrid />
          </div>
        </section>
      </div>

      <div className="w-full bg-white pt-1">
        <p className="mt-16 mb-6 text-center font-extrabold text-4xl">
          Who We Are
        </p>
        <p className="my-6 text-center justify-center mx-2 md:mx-24 px-8 md:px-24">
          NetComm is Eswatini's leading IT solutions and computer equipment
          supplier. Our highly trained staff would be delighted to assist you
          with your personal and/or business technology requirements.
        </p>

        <div className="mx-8 md:mx-24 grid md:grid-cols-3 ">
          <div>
            <div className="bg-[#f9f7f4]  grid md:grid-cols-2  rounded m-4">
              <img src={ux} alt="ux pic" className=" m-4 h-14" />
              <p className="uppercase font-bold m-auto ml-12 md:-ml-12">
                PC'S and Mobile
              </p>
            </div>
            <div className="bg-[#f9f7f4]  grid md:grid-cols-2  rounded m-4">
              <img src={printer} alt="ux pic" className=" m-4 h-14" />
              <p className="uppercase font-bold m-auto ml-12 md:-ml-12">
                Imaging & Printing
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#f9f7f4]  grid md:grid-cols-2  rounded m-4">
              <img src={software} alt="ux pic" className=" m-4 h-14" />
              <p className="uppercase font-bold m-auto ml-12 md:-ml-12">
                Software
              </p>
            </div>
            <div className="bg-[#f9f7f4]  grid md:grid-cols-2  rounded m-4">
              <img src={computer} alt="ux pic" className=" m-4 h-14" />
              <p className="uppercase font-bold m-auto ml-12 md:-ml-12">
                Hardware Components
              </p>
            </div>
          </div>
          <div>
            <div className="bg-[#f9f7f4]  grid md:grid-cols-2  rounded m-4">
              <img src={networking} alt="ux pic" className=" m-4 h-14" />
              <p className="uppercase font-bold m-auto ml-12 md:-ml-12">
                Customer Support
              </p>
            </div>
            <div className="bg-[#f9f7f4]  grid md:grid-cols-2  rounded m-4">
              <img src={global} alt="ux pic" className=" m-4 h-14" />
              <p className="uppercase font-bold m-auto ml-12 md:-ml-12">
                Enterprise solutions
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-4 mt-12  bg-[#f9f6f4]">
        <div className="p-4 md:p-12">
          <h1 className="text-pretty text-center font-bold text-3xl m-4">
            Brands We <span className="text-blue-500">Carry</span>
          </h1>
          <Marquee speed={90} delay={0}>
            {/* <img src="https://1000logos.net/wp-content/uploads/2020/08/Bitdefender-Logo-500x313.png" alt="bitdefender" className="h-44 mx-4"/> */}
            <img
              src="https://1000logos.net/wp-content/uploads/2020/09/APC-Logo-500x313.png"
              alt="APC"
              className="h-36 mx-6"
            />
            <img
              src="https://logowik.com/content/uploads/images/apple-authorized-reseller1887.jpg"
              alt="apple"
              className="h-36 mx-6"
            />
            <img src={kaspersky} alt="kaspersky" className="h-20 mx-6" />
            <img src={bitdefender} alt="kaspersky" className="h-20 mx-6" />
            <img src={red} alt="kaspersky" className="h-20 mx-6" />
            <img src={microsoft} alt="kaspersky" className="h-20 mx-6" />
            <img src={lenovo} alt="kaspersky" className="h-20 mx-6" />
            <img src={eset} alt="kaspersky" className="h-20 mx-6" />
            <img src={dell} alt="kaspersky" className="h-20 mx-6" />
            <img src={acer} alt="kaspersky" className="h-20 mx-6" />
            <img src={hp2} alt="kaspersky" className="h-20 mx-6" />
            <img src={hp} alt="kaspersky" className="h-20 mx-6" />
            <img src={cisco} alt="kaspersky" className="h-20 mx-6 " />
            <img src={mecer} alt="kaspersky" className="h-20 mx-6" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Home;

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1452&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1573148195900-7845dcb9b127?q=80&w=1640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1415&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1616353329454-4350ed03a0b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1717632201254-19d1ce73dfb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjJTIwbWluaXxlbnwwfDB8MHx8fDA%3D",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    src: "https://m.media-amazon.com/images/I/91y+oD5l-vL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1588405765997-02255aff295a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};
