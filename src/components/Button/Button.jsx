import React from "react";

const Button = ({ title, disable }) => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div
        className={`bg-main_purple ${
          disable ? "bg-gray_disable" : "bg-main_purple"
        } rounded-xl drop-shadow-[0_10px_15px_rgba(81,75,195,0.25)] w-full`}
      >
        <button className="text-center w-full py-0 font-medium h-14 ">
          {title}
        </button>
      </div>
    </div>
  );
};

export default Button;
