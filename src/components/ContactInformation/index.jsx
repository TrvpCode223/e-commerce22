import { Heading, Button, Img } from "..";
import React from "react";

export default function Coordonnées({ ...props }) {
    const callToUsText = "Call to us";
    const availabilityText = "We are available 24/7, 7 days a week";
    const phoneNumber = "+8801611112222";

    return (
        <div {...props} className={`${props.className} flex flex-col self-stretch gap-6 md:mr-0 flex-1`}>
            <div className="flex items-center gap-4 self-stretch">
                <Button color="orange_700" size="lg" shape="circle" className="w-[40px] rounded-[20px] px-2.5">
                    <Img src="images/img_call.svg" alt="Call Icon" />
                </Button>
                <Heading as="p" className="text-[16px] font-medium">
                    {callToUsText}
                </Heading>
            </div>
            <div className="flex flex-col items-start gap-4 self-stretch">
                <Heading size="texts" as="p" className="text-[14px] font-normal">
                    {availabilityText}
                </Heading>
                <Heading size="texts" as="p" className="text-[14px] font-normal">
                    {phoneNumber}
                </Heading>
            </div>
        </div>
    );
}
