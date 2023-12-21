import React from "react";

type Props = {
  mode: "light" | "dark";
  size: "small" | "medium" | "large";
};

const BrandIcon = (props: Props) => {
  const { mode, size } = props;

  const textColorClass = mode === "dark" ? "text-gray-900" : "text-gray-0";
  const fontSizeClass =
    size === "small"
      ? "text-sm"
      : size === "medium"
      ? "text-md"
      : size === "large"
      ? "text-lg"
      : "";
  const style = {
    base: "font-medium leading-normal",
  };

  return (
    <div className="text-left">
      <span className={`text-green-400 ${style.base}`}>GREEN</span>{" "}
      <span className={`${textColorClass} ${style.base}`}>SUPERMARKET</span>
    </div>
  );
};

export default BrandIcon;
