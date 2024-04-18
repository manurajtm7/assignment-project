import React from "react";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook.png";
import { useNavigate } from "react-router-dom";

const AuthCard = ({ isLogged }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-1/5  flex items-end justify-center ">
        <div className="w-full flex items-end justify-center">
          <div
            onClick={() => navigate("/whats-goal")}
            className="w-[90%] h-14 bg-gradient-to-r  from-blue-300 to-blue-500 rounded-xl grid place-items-center "
          >
            <h1 className="text-xl text-zinc-100 font-semibold opacity-85 ">
              {isLogged ? "sign in" : "Create an account"}
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full h-1/3 bg-transparent flex flex-col items-center ">
        <div className="w-4/5 h-1/3 flex items-center justify-center ">
          <h1 className="text-xl opacity-30 xs:text-xs  ">
            ____________ or _____________
          </h1>
        </div>
        <div className="w-full h-max flex gap-3 items-center justify-center">
          <div>
            <img
              src={google}
              alt=""
              className="w-12 p-3 border-2 border-zinc-300 rounded-lg"
            />{" "}
          </div>
          <div>
            <img
              src={facebook}
              alt=""
              className="w-12 p-3 border-2 border-zinc-300 rounded-lg"
            />{" "}
          </div>
        </div>
        <div className="w-full text-center mt-5">
          {!isLogged ? (
            <h2 className="opacity-70 text-sm">
              Already have an account ?{" "}
              <span className="text-blue-500">Login</span>
            </h2>
          ) : (
            <h2 className="opacity-70 text-sm">
              Dont have an account ?{" "}
              <span className="text-blue-500">Create an account</span>
            </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthCard;
