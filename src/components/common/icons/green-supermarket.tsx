import React from "react";

type Props = {
  mode: "light" | "dark";
};

const BrandIcon = (props: Props) => {
  const { mode } = props;

  const textColorClass = mode === "dark" ? "text-gray-900" : "text-gray-0";
  const style = {
    base: "text-xl font-medium leading-normal",
  };

  return (
    <div className="">
      <span className={`text-green-400 ${style.base}`}>GREEN</span>{" "}
      <span className={`${textColorClass} ${style.base}`}>SUPERMARKET</span>
    </div>
  );
};  

export default BrandIcon;
