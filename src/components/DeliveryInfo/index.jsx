import { Heading, Img } from "..";
import React from "react";

export default function DeliveryInformation({ deliveryImage, deliveryTitle, deliveryDescription, ...props }) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center md:w-full gap-5`}>
            <Img src={deliveryImage} alt="Delivery Icon" className="h-[80px] w-[34%] object-contain" />
            <div className="flex flex-col items-center gap-1 self-stretch">
                <Heading size="headingmd" as="h5" className="text-[20px] font-semibold">
                    {deliveryTitle}
                </Heading>
                <Heading size="texts" as="p" className="text-[14px] font-normal">
                    {deliveryDescription}
                </Heading>
            </div>
        </div>
    );
}