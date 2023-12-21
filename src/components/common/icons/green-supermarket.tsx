import React from "react";

type Props = {
  mode: "light" | "dark";
  size: "small" | "medium" | "large";
  align?: "left" | "center" | "right";
};

const BrandIcon = (props: Props) => {
  const { mode, size, align } = props;

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
  const alignClass =
    align === "center"
      ? "text-center"
      : align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-left";

  return (
    <div className={alignClass}>
      <span className={`text-green-400 ${style.base}`}>GREEN</span>{" "}
      <span className={`${textColorClass} ${style.base}`}>SUPERMARKET</span>
    </div>
  );
};

export default BrandIcon;
