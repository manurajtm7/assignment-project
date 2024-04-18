import React, { useState } from "react";
import AuthCard from "../../comonents/auth-card/AuthCard";
import Forms from "../../comonents/form-component/Forms";

const CreateAccount = () => {
  const [isLogged, setIslogged] = useState(true);
  return (
    <div className="w-full h-screen">
      <div className="w-full p-10 ">
        <h1 className=" text-2xl font-bold">Create an account</h1>
      </div>
      <div className="w-full   flex items-center justify-center ">
        <Forms isLogged={isLogged} />
      </div>

      {/* component card here  */}
      {<AuthCard isLogged={isLogged} />}
      {/* component card   */}
    </div>
  );
};

export default CreateAccount;
