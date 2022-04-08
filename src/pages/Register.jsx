import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";

const Register = () => {
  return (
    <div className="w-screen h-screen bg-dark_blue  ">
      <div className="w-full h-full text-white p-5 flex flex-col items-start justify-start space-y-10">
        <h1 className="text-3xl font-medium">Registruj se</h1>
        <div className="max-w-full space-y-5">
          <div className="w-full flex items-center justify-center  space-x-2">
            <div className="flex-1 flex flex-col space-y-2">
              <input className="w-full bg-transparent border-b border-main_purple/60 outline-none" />
              <label className="align self-start text-gray-400 px-1">Ime</label>
            </div>
            <div className="flex-1 flex flex-col items-end space-y-2">
              <input className="w-full bg-transparent border-b border-main_purple/60 outline-none" />
              <slabel className="align self-start text-gray-400 px-1">
                Prezime
              </slabel>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              className="bg-transparent border-b border-main_purple/60 outline-none"
            />
            <label for="email" className="px-1 text-gray-400">
              Email
            </label>
          </div>
          <div className="flex flex-col space-y-2 w-full">
            <input
              type="password"
              className="bg-transparent border-b border-main_purple/60 outline-none"
            />
            <div className="w-full flex items-start ">
              <label for="fname" className="px-1 text-gray-400">
                Lozinka
              </label>
              <p className="text-gray-400/50 max-w-fit text-xs  text-right">
                (Lozinka mora sadržavati najmanje 8 karaktera,poželjno
                kombinovano korištenje malih i velikih slova, kao i specijalnih
                karakterka)
              </p>
            </div>
          </div>
          <Button title="Registruj se" />
          <h3 className="w-full text-center font-bold">
            Imaš profil?{" "}
            <Link
              to="/login"
              className="text-white/70 underline underline-offset-4"
            >
              Prijavi se.
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
