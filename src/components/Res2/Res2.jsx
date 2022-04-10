import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

const Res2 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-9/10 h-fit bg-black/80 rounded-xl p-10 lg:w-1/2 lg:mx-auto">
      <div className="w-full flex flex-col items-center justify-between h-full space-y-5">
        <h1 className="font-bold text-xl">Vaša rezervacija</h1>
        <span className="text-gray_disable font-medium text-sm">
          Trenutno nemate aktivnih rezervacije.
        </span>
        <p className="text-center text-gray_disable font-medium text-sm">
          Listu lokacija sa parking mjestima u Vašem gradu možete pronaći
          pritiskom na dugme ispod.
        </p>
        <div className="w-4/5 mx-auto">
          <Button title="Parking lokacije" onClick={() => navigate("/home")} />
        </div>
      </div>
    </div>
  );
};

export default Res2;
