import { Button, Heading, RatingBar, Img, Slider } from "../../components";
import React from "react";
export default function AccountdropdownwithaccountColumnOne() {
const [sliderState, setSliderState] = React.useState(0);
const sliderRef = React.useRef(null);
return (
<div className="flex flex-col items-center gap-[58px] self-stretch sm:gap-[29px]">
<div className="flex flex-col gap-7 self-stretch">
<div className="container-xs md:px-5">
<div className="flex items-center justify-between gap-5 md:flex-col">
<div className="flex flex-1 items-center md:flex-col md:self-stretch">
<div className="flex w-[30%] flex-col items-start gap-6 md:w-full">
<div className="flex items-center gap-4 self-stretch">
<div className="h-[40px] w-[28px] rounded bg-orange-700" ></div>
<Heading size="headings" as="h6" className="self-end text-[16px] font-semibold !text-orange-700">
Today’s
</Heading>
</div>
<Heading
size="heading2xl"
as="h1"
className="!font-inter text-[36px] font-semibold tracking-[1.44px] md:text-[34px] sm:text-[32px]"
>
Flash Sales
</Heading>
</div>
<div className="flex flex-1 items-center justify-center gap-4 px-[42px] md:self-stretch md:px-5">
<div className="flex flex-col items-start">
<Heading size="textxs" as="p" className="text-[12px] font-medium">
Days
</Heading>
<Heading
size="headingxl"
as="h2"
className="!font-inter text-[32px] font-bold tracking-[1.28px] md:text-[30px] sm:text-[28px]"
>
03
</Heading>
</div>
<Img src="images/img_semiclone.svg" alt="Semiclone" className="mb-[18px] h-[16px] self-end" />
<div className="flex flex-col items-start">
<Heading size="textxs" as="p" className="text-[12px] font-medium">
 Hours
</Heading>
<Heading
size="headingxl"
as="h2"
className="!font-inter text-[32px] font-bold tracking-[1.28px] md:text-[30px] sm:text-[28px]"
>
23
                            </Heading>
                        </div>
                        <Img src="images/img_semiclone.svg" alt="Semiclone" className="mb-[18px] h-[16px] self-end" />
<div className="flex flex-col items-start">
<Heading size="textxs" as="p" className="text-[12px] font-medium">
Minutes
</Heading>
<Heading
size="headingxl"
as="h2"
className="!font-inter text-[32px] font-bold tracking-[1.28px] md:text-[30px] sm:text-[28px]"
>
19
</Heading>
</div>
<Img src="images/img_semiclone.svg" alt="Semiclone" className="mb-[18px] h-[16px] self-end" />
<div className="flex flex-1 flex-col items-start justify-center">
<Heading size="textxs" as="p" className="text-[12px] font-medium">
Seconds
</Heading>
<Heading
size="headingxl"
as="h2"
className="!font-inter text-[32px] font-bold tracking-[1.28px] md:text-[30px] sm:text-[28px]"
>
56
</Heading>
</div>
</div>
</div>
<div className="mb-2.5 flex gap-2 self-end">
<Button color="gray_ 100" size="3xl" className="w-[46px] rounded-[22px] px-2.5">
<Img src="images/img_arrow_left.svg" />
</Button>
<Button color="gray_100" size="3xl" className="w-[46px] rounded-[22px] px-2.5">
<Img src="images/img_arrow_right_gray 900.svg" />
</Button>
</div>
</div>
</div>
<div className="mx-auto flex w-full overflow-x-scroll">
<Slider
autoPlay={false}
autoPlayInterval={2000}
responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
disableDotsControls
activeIndex={sliderState}
onSlideChanged={(e) => {
setSliderState(e?.item);
}}
ref={sliderRef}
items={[...Array(3)].map(() => (
<React.Fragment key={Math.random()}>
<div className="flex gap-[30px] md:flex-col">
<div className="container-xs flex gap-[30px] md:flex-col md:px-5">
<div className="flex w-full flex-col gap-4">
<div className="relative h-[250px] rounded bg-gray-100 p-3 md:h-auto">
<Button color="orange_700" size="xs" className="min-w-[54px] rounded px-3">
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
<Img
src="images/img_g92_ 2_500x500_1.png"
alt="G922500x500one"
className="h-[152px] w-[78%] object-contain"
/>
</div>
</div>
<div className="flex flex-col items-start gap-1.5">
<Heading as="p" className="text-[16px] font-medium">
HAVIT HV-G92 Gamepad
</Heading>
<div className="flex flex-wrap gap-3 self-stretch">
<Heading as="p" className="text-[16px] font-medium !text-orange-700">
$120
</Heading>
<Heading as="p" className="text-[16px] font-medium !text-gray-900_7f line-through">
$160
</Heading>
</div>
<div className="flex items-center gap-2 self-stretch">
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
<div className="flex w-full flex-col gap-4">
<div className="rounded bg-gray-100">
<div className="mt-3 flex flex-col gap-3.5">
<div className="relative mx-3 h-[182px] md:mx-0 md:h-auto">
<Button color="orange_700" size="xs" className="min-w-[54px] rounded px-3">
-35%
</Button>
<div className="absolute left-0 right-0 top-0 mx-auto flex flex-1 flex-col items-end gap-2">
<Button shape="round" className="w-[34px] rounded-[16px] px-1">
<Img src="images/img wishlist.svg" />
</Button>
<Button shape="round" className="w-[34px] rounded-[16px] px-1">
<Img src="images/img_quick_view.svg" />
</Button>
</div>
<div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-max flex-1 px-7 py-[38px] sm:p-5">
<Img
src="images/img_ak_900_01_500x500.png"
alt="AkS900one"
className="h-[100px] w-full object-cover md:h-auto"
/>
</div>
</div>
<Button
color="gray_900"
size="xl"
className="self-stretch rounded-bl rounded-br px-[34px] font-medium sm:px-5"
>
Ajouter au Panier
</Button>
</div>
</div>
<div className="flex flex-col items-start gap-1.5">
<Heading as="p" className="text-[16px] font-medium">
AK-900 Wired Keyboard
</Heading>
<div className="flex flex-wrap gap-3 self-stretch">
<Heading as="p" className="text-[16px] font-medium !text-orange-700">
$960
</Heading>
<Heading as="p" className="text-[16px] font-medium !text-gray-900_7f line-through">
$1160
</Heading>
</div>
<div className="flex items-center gap-2 self-stretch">
<RatingBar
value={4}
isEditable={true}
color="#00000071"
activeColor="#ffad33"
size={20}
className="flex gap-2.5"
/>
<Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
(75)
</Heading>
</div>
</div>
</div>
<div className="flex w-full flex-col gap-4">
<div className="relative h-[250px] rounded bg-gray-100 p-3 md:h-auto">
<Button color="orange_700" size="xs" className="min-w-[54px] rounded px-3">
-30%
</Button>
<div className="absolute left-0 right-0 top-3 mx-auto flex flex-1 flex-col items-end gap-2">
<Button shape="round" className="w-[34px] rounded-[16px] px-1">
<Img src="images/img_wishlist.svg" />
</Button>
<Button shape="round" className="w-[34px] rounded-[16px] px-1">
<Img src="images/img_quick_view.svg" />
</Button>
</div>
<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 p-6 sm:p-5">
<Img
src="images/img_g27cq4_500x500_1.png"
alt="G27cq4500x500"
className="h-[128px] w-[86%] object-contain"
/>
</div>
</div>
<div className="flex flex-col items-start gap-1.5">
<Heading as="p" className="text-[16px] font-medium">
IPS LCD Gaming Monitor
</Heading>
<div className="flex flex-wrap gap-3 self-stretch">
<Heading as="p" className="text-[16px] font-medium !text-orange-700">
$370
</Heading>
<Heading as="p" className="text-[16px] font-medium !text-gray-900_7f line-through">
 $400
</Heading>
</div>
<div className="flex items-center gap-2 self-stretch">
<RatingBar
value={5}
isEditable={true}
color="#00000071"
activeColor="#ffad33"
size={20}
className="flex gap-2.5"
></RatingBar>
<Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
(99)
</Heading>
</div>
</div>
</div>
<div className="flex w-full flex-col gap-4">
<div className="relative h-[250px] rounded bg-gray-100 p-3 md:h-auto">
<Button color="orange_700" size="xs" className="min-w-[54px] rounded px-3">
-25%
</Button>
<div className="absolute left-0 right-0 top-3 mx-auto flex flex-1 flex-col items-end gap-2">
<Button shape="round" className="w-[34px] rounded-[16px] px-1">
<Img src="images/img_wishlist.svg" />
</Button>
<Button shape="round" className="w-[34px] rounded-[16px] px-1">
<Img src="images/img_quick_view.svg" />
</Button>
</div>
<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 px-14 md:px-5">
<Img
src="images/img_sam_moghadam_kh.png"
alt="Sammoghadamkh"
className="h-[180px] w-[80%] object-contain"
/>
</div>
</div>
<div className="flex flex-col items-start gap-1.5">
<Heading as="p" className="text-[16px] font-medium">
S-Series Comfort Chair{" "}
</Heading>
<div className="flex flex-wrap gap-3 self-stretch">
<Heading as="p" className="text-[16px] font-medium !text-orange-700">
$375
</Heading>
<Heading as="p" className="text-[16px] font-medium !text-gray-900_7f line-through">
$400
</Heading>
</div>
<div className="flex items-center gap-2 self-stretch">
<RatingBar
value={4}
isEditable={true}
color="#00000071"
activeColor="#ffad33"
size={20}
className="flex gap-2.5"
/>
<Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
(99)
</Heading>
</div>
</div>
</div>
</div>
<div className="flex w-[18%] flex-col gap-4 md:w-full md:px-5">
<div className="relative h-[250px] rounded bg-gray-100 p-3 md:h-auto">
<Button color="orange_700" size="xs" className="min-w-[54px] rounded px-3">
-25%
</Button>
<div className="absolute left-0 right-0 top-3 mx-auto flex flex-1 flex-col items-end gap-2">
<Img src="images/img_user.svg" alt="User" className="h-[34px]" />
<Img src="images/img_eye.svg" alt="Eye" className="h-[34px]" />
</div>
<div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 px-14 md:px-5">
<Img
src="images/img_sam_moghadam_kh.png"
alt="Sammoghadamkh"
className="h-[180px] w-[80%] object-contain"
/>
</div>
</div>
<div className="flex flex-col items-start gap-2">
<Heading as="p" className="text-[16px] font-medium">
S-Series Comfort Chair{" "}
</Heading>
<div className="flex flex-wrap gap-3 self-stretch">
<Heading as="p" className="text-[16px] font-medium !text-orange-700">
$375
</Heading>
<Heading as="p" className="text-[16px] font-medium !text-gray-900_7f line-through">
$400
</Heading>
</div>
<div className="flex gap-2 self-stretch">
<RatingBar
value={4}
isEditable={true}
color="#00000071"
activeColor="#ffad33"
size={20}
className="flex gap-2.5"
></RatingBar>
<Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7">
(99)
</Heading>
</div>
</div>
</div>
</div>
</React.Fragment>
))}
/>
</div>
</div>
<div className="container-xs flex flex-col items-center px-14 md:px-5">
<Button color="gray 900_01" size="4xl" className="min-w-[230px] rounded px-[34px] font-medium sm:px-5">
Tous les Produits
</Button>
</div>
</div>
);
}

