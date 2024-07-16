import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import vehicles from "../assets/icons/vehicles.jpg";
import { Link } from "react-router-dom";
import pic7 from "../assets/ourservice.jpg";

const Services = () => {
  return (
    <div className="mt-12 ">
      <TextParallaxContent imgUrl={vehicles} heading="Services">
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent imgUrl={pic7} heading="Our Core Features.">
        <ExampleContent2 />
      </TextParallaxContent>

      <div className="p-8 px-20 grid md:grid-cols-4 gap-2">
        <div className="text-center p-6 items-center">
          <p className="font-bold text-xl">Product Support</p>
          <br />
          <hr />
          <br />
          <p>
            Technical service & repairs of computers and all IT related products
          </p>
        </div>
        <div className="text-center p-6">
          <p className="font-bold text-xl">Networks</p>
          <br />
          <hr />
          <br />
          <p>
            Installation of network cabling (UTP, FTP, Fibre Optic)
            FUSIONSplicing
          </p>
        </div>
        <div className="text-center p-6">
          <p className="font-bold text-xl">Server OS Support</p>
          <br />
          <hr />
          <br />
          <p>Windows Server, Red Hat Linux, MAC OS</p>
        </div>
        <div className="text-center p-6">
          <p className="font-bold text-xl lowercase first-letter:uppercase">
            SECURITY SOLUTIONS
          </p>
          <br />
          <hr />
          <br />
          <p>
            Firewalls and Anti-Spam Units -- SonicWall & Barracuda Anti-virus &
            Internet Security -- Kaspersky – Eset NOD32 - Avira
          </p>
        </div>

        <div className="text-center p-6">
          <p className="font-bold text-xl lowercase first-letter:uppercase">
            CASH MANAGEMENT
          </p>
          <br />
          <hr />
          <br />
          <p>
            Netcomm in partnership with Global Payment Technologies (GPT) supply
            and maintain technologies that facilitate the counting, sorting and
            counterfeit detection of cash. NetComm offers customizable solutions
            to the retail, banking, gaming, self-service and payment sectors.
            For more info. Please contact our sales department for more
            information.
          </p>
        </div>
        <div className="text-center p-6">
          <p className="font-bold text-xl lowercase first-letter:uppercase">
            PRINT MANAGEMENT
          </p>
          <br />
          <hr />
          <br />
          <p>
            Netcomm offers print management solutions that assist organizations
            to gain visibility and control of printing tasks and save on
            printing costs. Print Management solutions help to address issues of
            paper wastage, risk of confidential documents being left in the
            printer, and general abuse of the printing facility.
          </p>
        </div>
        <div className="text-center p-6">
          <div className="text-center justify-center"></div>
          <p className="font-bold text-xl lowercase first-letter:uppercase">
            HPE SOLUTIONS
          </p>
          <br />
          <hr />
          <br />
          <p>
            Software, data storage, networking, servers and systems tailored for
            your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Our <span className="text-blue-500">Services</span>
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-lg  ">
        Ongoing training keep our staff up to date with cutting edge
        information. We pride ourselves on keeping up with industry trends and
        understand the value of sharing this information with our clients.
        Prompt, efficient service and excellent advice to meet challenges and
        provide solutions for smooth work flow keep our client base growing.
      </p>

      <button className="w-full rounded bg-blue-500 px-4 py-4 text-xl text-white transition-colors hover:bg-blue-700 md:w-fit">
        <Link to={"/netcomm/contact"}>Contact Us</Link>{" "}
        <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
const ExampleContent2 = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Core Features Of <span className="text-blue-500"> NetComm</span>
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="font-bold text-2xl">
        Technical <span>Staff</span>
      </p>
      <br />
      <p className="mb-4 text-lg  ">
        We provide ongoing training for all of our technical and sales staff in
        order to keep up with the latest industry standards so as to be able to
        advise our clients on best practice as well as focusing on the
        professional development of our team.{" "}
      </p>
      <br />
      <p className="font-bold text-2xl">Hardware, Consumables & Software</p>
      <br />
      <p className="mb-4 text-lg  ">
        We keep ample stock of the fastest moving products and spares in our
        inventory. We maintain excellent relationships with our South African
        service providers and suppliers in order to ensure fast, efficient and
        cost effective equipment for our clients.
      </p>
      <br />
      <p className="font-bold text-2xl">Maintenance & System Design</p>
      <br />
      <p className="mb-4 text-lg ">
        We have extensive experience designing and maintaining large information
        systems. Please contact our technical department for more information.
      </p>
      <button className="w-full rounded bg-blue-700 px-4 py-4 text-xl text-white transition-colors hover:bg-blue-950 md:w-fit">
        <Link to={"/netcomm/contact"}>Contact Us</Link>{" "}
        <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
export default Services;
