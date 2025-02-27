
import { Helmet } from "react-helmet";
import { Heading, Img, Slider, Button, Input, SelectBox } from "../../components";
import Footer from "../../components/Footer";
import  CloseSVG from "../../components/Input/close";
import AccountdropdownwithaccountColumnEleven from "./AccountdropdownwithaccountColumnEleven";
import AccountdropdownwithaccountColumnFive from "./AccountdropdownwithaccountColumnFive";
import AccountdropdownwithaccountColumnFourteen from "./AccountdropdownwithaccountColumnFourteen";
import AccountdropdownwithaccountColumnOne from "./AccountdropdownwithaccountColumnOne";
import AccountdropdownwithaccountRowFour from "./AccountdropdownwithaccountRowFour";
import AccountdropdownwithaccountRowSix from "./AccountdropdownwithaccountRowSix";
import React from "react";
const dropDownOptions = [
{ label: "Option1", value: "option1" },
{ label: "Option2", value: "option2" },
{ label: "Option3", value: "option3" },
];
export default function AccountDropdownWithaccountPage() {
const [sliderState, setSliderState] = React.useState(0);
const sliderRef = React.useRef(null);
const [sliderState1, setSliderStatel] = React.useState(9);
const sliderRef1 = React.useRef(null);
const [searchBarValue9, setSearchBarValue9] = React.useState("");
return (
<>
<Helmet>
<title>E-Commerce</title>
<meta name="description" content="Web site created using create-react-app" />
</Helmet>
<div className="relative w-full content-center md:h-auto">
<div className="w-full bg-white-a700">
<header className="flex flex-col items-center">
<div className="flex justify-center self-stretch bg-gray-900 py-3">
<div className="container-xs flex justify-end md:px-5">
<div className="flex w-[74%] justify-between gap-5 md:w-full md:flex-col">
<div className="flex flex-wrap gap-2">
<Heading size="texts" as="p" className="self-end text-[14px] font-normal !text-gray-50">
Summer Sale For All Swim Suits And Free Express Delivery - OFF 58%!
</Heading>
<Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-gray-50 underline">
ShopNow
</Heading>
</div>
<SelectBox
shape="square"
indicator={<Img src="images/img_dropdown.svg" alt="Dropdown" className="h-[24px] w-[24px]" />}
name="language"
placeholder={ "English"}
options={dropDownOptions}
className="w-[8%] gap-1 px-3 text-gray-50 md:w-full"
/>
                            </div>
                        </div>
                    </div>
                    <div className="container-xs mt-10 md:px-5">
<div className="mr-4 flex items-center justify-between gap-5 md:mr-8 md:flex-col">
<Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[30px] w-[132px] object-contain" />
<div className="flex w-[76%] items-center justify-between gap-5 md:w-full md:flex-col">
<ul className="flex gap-12">
<li>
<a href="#">
<div className="flex flex-col items-center">
<Heading as="p" className="text-[16px] font-normal">
Accueil
</Heading>
<Img src="images/img_underline.svg" alt="Underline" className="mx-1 h-px w-[48px] md:mx-0" />
</div>
</a>
</li>
<li>
<a href="#">
<Heading as="p" className="text-[16px] font-normal">
Contact
</Heading>
</a>
</li>
<li>
<a href="#">
<Heading as="p" className="text-[16px] font-normal">
A propos
</Heading>
</a>
</li>
</ul>
<div className="flex w-[46%] items-center justify-center gap-6 md:w-full sm:flex-col">
<Input
size="sm"
shape="round"
name="search"
placeholder={ "Qu'est-ce que tu cherches?"}
value={searchBarValue9}
onChange={(e) => setSearchBarValue9(e.target.value)}
suffix={
searchBarValue9?.length > 0 ? (
<CloseSVG
onClick={() => setSearchBarValue9("")}
height={24}
width={24}
fillColor="#00000eff"
/>
): (
<Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px] object-contain" />
)
}
className="flex-grow gap-[34px] rounded"
/>
<div className="flex w-[32%] justify-center gap-4 sm:w-full">
<a href="#">
<Img src="images/img_wishlist.svg" alt="Wishlist" className="h-[32px]" />
</a>
<div className="relative h-[32px] flex-1">
<a href="#">
<Img
src="images/img_cart1.svg"
alt="Cartone"
className="absolute bottom-[-0.46px] left-px m-auto h-[24px]"
/>
</a>
<div className="absolute right-px top-[2.46px] m-auto h-[16px] w-[16px] rounded-lg bg-orange-700" ></div>
<Heading
size="textxs"
as="p"
className="absolute right-1.5 top-0 m-auto text-[12px] font-normal !text-gray-50"
>
2
</Heading>
</div>
<a href="#">
<Img
src="images/img_user_orange_700_32x32.svg"
alt="User"
className="h-[32px] w-[32%] rounded-[58%]"
/>
</a>
</div>
</div>
</div>
</div>
</div>
<Img src="images/img_line_3.svg" alt="Linethree" className="mt-4 h-px w-full" />
</header>
<div className="flex flex-col items-center gap-[140px] md:gap-[105px] sm:gap-[70px]">
<div className="container-xs md:px-5">
<div className="flex items-center justify-center md:flex-col">
<div className="flex w-[18%] flex-col items-start gap-4 self-end md:w-full">
<div className="flex justify-between gap-5 self-stretch">
<Heading as="h1" className="text-[16px] font-normal">
Woman’s Fashion
</Heading>
<Img src="images/img_dropdown_gray_900.svg" alt="Dropdown" className="h-[24px]" />
</div>
<div className="flex justify-between gap-5 self-stretch">
<Heading as="h2" className="text-[16px] font-normal">
Men’s Fashion
</Heading>
<Img src="images/img_dropdown_gray_900.svg" alt="Dropdown" className="h-[24px]" />
</div>
<Heading as="h3" className="text-[16px] font-normal">
 Electronics
</Heading>
<Heading as="h4" className="text-[16px] font-normal">
Home & Lifestyle
</Heading>
<Heading as="h5" className="text-[16px] font-normal">
Medicine
</Heading>
<Heading as="h6" className="text-[16px] font-normal">
Sports & Outdoor
</Heading>
<Heading as="p" className="text-[16px] font-normal">
Baby’s & Toys
</Heading>
<Heading as="p" className="text-[16px] font-normal">
Groceries & Pets
</Heading>
<Heading as="p" className="text-[16px] font-normal">
Health & Beauty
</Heading>
</div>
<div className="ml-4 h-[384px] w-px bg-black-900_4c md:ml-0 md:h-px md:w-[384px]" />
<div className="relative h-[384px] w-[80%] content-end md:h-auto md:w-full">
<div className="slider1200pxapp mx-auto flex w-full">
<Slider
autoPlay
autoPlayInterval={2000}
responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                                        renderDotsItem={( props ) => {
                                            return props?.isActive ? (
                                                <div className="mr-[11px] inline-block h-[14px] w-[14px] cursor-pointer rounded-[50%] border-2 border-solid border-white-a700" />
                                            ) : (
                                                    <div className="mr-[11px] inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-white-a700_7f" />
                                                );
                                        }}
activeIndex={sliderState1}
                                        onSlideChanged={( e ) => {
                                            setSliderStatel( e?.item );
                                        }}
ref={sliderRef1}
items={[...Array(3)].map(() => (
<React.Fragment key={Math.random()}>
<div className="flex bg-black-900_01">
<div className="mt-4 flex w-full items-center justify-center gap-[19px] md:flex-col">
<div className="flex w-[34%] flex-col gap-5 md:w-full">
<div className="flex items-center gap-6">
<Img
src="images/img_1200px_apple_gray_logo.png"
alt="1200pxapple"
className="h-[48px] object-cover"
/>
<Heading as="p" className="mb-2 self-end text-[16px] font-normal !text-gray-50">
iPhone 14 Series
</Heading>
</div>
<Heading
size="heading3xl"
as="h1"
className="!font-inter text-[48px] font-semibold leading-[60px] tracking-[1.92px] !text-gray-50 md:text-[44px] sm:text-[38px]"
>
Up to 10% off Voucher
</Heading>
<div className="flex items-center gap-[9px]">
<div className="flex w-[28%] flex-col items-center gap-1">
<Heading as="p" className="text-[16px] font-medium !text-gray-50">
Shop Now
</Heading>
<div className="h-px w-full self-stretch bg-gray-58" />
</div>
<Img
src="images/img_arrow_right_gray_50.svg"
alt="Arrowright"
className="h-[24px] self-start"
/>
</div>
</div>
<div className="relative h-[328px] w-[58%] content-center md:h-auto md:w-full">
<Img
src="images/img_hero_endframe.png"
alt="Image"
className="h-[328px] flex-1 object-cover"
/>
<div className="absolute bottom-[13px] left-6 m-auto h-[10px] w-[18px] rounded-[5px] bg-orange-700" />
</div>
</div>
</div>
</React.Fragment>
))}
/>
</div>
<div className="absolute right-[-0.58px] top- m-auto h-[288px] w-[24%]" ></div>
</div>
</div>
</div>
<div className="flex flex-col items-center self-stretch">
<AccountdropdownwithaccountColumnOne ></AccountdropdownwithaccountColumnOne>
<div className="container-xs mt-[60px] md:px-5">
<div className="flex flex-col gap-[78px] md:gap-[58px] sm:gap-[39px]">
<div className="h-[0.5px] rotate-[180deg] bg-black-900_4c" />
<div className="flex flex-col gap-[70px] md:gap-[52px] sm:gap-[35px]">
<div className="flex flex-col gap-[60px] sm:gap-[30px]">
<div className="flex items-center justify-between gap-5 md:flex-col">
<div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
<div className="flex items-center gap-4 self-stretch">
<div className="h-[49px] w-[20px] rounded bg-orange-700" />
<Heading
size="headings"
as="h6"
className="self-end text-[16px] font-semibold !text-orange-700"
>
Categories
</Heading>
</div>
<Heading
size="heading2x1"
as="h1"
className="!font-inter text-[36px] font-semibold tracking-[1.44px] md:text-[34px] sm:text-[32px]"
>
Browse By Category
</Heading>
</div>
<div className="flex gap-2 self-end">
<Button
onClick={() => {
sliderRef?.current?.slidePrev();
}}
color="gray_100"
size="3x1"
className="w-[46px] rounded-[22px] px-2.5"
>
<Img src="images/img_arrow_left.svg" />
</Button>
<Button
onClick={() => {
sliderRef?.current?.slideNext();
}}
color="gray_100"
size="3xl"
className="w-[46px] rounded-[22px] px-2.5"
>
<Img src="images/img_arrow_right_gray 900.svg" />
</Button>
</div>
</div>
<div className="mx-auto flex w-full gap-[30px] md:mx-0 md:flex-col">
<Slider

responsive={{ 0: { items: 1 }, 551: { items: 2 }, 1051: { items: 6 } }}
disableDotsControls
activeIndex={sliderState}
onSlideChanged={(e) => {
setSliderState(e?.item);
}}
ref={sliderRef}
items={[...Array(18)].map(() => (
<React.Fragment key={Math.random()}>
<div className="px-[15px]">
<div className="flex flex-col items-center justify-center gap-4 rounded border border-solid border-black-900_4c p-6 sm:p-5">
<Img
src="images/img_category_cellphone.svg"
alt="Category"
className="h-[56px] w-[46%] object-contain"
/>
<Heading as="p" className="text-[16px] font-normal">
Phones
</Heading>
</div>
</div>
</React.Fragment>
))}
/>
</div>
</div>
<div className="h-[0.5px] rotate-[180deg] bg-black-900_4c" ></div>
</div>
</div>
</div>
<AccountdropdownwithaccountColumnFive ></AccountdropdownwithaccountColumnFive>
<AccountdropdownwithaccountRowFour ></AccountdropdownwithaccountRowFour>
<AccountdropdownwithaccountColumnEleven ></AccountdropdownwithaccountColumnEleven>
<AccountdropdownwithaccountColumnFourteen ></AccountdropdownwithaccountColumnFourteen>
<AccountdropdownwithaccountRowSix ></AccountdropdownwithaccountRowSix>
</div>
</div>
<Footer className="mt-[140px]" />
</div>
<div className="absolute bottom-[8%] right-[6%] m-auto h-[46px] w-[3%] rotate-[-90deg] rounded-[22px] object-contain"  />
</div>
</>
);
}


