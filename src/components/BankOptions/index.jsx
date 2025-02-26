import { Img, Heading, Radio } from "..";
import React from "react";

export default function BankOptions({ bankText = "Bank", ...props }) {
  return (
    <div {...props} className={`${props.className} flex justify-between items-center self-stretch flex-1`}>
      <div className="flex gap-4">
        <Radio value="group9671" name="group967" className="h-[24px]" />
        <Heading as="p" className="text-[16px] font-normal">
          {bankText}
        </Heading>
      </div>
      <div className="flex flex-1 justify-end gap-2">
        <Img src="images/img_monitor_cart_small.png" alt="Bank" className="h-[28px] object-cover" />
        <Img src="images/img_monitor_cart_small.png" alt="Bank" className="h-[28px] object-cover" />
        <Img src="images/img_monitor_cart_small.png" alt="Bank" className="h-[28px] object-cover" />
        <Img src="images/img_monitor_cart_small.png" alt="Bank" className="h-[28px] object-cover" />
      </div>
    </div>
  );
}
