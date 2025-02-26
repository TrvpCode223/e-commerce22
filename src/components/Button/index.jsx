import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[16px]",
};

const variants = {
  outline: {
    black_900_66: "border-black-900_66 border border-solid text-black-900",
    black_900_7f: "border-black-900_7f border border-solid text-black-900",
  },
  fill: {
    black_900_01: "bg-black-900_01 text-gray-50",
    gray_900: "bg-gray-900 text-white-a700",
    gray_100: "bg-gray-100",
    gray_900_01: "bg-gray-900_01 text-gray-50",
    orange_700: "bg-orange-700 text-gray-50",
    white_A700: "bg-white-a700",
  },
};

const sizes = {
  "2xl": "h-[44px] px-[34px] text-[16px]",
  lg: "h-[40px] px-2.5",
  sm: "h-[32px] px-1 text-[14px]",
  xl: "h-[40px] px-[34px] text-[16px]",
  "3xl": "h-[46px] px-2.5",
  "4xl": "h-[56px] px-[34px] text-[16px]",
  xs: "h-[26px] px-3 text-[12px]",
  md: "h-[34px] px-1",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "white_A700",
  ariaLabel,
  ...restProps
}) => {
  const buttonClasses = classNames(
    "flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap",
    shapes[shape],
    sizes[size],
    variants[variant]?.[color],
    className
  );

  return (
    <button
      className={buttonClasses}
      aria-label={ariaLabel || (typeof children === "string" ? children : undefined)}
      {...restProps}
    >
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["2xl", "lg", "sm", "xl", "3xl", "4xl", "xs", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf([
    "black_900_66",
    "black_900_7f",
    "black_900_01",
    "gray_900",
    "gray_100",
    "gray_900_01",
    "orange_700",
    "white_A700",
  ]),
  ariaLabel: PropTypes.string,
};

export { Button };
