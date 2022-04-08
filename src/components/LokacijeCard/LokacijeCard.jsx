import React from "react";
import { RiParkingFill } from "react-icons/ri";
const LokacijeCard = ({ item }) => {
  return (
    <div className="w-full h-fit  border-b border-gray_disable/30 ">
      <div className="w-full h-full flex flex-col py-5">
        <div className="flex items-start space-x-5 w-full">
          <div className="bg-main_purple w-12 flex items-center justify-center rounded-xl py-2">
            <RiParkingFill size={30} />
          </div>
          <div className="w-full">
            <h1 className="font-bold text-base">{item.location}</h1>
            <div className="flex flex-col items-start space-y-2 w-full pt-2">
              <div className="flex items-start justify-between w-full">
                <span className="text-gray_disable font-medium text-base">
                  Dostupnost
                </span>
                <span
                  className={` font-bold  ${
                    item.takenSpots === item.totalSpots
                      ? "text-red"
                      : "text-green"
                  } `}
                >
                  {item.takenSpots}{" "}
                  <span
                    className={`${
                      item.takenSpots !== item.totalSpots && "text-white"
                    }`}
                  >
                    {" "}
                    / {item.totalSpots}
                  </span>
                </span>
              </div>

              <div className="flex items-start justify-between w-full">
                <span className="text-gray_disable font-medium">Cijena</span>
                <span className="text-gray_disable font-bold">
                  {item.price.toFixed(2)} KM/h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LokacijeCard;
