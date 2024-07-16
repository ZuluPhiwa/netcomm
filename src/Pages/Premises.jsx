import React from "react";
import apple from "../assets/apple.jpg";
import board from "../assets/board.jpg";
import carwash from "../assets/carwash.jpg";
import cases from "../assets/cases.jpg";
import parking from "../assets/parking.jpg";
import pcovers from "../assets/pcovers.jpg";
import rest from "../assets/rest.jpg";
import stock from "../assets/stock.jpg";
import waitroom from "../assets/waitroom.jpg";
import Helper from "../Components/Helper";

const Premises = () => {
  return (
    <div>
      <h1 className=" text-center mx-auto  font-extrabold  justify-center  text-5xl pt-16 px-4 ">
        Our Premises
      </h1>
      <div className="p-8 mx-8 my-4">
        <div className="grid md:grid-cols-3 gap-3 pt-4">
          <Helper
            img={apple}
            title={"Apple"}
            desc={"Computers, Phones and iPads"}
          />
          <Helper
            img={board}
            title={"Meeting Room"}
            desc={"8-seater boardroom with a 42inch TV for presenting"}
          />
          <Helper
            img={carwash}
            title={"Carwash"}
            desc={"Clean it up while you have lunch"}
          />
          <Helper
            img={cases}
            title={"Cases and Bags"}
            desc={"For Computers and Tablets"}
          />
          <Helper
            img={pcovers}
            title={"Phone Extras"}
            desc={"Covers and Speakers"}
          />
          <Helper
            img={stock}
            title={"Consumables"}
            desc={"We offer a wide range of inks, toners and office tools."}
          />
          <Helper
            img={parking}
            title={"Ample, Easy Parking"}
            desc={"We don't believe in fighting for space"}
          />
          <Helper
            img={rest}
            title={"Restaurant"}
            desc={"Fabulous coffee and freshly baked treats"}
          />
          <Helper
            img={waitroom}
            title={"Comfortable Waiting Room"}
            desc={"Because we care..."}
          />
        </div>
      </div>
    </div>
  );
};

export default Premises;
