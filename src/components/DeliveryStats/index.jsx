import { Heading, Img } from "..";
import React from "react";

export default function StatistiquesDeLivraison({ ...props }) {
    const thumbsUpImage = "images/img_thumbs_up.svg";
    const deliveryCountText = "1O.5k";
    const activeSiteText = "Vendeurs actifs sur notre site";

    return (
        <div
            {...props}
            className={`${props.className} flex items-center w-[24%] md:w-full p-[30px] sm:p-5 border-black-900_4c border-solid cursor-pointer rounded hover:shadow-sm`}
        >
            <div className="flex w-full flex-col items-center gap-3.5">
                <Img src={thumbsUpImage} alt="105k" className="h-[80px] w-[46%] object-contain" />
                <div className="flex flex-col items-center gap-0.5 self-stretch">
                    <Heading size="headingxl" as="h2" className="!font-inter text-[32px] font-bold tracking-[1.28px]">
                        {deliveryCountText}
                    </Heading>
                    <Heading as="p" className="text-[16px] font-normal">
                        {activeSiteText}
                    </Heading>
                </div>
            </div>
        </div>
    );
}
