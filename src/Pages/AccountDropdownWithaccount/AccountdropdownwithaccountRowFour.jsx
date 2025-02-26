import { Img, Button, Heading } from "../../components";
import AccountDropdownkithAccountFlashsell from "../../components/AccountDropdowniWithAccountFlashsell";
import React, { Suspense } from "react";
export default function AccountdropdownwithaccountRowFour() {
return (
<div className="mt-[138px] flex justify-center self-stretch">
<div className="container-xs flex justify-center md:px-5">
<div className="relative h-[500px] w-full bg-gray-900 px-14 md:px-5">
<div className="absolute bottom-0 right-[10%] top-0 my-auto h-[500px] w-[504px] rounded-[252px] bg-blue_gray-100_4c blur-[208.00px] backdrop-opacity-[0.5]" />
<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center gap-[42px] md:relative md:flex-col">
<div className="flex w-[44%] flex-col items-start gap-8 md:w-full">
<Heading size="headings" as="h6" className="text-[16px] font-semibold">
Categories
</Heading>
<Heading
size="heading3xl"
as="h1"
className="w-full !font-inter text-[48px] font-semibold leading-[60px] tracking-[1.92px] !text-gray-50 md:text-[44px] sm:text-[38px]"
>
Enhance Your Music Experience
</Heading>
<div className="self-stretch">
<div className="mr-[122px] flex gap-6 md:mr-0 md:flex-row sm:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{[...Array(4)].map((d, index) => (
<AccountDropdownWithAccountFlashsell key={"listfive" + index} />
))}
</Suspense>
</div>
</div>
<Button color="black_900_01" size="4x1" className="min-w-[170px] rounded px-[34px] font-medium sm:px-5">
Buy Now!
</Button>
</div>
<Img
src="images/img_jbl_boombox_2_hero_820_x1.png"
alt="Jblboomboxtwo"
className="h-[330px] w-[56%] object-contain md:w-full"
/>
</div>
</div>
</div>
</div>
);
}
