import React from 'react';
import PropTypes from 'prop-types';

const variants = {
    primary: 'border-gray-900 border-[1.5px] border-solid checked:border-gray-900 checked:border-[3.5px] checked:border-solid checked:focus:border-gray-900',
};
const sizes = {
    xs: 'h-[24px] w-[24px]',
};

const Radio = React.forwardRef(
    ({ className="", name="", label="", id="radio_id", variant="primary", size="xs", ...restprops }, ref) => {
        return (
            <label className={className + "flex items-center gaap-[5px] cursor-pointer"}>
                <input
                    className={`${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
                    ref={ref}
                    type="radio"
                    name={name}
                    {...restprops}
                    id={id}

                />
                <span>{label}</span>
            </label>
        );
        },
        );

Radio.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
    variant: PropTypes.oneOf(["primary"]),
    size: PropTypes.oneOf(["xs"]),
};

export default Radio;

