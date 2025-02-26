import React from 'react';
import PropTypes from 'prop-types';

const shapes = {
    square: "rounded-[0px]",
    round: "rounded",
};

const variants = {
    outline:{
        black_900_7f: "border-black-900_7f border-t border-b border-solid text-black-900_01",
        black_900_01: "border-black-900_01 border border-solid text-black-900_7f",
        gray_50: "border-gray-50 border-[1.5px] border-solid text-gray-50_66",
    },
    underline: {
        black_900_01: " text-black-900_66 border-b border-black-900_01 border-solid",
    },
    fill : {
       gray_100: "bg-gray-100 text-black-900_7f",
    },
};

const sizes = {
    md: "h-[44px] px-[34px] text-[20px]",
    "2xl": "h-[56px] px-6 text-[16px]",
    xs: "h-[32px] px-3 text-[16px]",
    xl: "h-[50px] px-3.5",
    sm: "h-[38px] pl-5 pr-3 text-[12px]",
    lg: "h-[48px] px-3.5 text-[16px]",
    };

const Input = React.forwardRef(({
    className = "",
    name = "",
    placeholder = "",
    type = "text",
    label = "",
    prefix,
    suffix,
    onChange,
    shape,
    variant = "fill",
    size = "lg",
    color,
    ...restProps
}, ref) => {
    return (
        <label
            className={`${className} flex items-center justify-center cursor-text  ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
        >
            {!!label && label}
            {!!prefix && prefix}
            <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
            {!!suffix && suffix}
        </label>
        );
    }
);
Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["md", "2xl", "xs", "xl", "sm", "lg"]),
    variant: PropTypes.oneOf(["fill", "outline", "underline"]),
    color: PropTypes.oneOf(["black_900_7f", "black_900_01", "gray_50", "black_900_01", "gray_100"]),
    };

export { Input };
