import { Heading, RatingBar, Img, Button } from "..";
import React from "react";

export default function DetailsDuProduitPanier({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[24%] md:w-full gap-4`}>
      <div className="relative h-[250px] self-stretch rounded bg-gray-100 p-3">
        <Button color="orange_700" size="xs" className="min w-[54px] rounded px-3">
          -40%
        </Button>
        <div className="absolute left-0 right-0 top-3 mx-auto flex flex-1 flex-col items-end gap-2">
          <Button shape="round" className="w-[34px] rounded-[16px] px-1">
            <Img src="images/img_wishlist.svg" />
          </Button>
          <Button shape="round" className="w-[34px] rounded-[16px] px-1">
            <Img src="images/img_quick_view.svg" />
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 p-3.5">
          <Img src="images/img_g92_2_500x500_1.jpg" alt="G922500x500one" className="h-[152px] w-[78%] object-contain" />
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 self-stretch">
        <Heading as="p" className="text-[16px] font-medium">
          HAVIT HV-G92 Gamepad
        </Heading>
        <div className="flex flex-col gap-1.5 self-stretch">
          <Heading as="p" className="text-[16px] font-medium !text-orange-700">
            $120
          </Heading>
          <Heading as="p" className="text-[16px] font-medium !text-gray-900_7f line-through">
            $160
          </Heading>
        </div>
        <div className="flex items-center gap-2">
          <RatingBar
            value={5}
            isEditable={true}
            color="#00000071"
            activeColor="#ffad33"
            size={20}
            className="flex gap-2.5"
          />
          <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
            (88)
          </Heading>
        </div>
      </div>
    </div>
  );
}
