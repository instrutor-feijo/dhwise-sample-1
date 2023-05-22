import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder4: "rounded", icbRoundedBorder4: "rounded" };
const variants = {
  FillGray300: "bg-gray_300 text-gray_700",
  FillDeeporange500: "bg-deep_orange_500 text-white_A700",
  FillGray500: "bg-gray_500 text-white_A700",
  OutlineGray500: "outline outline-[1px] outline-gray_500 text-gray_500",
  icbFillAmber400: "bg-amber_400",
};
const sizes = { sm: "", md: "p-[11px]", lg: "p-3.5", smIcn: "", mdIcn: "p-2" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4", "icbRoundedBorder4"]),
  variant: PropTypes.oneOf([
    "FillGray300",
    "FillDeeporange500",
    "FillGray500",
    "OutlineGray500",
    "icbFillAmber400",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
