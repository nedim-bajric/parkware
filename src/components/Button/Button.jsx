import React from "react";

const Button = ({ title }) => {
  return (
    <div className="w-full flex items-center justify-center ">
      <div className="w-10/12 bg-main_purple rounded-xl drop-shadow-[0_10px_15px_rgba(81,75,195,0.25)]">
        <button className="text-center w-full py-4 font-medium ">
          {title}
        </button>
      </div>
    </div>
  );
};

export default Button;
