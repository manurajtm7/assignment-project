import React from "react";

const Forms = ({ isLogged }) => {
  return (
    <form className="w-full pt-5 flex gap-7 flex-col items-center justify-center ">
      {!isLogged && (
        <>
          <input
            type="text"
            placeholder="First name"
            className="w-[88%] h-14 bg-zinc-200  px-5 border   rounded-lg outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="w-[88%] h-14 bg-zinc-200  px-5 border   rounded-lg outline-none"
          />
        </>
      )}
      <input
        type="text"
        placeholder="Email"
        className="w-[88%] h-14 bg-zinc-200  px-5 border   rounded-lg outline-none"
      />
      <input
        type="text"
        placeholder="Password"
        className="w-[88%] h-14 bg-zinc-200  px-5 border   rounded-lg outline-none"
      />
      {!isLogged ? (
        <div className="flex gap-2 items-center justify-center">
          <input type="checkbox" name="tnc" />
          <label htmlFor="tnc" className="text-zinc-400">
            {" "}
            By proceeding, I agree to all{" "}
            <span className="text-blue-400 underline">T&C</span> and{" "}
            <span className="text-blue-400 underline">Privacy Policy</span>
          </label>
        </div>
      ) : (
        <div  className="w-full text-start">
          <span className="text-zinc-400 text-sm underline ml-9">
            Forgot your password?
          </span>
        </div>
      )}
    </form>
  );
};

export default Forms;
