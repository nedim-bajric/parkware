import React from "react";
import { useDispatch } from "react-redux";
import { handleRes } from "../../redux/Slices/reservationSlice";
import Button from "../Button/Button";

const Res3 = () => {
  const dispatch = useDispatch();
  return (
    <div className="w-9/10 h-fit bg-black/80 rounded-xl p-10">
      <div className="w-full flex flex-col items-center justify-between h-full space-y-5">
        <h1 className="font-bold text-xl">Vaša rezervacija</h1>
        <h6 className="self-start">Napomena:</h6>
        <p className="text-start text-gray_disable font-medium text-sm">
          Rezervacija traje 15 minuta. Nakon isteka vremena rezervacije se
          brioše i potrebno je izvršiti novu.
        </p>
        <h1 className="self-center">Informacije o rezervaciji</h1>
        <p>Trg Bosne i Hercegovine 1,Zenica 72000</p>
        <div className="w-full flex items-center justify-between">
          <span>Cijena</span>
          <span>1.5 KM/h</span>
        </div>
        <div className="w-4/5 mx-auto">
          <Button
            title="Otkaži"
            color="bg-red"
            onClick={() => dispatch(handleRes())}
          />
        </div>
      </div>
    </div>
  );
};

export default Res3;
