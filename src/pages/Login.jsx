import React, { useState } from "react";
import Button from "../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import apiReq from "../api/apiReq";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/Slices/userSlice";
const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandle = async () => {
    const response = await apiReq.post("/users/signIn", data);
    dispatch(setUser(response.data.user));
    window.localStorage.setItem("token", response.data.token);
    if (response.status === 200) {
      navigate("/home");
    }
  };
  return (
    <div className="login-page-content flex">
      <div
        className="image-content w-1/2 h-screen hidden md:block"
        style={{
          backgroundImage: "url(" + "../../assets/background.jpg" + ")",
        }}
      >
        <div
          style={{
            backgroundColor: "#514BC3",
            height: "100%",
            width: "100%",
            opacity: "80%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1268.22 467.08"
            className="p-20 place-content-center m-auto"
          >
            <defs></defs>
            <title>Asset 1lg</title>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  className="cls-1"
                  d="M224.21,149.41q-12.39,22.34-38,36T122.5,199.16H75.62V310.6H0V.16H122.5Q159.64.16,185.29,13t38.48,35.38q12.82,22.56,12.82,51.74A100,100,0,0,1,224.21,149.41ZM149,128.85q10.62-10.17,10.62-28.75T149,71.36q-10.6-10.17-32.28-10.17H75.62V139h41.13Q138.41,139,149,128.85Z"
                />
                <path
                  className="cls-1"
                  d="M849.57,310.06,785.23,193.28H767.16V310.06H691.8V.7H818.28q36.57,0,62.36,12.78t38.56,35Q932,70.77,932,98.09q0,30.85-17.41,55.09t-51.34,34.37l71.39,122.51ZM767.16,140h46.71q20.71,0,31.07-10.14t10.36-28.64q0-17.62-10.36-27.77T813.87,63.28H767.16Z"
                />
                <path
                  className="cls-1"
                  d="M1176.12,310.06l-104-136.61V310.06H996.75V.7h75.36V136.43L1175.23.7h88.58L1143.94,152.3l124.28,157.76Z"
                />
                <path
                  className="cls-1"
                  d="M669,89.12c-.33-6.28-3.16-11.2-8.74-14.32-5-2.81-10.3-2.1-15.54-.72-6.14,1.63-12.24,3.36-18.5,5.09-.75-1.75-1.4-3.19-2-4.66C618,59.38,612,44.13,605.5,29.14,597.75,11.34,584,.5,564.49.35,497.56-.16,430.63,0,363.69.3,346.53.38,333.44,9.13,325.11,24c-4,7.15-6.6,15.09-9.77,22.7-4.44,10.65-8.81,21.34-13.29,32.2-1.42-.31-2.58-.53-3.71-.83-5.92-1.56-11.78-3.35-17.74-4.68-7.91-1.76-14.77.91-18.49,7a53.79,53.79,0,0,0-2.79,6.12v20.81c.5,1,1,2.08,1.47,3.15a21.33,21.33,0,0,0,14.87,13.34,67.21,67.21,0,0,0,7.4,1.18c-.68,1.72-1.24,3.17-1.82,4.61-6.68,16.7-11,34-11.28,52-.5,36-.27,72-.14,108,0,11.41,9.56,20.72,21,20.92q14.79.27,29.6,0a21.57,21.57,0,0,0,21.25-21.16c.16-7.46,0-14.93.05-22.39,0-1.27.11-2.53.17-3.74h21.22v3c0,2.16,1.11,3.27,3.25,3.3s4.09,0,6.13,0a3,3,0,0,0,3.23-3,3.1,3.1,0,0,0-3.15-3.3l-.58,0c-.51,0-1,0-1.54,0h-.95V171.78h56.65v91.51h-1c-.49,0-.95,0-1.41,0h-.5a3.13,3.13,0,0,0-3.31,3.16,3,3,0,0,0,3.28,3.14q6.23,0,12.44,0a3,3,0,0,0,3.21-3,3.1,3.1,0,0,0-3.18-3.28l-.58,0H432.7v-91.5h62.95V263.3h-2.53l-.56,0a3.09,3.09,0,0,0-3.08,3.17,3,3,0,0,0,3.09,3.11c4.22.05,8.43,0,12.64,0a3,3,0,0,0,3.19-3,3.1,3.1,0,0,0-3.2-3.25l-.56,0h-2.43v-91.5h56.61V263.3h-2.55l-.55,0a3.09,3.09,0,0,0-3.06,3.2,3,3,0,0,0,3.13,3.08c1.58.06,3.17-.09,4.74.05a5.37,5.37,0,0,0,4.75-1.62v-4.73h21c0,1.69,0,3.13,0,4.56.06,7.47-.19,14.95.27,22.39.76,12,9.76,20.23,21.9,20.36,8.53.09,17.09-.38,25.59.12,13.31.78,24.66-8.81,24.52-24.71-.28-32.8.21-65.61-.25-98.4a168.79,168.79,0,0,0-3.71-31.24c-2.16-10.6-5.82-20.9-8.86-31.43.79-.13,2.09-.36,3.39-.54,12.5-1.8,19.8-10.2,19.85-22.89C669,97.38,669.16,93.24,669,89.12Zm-190.28,68c-1.36,1.57-3.51,1.66-5.49,0-4.67-3.9-9.68-4.6-15.1-1.81a23.45,23.45,0,0,0-2.8,2c-1.94,1.39-4,1.29-5.3-.25s-1.08-3.71.63-5.27a20.26,20.26,0,0,1,13.78-5.46,20,20,0,0,1,13.38,5.18C479.78,153.33,480.13,155.47,478.67,157.15Zm14.57-14.56c-1.69,1.76-3.61,1.6-6.05-.65a33.59,33.59,0,0,0-45.19-.45c-3,2.64-4.87,3-6.6,1s-1.24-3.84,1.71-6.46a40.58,40.58,0,0,1,54.88.39C494.45,138.75,494.88,140.89,493.24,142.59ZM507.62,128c-1.34,1.46-3.12,1-4.67-.19-3.79-2.89-7.37-6.13-11.42-8.58-19.47-11.76-46.07-9.1-63,6.09-.8.71-1.56,1.47-2.38,2.16-2.13,1.81-4.17,1.83-5.67.11s-1.36-3.72.75-5.4c4.23-3.39,8.4-7,13-9.71,9.3-5.54,19.61-7.89,31.19-7.88a60.44,60.44,0,0,1,41.46,17c.76.72,1.86,1.61,1.9,2.45A6,6,0,0,1,507.62,128Z"
                />
                <path
                  className="cls-1"
                  d="M472.83,189.64c-1.25,1.32-2.92,1.3-4.74-.07-.15-.1-.32-.19-.75-.44V227.7c0,2.17,0,4.34,0,6.51,0,2.52-1.14,3.83-3.23,3.79s-3.06-1.35-3.07-3.76V189.13c-.56.4-.92.7-1.31.93a3.06,3.06,0,0,1-4.13-.42,2.83,2.83,0,0,1-.18-4.1,83.48,83.48,0,0,1,6.95-7c1.3-1.13,2.95-.85,4.25.47,1.9,1.92,3.81,3.82,5.69,5.75C473.94,186.43,474.12,188.25,472.83,189.64Z"
                />
                <path
                  className="cls-1"
                  d="M431.46,361.78,404,467.08H373l-16.8-69.3-17.4,69.3H307.71L281,361.78h27.45l15.15,76.65,18.75-76.65h28.2l18,76.65,15.3-76.65Z"
                />
                <path
                  className="cls-1"
                  d="M599.91,448.48h-39.3l-6.3,18.6H527.46l38.1-105.3h29.7l38.1,105.3H606.21Zm-6.6-19.8-13-38.55-12.9,38.55Z"
                />
                <path
                  className="cls-1"
                  d="M788.61,467.08l-21.9-39.75h-6.15v39.75H734.91V361.78H778q12.45,0,21.22,4.35a30,30,0,0,1,13.13,11.92,33.29,33.29,0,0,1,4.35,16.88,31.35,31.35,0,0,1-5.93,18.75q-5.93,8.25-17.47,11.7l24.3,41.7Zm-28.05-57.9h15.9q7,0,10.57-3.45t3.53-9.75q0-6-3.53-9.45t-10.57-3.45h-15.9Z"
                />
                <path
                  className="cls-1"
                  d="M948.36,382.33v21.3h34.35v19.8H948.36v23.1h38.85v20.55h-64.5V361.78h64.5v20.55Z"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div className="w-screen h-screen  bg-dark_blue lg:w-1/2 ">
        <div className="w-full h-full text-white p-5 flex flex-col items-start justify-start space-y-10 lg:mx-auto lg:w-2/3 lg:p-20 lg:place-content-center">
          <h1 className="text-3xl font-medium">Prijavite se</h1>
          <div className="w-full flex flex-col space-y-5">
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
            <div className="flex flex-col space-y-2">
              <input
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                className="bg-transparent border-b border-main_purple/60 outline-none"
              />
              <label htmlFor="email" className="px-1 text-gray-400 text-base">
                Lozinka
              </label>
            </div>
          </div>
          <span className="w-full text-right text-base text-pinky/50">
            Zaboravljena lozinka?
          </span>
          <Button title="Prijavite se" onClick={loginHandle} disable={false} />
          <h3 className="w-full text-white/30 text-center font-bold text-base">
            Nemate profil?{" "}
            <Link
              to="/register"
              className="text-white/100 underline underline-offset-4 text-base"
            >
              Registrujte se.
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
