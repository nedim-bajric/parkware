import React from "react";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="w-screen h-screen  bg-dark_blue">
      <div className="w-full h-full text-white p-5 flex flex-col items-start justify-start space-y-10">
        <h1 className="text-3xl font-medium">Prijavi se</h1>
        <div className="w-full flex flex-col space-y-5">
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              className="bg-transparent border-b border-main_purple/60 outline-none"
            />
            <label for="email" className="px-1 text-gray-400">
              Email
            </label>
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              className="bg-transparent border-b border-main_purple/60 outline-none"
            />
            <label for="email" className="px-1 text-gray-400">
              Lozinka
            </label>
          </div>
        </div>
        <span className="w-full text-right text-xs text-pinky/50">
          Zaboravljena lozinka?
        </span>
        <Button title="Prijavi se" />
        <h3 className="w-full text-center font-bold">
          Nemaš profil?{" "}
          <Link
            to="/register"
            className="text-white/70 underline underline-offset-4"
          >
            Registruj se.
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;
