import {Button, Img, Heading} from "../../components/";
import React from "react";

export default function WishlistCart({ ...props }) {
  return (
    <div {...props} className={`${props.className} flex flex-col w-[24%] mdiw-full gap-4`}>
      <div className="relative gap-3.5 self-stretch rounded bg-gray-100">
        <div className="relative mx-3 mt-3 h-[182px]">
          <Button shape="round" className="absolute right-0 top-0 m-auto w-[34px] rounded-[16px] px-1">
            <Img src="images/img_icon_delete.svg" />
          </Button>
          <Button color="orange_700" size="xs" className="absolute left-0 top-0 m-auto min-w-[54px] rounded px-3">
            -35%
          </Button>
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 p-6 sm:p-5">
            <Img
              src="images/img_547953_9c2st_87.png"
              alt="547953c2steig"
              className="h-[128px] w-[90%] object-contain"
            />
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
      <div className="flex flex-col items-start gap-2 self-stretch">
        <Heading as="h5" className="text-[16px] font-medium">
          Gucci duffle bag
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
    </div>
  );
}
