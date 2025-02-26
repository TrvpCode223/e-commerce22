import { Helmet } from "react-helmet";
import { Button, Input, Heading, Img, CheckBox, SelectBox } from "../../components";
import BankOptions from "../../components/BankOptions";
import Footer from "../../components/Footer";
import  CloseSVG  from "../../components/Input/close";
import ProductDisplay from "../../components/ProductDisplay";
import React from "react";
const dropDownOptions = [
{ label: "Option1", value: "option1" },
{ label: "Option2", value: "option2" },
{ label: "Option3", value: "option3" },
];
export default function CheckOutPage() {
const [searchBarValue22, setSearchBarValue22] = React.useState("");
return (
<>
<Helmet>
<title>E-Commerce</title>
<meta name="description" content="Web site created using create-react-app" />
</Helmet>
<div className="flex w-full flex-col items-center bg-white-a700">
<header className="flex flex-col gap-10 self-stretch">
<div className="flex justify-center bg-gray-900 py-3">
<div className="container-xs flex justify-between gap-5 md:flex-col md:px-5">
<div className="ml-[308px] flex flex-wrap gap-2 md:ml-9">
<Heading size="texts" as="p" className="self-end text-[14px] font-normal !text-gray-50">
Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
</Heading>
<Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-gray-50 underline">
ShopNow
</Heading>
</div>
<SelectBox
shape="square"
indicator={<Img src="images/img_dropdown.svg" alt="Dropdown" className="h-[24px] w-[24px]" />}
name="language"
placeholder={ "English" }
options={dropDownOptions}
className="w- [8%] gap-1 px-3 text-gray-50 md:w-full"
/>
</div>
</div>
<div>
<div className="flex flex-col items-center gap-4">
<div className="container-xs md:px-5">
<div className="mr-4 flex items-center justify-between gap-5 md:mr-0 md:flex-col">
<Img
 sre="images/img_header_logo.png"
alt="Headerlogo"
 className="h-[30px] w-[132px] object-contain"
/>
<div className="flex w-[76%] items-center justify-between gap-5 md:w-full md:flex-col">
<ul className="flex flex-wrap gap-12">
<li>
<a href="#">
<Heading as="p" className="text-[16px] font-normal">
Accueil
</Heading>
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
placeholder={"Qu'est-ce que tu cherches?"}
value={searchBarValue22}
onChange={(e) => setSearchBarValue22(e.target.value)}
suffix={
searchBarValue22?.length > 0 ? (
<CloseSVG
onClick={() => setSearchBarValue22("")}
height={24}
width={24}
fillColor="#000000ff"
/>
) : (
<Img
src="images/img_search.svg"
alt="Search"
className="h-[24px] w-[24px] object-contain"
/>
)
}
className="flex-grow gap-[34px] rounded"
/>
<div className="flex w-[32%] justify-center gap-4 sm:w-full">
<div className="relative h-[32px] flex-1">
<a href="#">
<Img
src="images/img_favorite.svg"
alt="Favorite"
className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[18px]"
/>
</a>
<div className="absolute right-0 top-[-1.29px] m-auto flex w-[50%] flex-col items-start">
<Heading
size="textxs"
as="p"
className="relative z-[1] text-[12px] font-normal !text-gray-50"
>
4
</Heading>
<div className="relative mt-[-18px] h-[18px] w-[16px] rounded-lg bg-orange-700" ></div>
</div>
</div>
<div className="relative h-[32px] flex-1">
<a href="#">
<Img
src="images/img_cartl.svg"
alt="Cartone"
className="absolute bottom-[-0.46px] left-px m-auto h-[24px]"
/>
</a>
<div className="absolute right-px top-[2.46px] m-auto h-[16px] w-[16px] rounded-lg bg-orange-700" />
<Heading
size="textxs"
as="p"
className="absolute right-1.5 top-0 m-auto text-[12px] font-normal !text-gray-50"
>
2
</Heading>
</div>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
<Img src="images/img_user_black_ 900 01.svg" alt="User" className="h-[32px]" />
</a>
</div>
</div>
</div>
</div>
</div>
<Img src="images/img_line_3.svg" alt="Linethree" className="h-px w-full" />
</div>
</div>
</header>
<div className="container-xs mt-20 md:px-5">
<div>
<div className="flex flex-col gap-[72px] md:gap-[54px] sm:gap-9">
<div className="flex items-center sm:flex-col">
<Heading size="texts" as="hl" className="text-[14px] font-normal !text-black-900_7f">
Account
</Heading>
<div className="flex w-[10%] items-center justify-center gap-3 sm:w-full">
<div className="h-[10px] w-[6px] rotate-[117deg] bg-black-900_7f" ></div>
<Heading size="texts" as="h2" className="text-[14px] font-normal !text-black-908_7f">
My Account
</Heading>
</div>
<div className="ml-3 h-[10px] w-[6px] rotate-[117deg] bg-black-900_7f sm:ml-0 sm:h-[6px] sm:w-[10px]" ></div>
<Heading size="texts" as="h3" className="ml-3 text-[14px] font-normal !text-black-900_7f sm:ml-0">
Product
</Heading>
<div className="flex w-[8%] items-center justify-center gap-3 sm:w-full">
<div className="h-[10px] w-[6px] rotate-[117deg] bg-black-900_7f" ></div>
<Heading size="texts" as="h4" className="text-[14px] font-normal !text-black-900_7f">
View Cart
</Heading>
</div>
<div className="ml-3 h-[10px] w-[6px] rotate-[117deg] bg-black-900_7f sm:ml-0 sm:h-[6px] sm:w-[18px]" ></div>
<Heading size="texts" as="h5" className="ml-3 text-[14px] font-normal sm:ml-0">
CheckOut
</Heading>
</div>
<div className="flex items-start md:flex-col">
<div className="flex flex-1 flex-col items-start gap-8 self-center md:self-stretch">
<Heading
size="text3xl"
as="h6"
className="!font-inter text-[36px] font-medium tracking-[1.44px] md:text-[34px] sm:text-[32px]"
>
Billing Details
</Heading>
<div className="flex flex-col gap-6 self-stretch">
<div className="flex flex-col gap-8">
<div className="flex flex-col items-start gap-2">
<Heading as="p" className="text-[16px] font-normal !text-black-900_66">
<span className="text-black-900 66">First Name</span>
<span className="text-orange-700">*</span>
</Heading>
<Input size="xl" shape="round" name="firstName" className="w-[72%] rounded px-3.5" />
</div>
<div className="flex flex-col items-start gap-2">
<Heading as="p" className="text-[16px] font-normal !text-black-900_66">
Company Name
</Heading>
<Input size="xl" shape="round" name="name" className="w-[72%] rounded px-3.5" />
</div>
<div className="flex flex-col items-start gap-2">
<Heading as="p" className="text-[16px] font-normal !text-black-980_66">
<span className="text-black-900_66">Street Address</span>
<span className="text-orange-700">*</span>
</Heading>
<Input size="xl" shape="round" name="streetaddress" className="w-[72%] rounded px-3.5" />
</div>
<div className="flex flex-col items-start gap-2">
<Heading as="p" className="text-[16px] font-normal !text-black-980_66">
Apartment, floor, etc. (optional)
</Heading>
<Input size="xl" shape="round" name="edittext" className="w-[72%] rounded px-3.5" />
</div>
<div className="flex flex-col items-start gap-2">
<Heading as="p" className="text-[16px] font-normal !text-black-980_66">
<span className="text-black-900_66">Town/City</span>
<span className="text-orange-700">*</span>
</Heading>
<Input size="xl" shape="round" name="city" className="w-[72%] rounded px-3.5" />
</div>
<div className="flex flex-col items-start gap-2">
<Heading as="p" className="text-[16px] font-normal !text-black-980_66">
<span className="text-black-900_66">Phone Number</span>
<span className="text-orange-700">*</span>
</Heading>
<Input size="xl" shape="round" name="phoneNumber" className="w-[72%] rounded px-3.5" />
</div>
<div className="flex flex-col items-start gap-2">
<Heading as="p" className="text-[16px] font-normal !text-black-980_66">
<span className="text-black-900_66">Email Address</span>
<span className="text-orange-700">*</span>
</Heading>
<Input size="xl" shape="round" name="email" className="w-[72%] rounded px-3.5" />
</div>
</div>
<CheckBox
name="checkmark"
label="Save this information for faster check-out next time"
id="checkmark"
className="gap-4 text-[16px] text-black-900_01"
/>
</div>
</div>
<div className="mt-[116px] flex w-[44%] flex-col items-start gap-8 md:w-full">
<div className="mr-[102px] flex flex-col gap-8 self-stretch md:mr-0">
<ProductDisplay ></ProductDisplay>
<ProductDisplay productName="H1 Gamepad" productPrice="$1100" ></ProductDisplay>
</div>

<div className="flex flex-col gap-4 self-stretch">
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-4">
<div className="flex flex-col gap-4">
<div className="flex flex-wrap justify-between gap-5">
<Heading as="p" className="text-[16px] font-normal">
Subtotal:
</Heading>
<Heading as="p" className="mr-[104px] text-[16px] font-normal">
$1750
</Heading>
</div>
<Img
src="images/img_underline_black_900_01.svg"
alt="Underline"
className="h-px w-[80%] object-contain"
/>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Heading as="p" className="text-[16px] font-normal">
Shipping:
</Heading>
<Heading as="p" className="mr-[104px] text-[16px] font-normal">
Free
</Heading>
</div>
</div>
<Img
src="images/img_underline_black_900_01.svg"
alt="Underline"
className="h-px w-[80%] object-contain"
/>
</div>
<div className="flex flex-wrap justify-between gap-5">
<Heading as="p" className="text-[16px] font-normal">
Total:
</Heading>
<Heading as="p" className="mr-[104px] text-[16px] font-normal">
$1750
</Heading>
</div>
</div>
<div className="mr-[100px] flex flex-col gap-8 self-stretch md:mr-0">
<BankOptions className="gap-5" />
<BankOptions className="mr-[252px] gap-4 md:mr-0" />
</div>
<div className="flex gap-4 self-stretch sm:flex-col">
<Input
color="black_900_01"
size="2xl"
variant="outline"
shape="round"
name="coupon_code"
placeholder={ "Coupon Code" }
className="flex-grow rounded !border px-6 sm:px-5"
/>
<Button
color="gray_9S00_01"
size="4xl"
className="min-w-[210px] rounded px-[34px] font-medium sm:px-5"
>
Apply Coupon
</Button>
</div>
<Button
color="gray_900_01"
size="4xl"
className="min-w-[190px] rounded px-[34px] font-medium sm:px-5"
>
Place Order
</Button>
</div>
</div>
</div>
</div>
</div>
<Footer className="mt-[140px] self-stretch" ></Footer>
</div>
</>
);
}
