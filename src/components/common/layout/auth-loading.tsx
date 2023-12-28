import React from "react";
import { Button } from "../buttons";

type Props = {};

const AuthLoading = (props: Props) => {
  return (
    <div className="h-screen w-screen flex flex-col uppercase font-medium justify-center items-center">
      <div className="text-3xl animate-bounce text-gray-900">
        <span className="text-green-400"> Green </span>Supermarket
      </div>
    </div>
  );
};

export default AuthLoading;
