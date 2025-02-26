import React from "react";
import PropTypes from "prop-types";

const variants = {
    primary: "checked:border-[3px]",
};
const sizes = {
    xs: "h-[24px] w-[24px]",
};

const CheckBox = React.forwardRef(
    (
        {
            className = "",
            name = "",
            label = "",
            id = "",
            onChange,
            variant = "primary",
            size = "xs",
            ...restprops
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) {
                onChange(e.target.checked);
            }
        };
        return (
            <>
            <div className={className + " flex items-center gap-[5px] cursor-pointer"}>
                <input
                className={ `${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""} `}
                ref={ref}
                type="checkbox"
                onChange={handleChange}
                id={id}
                {...restprops}
                />
                {!!label && <label htmlFor={id}>{label}</label>}
            </div>
            </>
);
},
);

CheckBox.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    onChange: PropTypes.func,
    variant: PropTypes.oneOf(["primary"]),
    size: PropTypes.oneOf(["xs"]),
};

export default CheckBox;
