import { Heading, RatingBar, Button, Img } from "../..";
import React from "react";

export default function WishlistCart1({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[24%] mdiw-full gap-4`}>
      <div className="relative bg-gray-100">
        <div className="w-1 flex flex-col gap-1.5">
          <div className="relative mx-3 h-[190px]">
            <Button shape="round" className="absolute right-0 top-0 m-auto w-[34px] rounded-[16px] px-1">
              <Img src="images/img_quick_view.svg" />
            </Button>
            <div className="absolute left-0 top-0 m-auto flex rounded bg-orange-700">
              <Heading size="txtXs" className="text-[12px] font-normal !text-gray-50">
                -25%
              </Heading>
            </div>
            <div className="absolute bottom-0 left-0 right-0 m-auto flex flex-1 justify-center p-1.5">
              <Img
                src="images/img_ideapad_gaming_31_03_500x500.png"
                alt="image"
                className="h-[166px] w-[68%] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Button
        color="gray_900"
        size="xl"
        leftIcon={
          <Img src="images/img_cart1_white_a700.svg" alt="Cart1" className="h-[24px] w-[24px] object-contain" />
        }
        className="gap-2 self-stretch rounded-bl rounded-br px-[34px] font-medium sm:px-5"
      >
        Ajouter au Panier
      </Button>
      <div className="flex flex-col items-start gap-1.5 self-stretch">
        <Heading as="h5" className="text-[16px] font-medium">
          Laptop
        </Heading>
        <div className="flex flex-wrap gap-3 self-stretch">
          <Heading as="p" className="text-[16px] font-medium !text-orange-700">
            $960
          </Heading>
          <Heading as="p" className="text-[16px] font-medium !text-gray-900_7f line-through">
            $1160
          </Heading>
        </div>
      </div>
      <div className="flex items-center gap-2 self-stretch">
        <RatingBar
          value={4}
          isEditable={true}
          color="#ffad33"
          activeColor="#ffad33"
          size={20}
          className="flex gap-2.5"
        />
        <Heading size="txtHeading5" as="p" className="text-[14px] font-semibold !text-black-900_75">
          (65)
        </Heading>
      </div>
    </div>
  );
}
