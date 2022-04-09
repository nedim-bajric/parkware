import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../components/Button/Button";
const Profile = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    registrationPlates: "",
  });
  return (
    <div className="bg-dark_blue w-screen h-screen">
      <div className="w-full h-full p-4">
        <div
          className="bg-main_purple w-12 flex items-center justify-center rounded-full p-2 text-white"
          onClick={() => navigate("/home")}
        >
          <IoIosArrowBack size={30} />
        </div>
        <div className="w-full flex flex-col  space-y-40">
          <div className="w-full flex flex-col items-center space-y-20">
            <div className="w-full flex flex-col space-y-5">
              <div className="w-full flex flex-col items-center space-y-2">
                <h1 className="text-2xl text-white">Nedim Bajric</h1>
                <span className="text-xs font-semibold text-gray_disable">
                  nedim@gmail.com
                </span>
              </div>
              <div className="w-3/4  mx-auto bg-main_purple/40 h-0.5" />
            </div>
            <div className="w-full px-5">
              <div className="w-full flex items-center justify-center space-x-2">
                <div className="flex-1 flex flex-col space-y-2">
                  <input
                    className="w-full bg-transparent border-b border-main_purple/60 outline-none"
                    onChange={(e) =>
                      setData({ ...data, firstName: e.target.value })
                    }
                  />
                  <label className="align self-start text-gray-400 px-1 text-base">
                    Ime
                  </label>
                </div>
                <div className="flex-1 flex flex-col items-end space-y-2">
                  <input
                    className="w-full bg-transparent border-b border-main_purple/60 outline-none"
                    onChange={(e) =>
                      setData({ ...data, lastName: e.target.value })
                    }
                  />
                  <slabel className="align self-start text-gray-400 px-1 text-base">
                    Prezime
                  </slabel>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  type="email"
                  className="bg-transparent border-b border-main_purple/60 outline-none"
                />
                <label htmlFor="email" className="px-1 text-gray-400 text-base">
                  Email
                </label>
              </div>
              <div className="flex flex-col space-y-2 w-full">
                <input
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  type="password"
                  className="bg-transparent border-b border-main_purple/60 outline-none"
                />
                <div className="w-full flex items-start justify-between">
                  <label
                    htmlFor="fname"
                    className="px-1 text-gray-400 text-base"
                  >
                    Lozinka
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Button title="Spremi promjene" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
