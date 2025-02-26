import { Img } from "..";
import React from "react";

export default function ImageProfil({ userImage = "images/img_image_57.png", ...props }) {
    return (
       <div {...props} className={`${props.className} flex items-center self-stretch p-3 bg-gray-100 flex-1 rounded`}>
         <Img src={userImage} alt="User Image" className="h-[114px] w-[82%] object-contai"/>
       </div>
    );
}
