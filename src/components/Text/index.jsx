import React from "react";

const sizes = {
    texts: "text-[14px] font-medium",
    textmd: "text-[16px] font-medium",
    textxl: "text-[24px] font-normal md:text-[22px]",
    textxs: "text-[11px] font-normal",

};

const Text = ({ children, className = "", as, size = "textxl",  ...restProps }) => {
    const Component = as || "p";

    return (
        <Component
            className={`text-black-900_01 font-inter ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export {Text};
