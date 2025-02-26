import { Heading, Img } from "..";
import React from "react";

export default function AffichageProduit({ productName="LDC Monitor", productPrice="$650", ...props }) {
return (
    <div {...props} className={`${props.className} flex sm:flex-col items-center self-stretch gap-6 flex-1`}>
        <Img src="images/img_monitor_cart_small.png" alt="Lcd Monitor" className="h-[54px] w[12%] object-contain" />
        <div className="flex flex-1 flex-wrap justify-between gap-5 sm:self-stretch">
            <Heading as = "p" className="text-[16px] font-normal">
                {productName}
            </Heading>
            <Heading as = "p" className="text-[16px] font-normal">
                {productPrice}
            </Heading>
        </div>
    </div>
    );
}
