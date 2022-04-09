import React from "react";
import { RiParkingFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setData } from "../../redux/Slices/parkingSlice";
const LokacijeCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        dispatch(setData(item)) && navigate(`/parking#${item._id}`)
      }
      className="w-full h-fit  border-b border-gray_disable/30 lg:w-1/5 lg:border lg:rounded-xl lg:p-5 lg:m-2 lg:bg-main_purple/10"
    >
      <div className="w-full h-full flex flex-col py-5">
        <div className="flex items-start space-x-5 w-full lg:space-x-0 lg:flex-col lg:items-center">
          <div className="bg-main_purple w-12 flex items-center justify-center rounded-xl py-2 lg:mb-5">
            <RiParkingFill size={30} />
          </div>
          <div className="w-full lg:w-full">
            <h1 className="font-bold text-base lg:flex lg:justify-center">
              {item.location}
            </h1>
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
