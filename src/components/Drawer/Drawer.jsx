import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleMenu } from "../../redux/Slices/menuSlice";
import { useNavigate } from "react-router-dom";
import {
  RiParkingFill,
  RiNotificationLine,
  RiLogoutCircleRLine,
  RiUserLine,
} from "react-icons/ri";
const Drawer = () => {
  const hidden = useSelector(state => state.menu.hidden);
  const info = useSelector(state => state.user.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div
      className={` absolute z-50 h-screen w-screen transition-transform duration-300 ease-in ${
        hidden ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="w-full h-full flex">
        <div className="w-11/12 h-full bg-dark_blue text-white p-5">
          <div className="w-full h-full flex flex-col items-center space-y-5">
            <div className="w-full flex flex-col items-center space-y-2">
              <h1 className="text-2xl capitalize">
                {info?.firstName} {info?.lastName}
              </h1>
              <span className="text-xs font-semibold text-gray_disable">
                {info?.email}
              </span>
            </div>
            <div className="w-full bg-main_purple/40 h-0.5" />
            <div className="w-full h-full  flex flex-col items-start justify-between ">
              <div className="bg- h-full w-full flex flex-col space-y-10">
                <div
                  className="w-full flex items-center space-x-10"
                  onClick={() => navigate("/home") || dispatch(handleMenu())}
                >
                  <div className="bg-main_purple w-12 flex items-center justify-center rounded-xl py-2 lg:mb-5">
                    <RiParkingFill size={30} />
                  </div>
                  <span className="text-xl font-semibold lg:mb-5">
                    Parking loakcije
                  </span>
                </div>
                <div
                  className="w-full flex items-center space-x-10"
                  onClick={() =>
                    navigate("/rezervacija") || dispatch(handleMenu())
                  }
                >
                  <div className="bg-main_purple w-12 flex items-center justify-center rounded-xl py-2 lg:mb-5">
                    <RiNotificationLine size={30} />
                  </div>
                  <span className="text-xl font-semibold lg:mb-5">
                    Moja rezervacija
                  </span>
                </div>

                <div
                  className="w-full flex items-center space-x-10"
                  onClick={() => navigate("/profile") || dispatch(handleMenu())}
                >
                  <div className="bg-main_purple w-12 flex items-center justify-center rounded-xl py-2 lg:mb-5">
                    <RiUserLine size={30} />
                  </div>
                  <span className="text-xl font-semibold lg:mb-5">Profil</span>
                </div>
              </div>

              <div
                className="w-full flex items-center space-x-10"
                onClick={() =>
                  localStorage.clear() ||
                  navigate("/") ||
                  dispatch(handleMenu())
                }
              >
                <div className="bg-main_purple w-12 flex items-center justify-center rounded-xl py-2 lg:mb-5">
                  <RiLogoutCircleRLine size={30} />
                </div>
                <span className="text-xl font-semibold lg:mb-5">
                  Odjavite se
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-dark_blue/50 h-full w-1/5"
          onClick={() => dispatch(handleMenu())}
        />
      </div>
    </div>
  );
};

export default Drawer;
