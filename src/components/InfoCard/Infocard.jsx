import React from "react";
import Button from "../Button/Button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Infocard = () => {
  const navigate = useNavigate();
  return (
    <div className="absolute inset-x-0 text-white z-50 w-scren h-screen bg-black/50">
      <div className="p-3 flex flex-col items-start justify-between h-full w-full">
        <div
          className="bg-main_purple w-12 flex items-center justify-center rounded-full p-2"
          onClick={() => navigate("/")}
        >
          <IoIosArrowBack size={30} />
        </div>

        <div className=" w-11/12 mx-auto flex flex-col space-y-5">
          <div className="w-full bg-black/70 p-5 rounded-lg flex flex-col space-y-3">
            <h1 className="text-xl">
              Trg Bosne i Hercegovine 1,
              <br /> Zenica 72000
            </h1>
            <span className="w-full flex items-center justify-between text-2xl font-medium">
              Cijena <span>1.50 KM/h</span>
            </span>
            <span className="w-full flex items-center justify-between text-sm text-zinc-200">
              Dostupnost{" "}
              <span className="text-green">
                21 <span className="text-white"> / 30</span>
              </span>
            </span>
            <span className="w-full flex items-center justify-between text-sm text-zinc-200">
              Radno vrijeme (Pon - Sub) <span>7:00 - 21:00</span>
            </span>
            <span className="w-full flex items-center justify-between text-sm text-zinc-200">
              Besplatan parking u intervalu od <span>21:00 - 7:00</span>
            </span>
            <span className="w-full flex items-center justify-between text-xs text-gray_disable ">
              Nedjeljom i praznicima besplatan parking 0-24
            </span>
          </div>
          <Button title="Potrvdi" />
        </div>
      </div>
    </div>
  );
};

export default Infocard;
