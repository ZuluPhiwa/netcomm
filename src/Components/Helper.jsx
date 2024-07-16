import React from "react";

const Helper = ({ img, title, desc }) => {
  return (
    <div className="p-2">
      <img src={img} alt="banner" className=" object-contain rounded" />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-lg">{desc}</p>
    </div>
  );
};

export default Helper;
