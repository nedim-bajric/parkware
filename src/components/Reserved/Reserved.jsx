import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { handleRes } from "../../redux/Slices/reservationSlice";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
const Reserved = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [minutes, setMinutes] = useState(15);

  useEffect(() => {
    minutes > 0 && setTimeout(() => setMinutes(minutes - 1), 60000);
  }, [minutes]);
  return (
    <div className="absolute inset-x-0 text-white z-50 w-scren h-screen bg-black/50 lg:w-1/2 lg:mx-auto">
      <div className="w-full h-full p-2 flex flex-col  justify-between">
        <div
          className="bg-main_purple w-12 flex items-center justify-center rounded-full p-2"
          onClick={() => navigate("/home")}
        >
          <IoIosArrowBack size={30} />
        </div>
        <div className="w-full h-fit bg-black/70 rounded-xl flex flex-col space-y-5 items-center justify-between p-10 max-w-sm mx-auto">
          <h1 className="text-main_purple font-bold text-xl">
            Uspješno rezervisano
          </h1>
          <p className="text-center text-xs font-bold text-gray_disable">
            Rezervacija traje 15 minuta. Nakona isteka vremena rezervacija se
            briše i potrebno je izvršiti novu.
          </p>
          <div className="w-full flex items-center justify-between">
            <span className="text-sm text-gray_disable">
              Preostalo vrijeme:
            </span>
            <span className="text-lg">{minutes} minuta</span>
          </div>
          <div className="w-10/12">
            <Button
              title="Otkaži"
              color="bg-red"
              onClick={() => dispatch(handleRes())}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reserved;
