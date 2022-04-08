import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

const Register = () => {
  return (
    <div className="w-screen min-h-screen bg-dark_blue  ">
      <div className="w-full h-full text-white p-5 flex flex-col items-start justify-start space-y-10">
        <h1 className="text-base font-medium">Registrujte se</h1>
        <div className="max-w-full space-y-5">
          <div className="w-full flex items-center justify-center  space-x-2">
            <div className="flex-1 flex flex-col space-y-2">
              <input className="w-full bg-transparent border-b border-main_purple/60 outline-none" />
              <label className="align self-start text-gray-400 px-1 text-xs">Ime</label>
            </div>
            <div className="flex-1 flex flex-col items-end space-y-2">
              <input className="w-full bg-transparent border-b border-main_purple/60 outline-none" />
              <slabel className="align self-start text-gray-400 px-1 text-xs">
                Prezime
              </slabel>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              className="bg-transparent border-b border-main_purple/60 outline-none"
            />
            <label for="email" className="px-1 text-gray-400 text-xs">
              Email
            </label>
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <input
              type="password"
              className="bg-transparent border-b border-main_purple/60 outline-none"
            />
            <div className="w-full flex items-start space-x-24">
              <label for="fname" className="px-1 text-gray-400 text-xs">
                Lozinka
              </label>
              <p className="text-gray-400/50 max-w-xs text-xs  text-right ">
                Lozinka mora sadržavati<br/>najmanje 8 karaktera
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-10">
            <h3 className="px-1 pt-20 font-medium text-xs">Informacije o vozilu</h3>

            <div className="w-full flex flex-col ">
              <input
                type="text"
                className="bg-transparent border-b border-main_purple/60 outline-none w-full"
              />
              <div className="flex w-full items-center justify-between mb-10">
                <label for="fname" className="px-1 text-gray-400 text-xs">
                  Lozinka
                </label>
                <p className="text-gray-400/50 max-w-fit text-xs  text-right text-xs">
                  + Dodajte još vozila
                </p>
              </div>
            </div>
          </div>
          <Button title="Registruj se"/>
          <h3 className="w-full text-center font-bold text-sm">
            Imate profil?{" "}
            <Link
              to="/login"
              className="text-white/70 underline underline-offset-4 text-sm"
            >
              Prijavite se.
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
