import { Heading } from "..";

import React from "react";

export default function AccountDropdownWithAccountFlashsell({ ...props }) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center justify-center w-[24%] sm:w-full p-2.5 bg-white-a700 rounded-[30px]`}>
            <div className="flex flex-col items-center">
                <Heading size="headings" as="h6" className="text-[16px] font-semibold">
                    05
                </Heading>
                <Heading size="textxs" as="p" className="relative mt-[8px] text-[11px] font-normal">
                    Days
                </Heading>
            </div>
        </div>
    );
}
