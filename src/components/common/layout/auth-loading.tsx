import React from "react";
import { Button } from "../buttons";

type Props = {};

const AuthLoading = (props: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-3xl text-green-400 animate-bounce">Authenticating User!</div>
      <div className="text-xl text-green-400/50 animate-pulse">Please Wait</div>
    </div>
  );
};

export default AuthLoading;