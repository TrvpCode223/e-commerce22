import React from "react";

const CloseSVG = ({ fillcolor = "#000000", className = "", ...props }) => {
    return (
        <svg
            fill={fillcolor}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
            height={props?.width || 20}
            width={props?.width || 20}
            viewBox={`0 0 ${props?.width || 20} ${props?.width || 20}`}
        >
            <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
        </svg>
    );
};

export default CloseSVG;
