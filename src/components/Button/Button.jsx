import React from "react";

const Button = ({ title, disable, onClick, color }) => {
  return (
    <div className="w-full flex items-center justify-center " onClick={onClick}>
      <div
        className={` ${
          disable
            ? "bg-gray_disable"
            : color
            ? color
            : "bg-main_purple drop-shadow-[0_10px_15px_rgba(81,75,195,0.25)]"
        } rounded-xl  w-full`}
      >
        <button className="text-center w-full py-0 font-medium h-14 text-white">
          {title}
        </button>
      </div>
    </div>
  );
};

export default Button;
