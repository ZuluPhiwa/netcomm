import React from "react";
import team from "../assets/icons/team.jpg";
import pic1 from "../assets/icons/related-services.jpg";
import pic2 from "../assets/icons/modeli-biznesa.jpg";
import pic3 from "../assets/icons/Itinerant_Services.jpg";
import pic4 from "../assets/icons/images.jpg";
import pic5 from "../assets/icons/istore.jpg";
import pic6 from "../assets/icons/parking.jpg";
import pic7 from "../assets/ourservice.jpg";
import { motion } from "framer-motion";
import { FiBatteryCharging, FiWifi } from "react-icons/fi";

const About = () => {
  return (
    <div className="bg-[#f9f7f4] md:mt-12 mt-8">
      <div className="py-4 ">
        <div className="grid md:grid-cols-2 gap-12 mx-4 md:mx-28">
          <div className="text-center ">
            <p className="text-blue-500 text-left font-bold">
              Honesty | Integrity | Transparency
            </p>{" "}
            <br />
            <h1 className="text-left font-bold text-2xl">
              We Don't Just Sell Computers, <br /> We Provide{" "}
              <span className="text-blue-500">IT Solutions.</span>
            </h1>
            <br />
            <p className="text-left text-lg">
              Our highly trained technical, sales and administrative <br />{" "}
              staff are at your service.
            </p>
          </div>
          <div>
            <img src={pic7} alt="banner" className="rounded-md h-72 " />
          </div>
        </div>
        <br />
        <br />

        <div className="bg-white w-full">
          <div className="grid md:grid-cols-4 gap-2 p-6 ">
            <div>
              <img src={pic1} alt="pic1" className="h-56" />
              <p>
                Selling of IT related equipment, <br /> installation and after
                sales service
              </p>
            </div>
            <div>
              <img src={pic2} alt="pic2" className=" h-56" />
              <p>
                Installation of Local Area Networks <br /> and support of
                network products
              </p>
            </div>
            <div>
              <img src={pic3} alt="pic3" className=" h-56" />
              <p>
                Installation and configuration of security hardware <br />
                and software including firewalls and Anti-Spam Units
              </p>
            </div>
            <div>
              <img src={pic4} alt="pic4" className=" h-56" />
              <p>IT related project management and consultancy</p>
            </div>
          </div>
        </div>

        <br />
        <br />

        <div className="grid md:grid-cols-2 p-4 gap-5 mx-4 md:mx-28 ">
          <div>
            <img src={pic6} alt="" className=" rounded-md h-80" />
          </div>
          <div className="m-auto">
            <p className="text-blue-500 text-left ">
              {" "}
              Creativity | Learning | Innovation
            </p>{" "}
            <br />
            <p className="text-blue-500 text-left font-bold text-2xl">
              Mission
            </p>{" "}
            <br />
            <p className="text-left text-lg">
              To build long term relationships with our customers through
              Information Technology.
            </p>
            <br />
            <br />
            <div className="text-left">
              <button className="bg-blue-700 hover:bg-blue-950 p-2  px-4 rounded text-white">
                Contact Us
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="grid md:grid-cols-2 p-4 gap-5 mx-4 md:mx-28">
          <div className="m-auto text-left">
            <p className="text-blue-500 text-left ">
              {" "}
              Teamwork | Partnerships{" "}
            </p>{" "}
            <br />
            <p className="text-blue-500 text-left text-2xl font-bold">
              Vision
            </p>{" "}
            <br />
            <p className="text-left text-lg">
              To be the leaders in cutting edge technology and computer and IT
              services in Eswatini.
            </p>
            <br /> <br />
            <div className="justify-items-start text-left">
              <button className="bg-blue-700 hover:bg-blue-950 p-2  px-2 rounded text-white">
                Contact Us
              </button>
            </div>
          </div>
          <div>
            <img src={pic5} alt="pic5" className=" rounded-md h-80" />
          </div>
        </div>
      </div>

      <div className=" py-8 bg-white">
        <p className="text-center font-bold text-3xl">
          Our <span className="text-blue-500 ">Story</span>
        </p>

        <p className="my-8 mx-4 md:mx-28 text-justify">
          NETCOMM was formed on 2nd January 1999 after trading as BSN Technical
          Services, a division of Business Systems and Networks. Initially we
          employed 5 people only offering IT services but as the clientele grew,
          the need for a sales department became apparent. Recognizing an
          opportunity to provide localised services, Mr. Jose Da Costa worked
          tirelessly to expand his offerings. The success of this endeavour led
          to Netcomm becomming an HP Warranty Centre in 2008. Over the years, we
          have grown from strength to strength, partnering with major IT brands
          like HP, Dell, Lenovo, Mecer, Cisco, Microsoft to name but a few,
          employing over 35 highly trained staff, with a fleet of 12 vehicles to
          service the Kingdom of Eswatini. Netcomm is also a Partner with Bytes
          Managed Services and thus we maintain ATMs and retail store systems in
          Eswatini on their behalf. Netcomm is Eswatini's only authorised
          reseller of Apple products.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-2 mx-4 md:mx-28 my-12">
        <div className=" mx-auto col-span-1 mb-8">
          <FloatingPhone />
        </div>
        <div className="p-4 col-span-2">
          <p className="font-bold text-3xl"></p>

          <br />
          <p className="font-bold text-lg">Hardware & Software</p>

          <p>
            We stock the most popular items such as phones, tablets, external
            hard drives, printing inks and peripherals. What we don't have on
            hand we will happily order for you.
          </p>

          <br />
          <p className="font-bold text-lg">Accessories</p>

          <p>
            We keep a large stock of cases, cords, phone covers and goods to
            make your technical life not just more convenient but also stylish!
          </p>
          <br />

          <p className="font-bold text-lg lowercase first-letter:uppercase">
            DELICIOUS COFFEE SHOP
          </p>
          <p>
            Serving freshly baked cakes and light meals, our coffee shop is an
            ideal place to meet a friend for lunch.
          </p>
        </div>
      </div>
    </div>
  );
};

const FloatingPhone = () => {
  return (
    <div
      style={{
        transformStyle: "preserve-3d",
        transform: "rotateY(-30deg) rotateX(15deg)",
      }}
      className="rounded-[24px] bg-blue-500"
    >
      <motion.div
        initial={{
          transform: "translateZ(8px) translateY(-2px)",
        }}
        animate={{
          transform: "translateZ(32px) translateY(-8px)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative h-96 w-56 rounded-[24px] border-2 border-b-4 border-r-4 border-white border-l-neutral-200 border-t-neutral-200 bg-neutral-900 p-1 pl-[3px] pt-[3px]"
      >
        <HeaderBar />
        <Screen />
      </motion.div>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-10 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2">
        <FiWifi className="text-neutral-600" />
        <FiBatteryCharging className="text-neutral-600" />
      </div>
    </>
  );
};

const Screen = () => {
  return (
    <div className="relative z-0 grid h-full w-full place-content-center overflow-hidden rounded-[20px] bg-white">
      {/* Example logo from logoispum */}
      <svg
        width="50"
        height="39"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-blue-500"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>

      <button className="absolute bottom-4 left-4 right-4 z-10 rounded-lg border-[1px] bg-white py-2 text-sm font-medium text-blue-500 backdrop-blur">
        NetComm
      </button>

      {/* <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500" /> */}
      <div className="absolute -bottom-72 left-[50%] h-96 w-96 -translate-x-[50%] rounded-full bg-blue-500" />
    </div>
  );
};

export default About;
