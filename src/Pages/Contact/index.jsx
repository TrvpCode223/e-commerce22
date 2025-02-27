import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Img, Heading, SelectBox } from "../../components";
import ContactInformation from "../../components/ContactInformation";
import Footer from "../../components/Footer";
import  CloseSVG  from "../../components/Input/close";
import React from "react";
const dropDownOptions = [
{ label: "Optionl", value: "optionl" },
{ label: "Option2", value: "option2" },
{ label: "Option3", value: "option3" },
];
export default function ContactPage() {
const [searchBarValue34, setSearchBarValue34] = React.useState("");
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
<Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-gray-50 underline™">
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
src="images/img_header_logo.png"
alt="Headerlogo"
className="h-[30px] w-[132px] object-contain"
                                />
<div className="flex w-[76%] items-center justify-between gap-5 md:w-full md:flex-col">
<ul className="flex gap-12">
<li>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
<Heading as="p" className="text-[16px] font-normal">
Accueil
</Heading>
</a>
</li>
<li>
<a href="#">
<div className="flex flex-col items-center">
<Heading as="p" className="text-[16px] font-normal">
Contact
</Heading>
<Img src="images/img_underline.svg" alt="Underline" className="h-px w-full" />
</div>
</a>
</li>
<li>
<a href="#">
<Heading as="p" className="text-[16px] font-normal">
A propos{" "}
</Heading>
</a>
</li>
</ul>
<div className="flex w-[46%] items-center justify-center md:w-full sm:flex-col">
<Input
size="sm"
shape="round"
name="search"
placeholder={"Qu'est-ce que tu cherches?"}
value={searchBarValue34}
onChange={(e) => setSearchBarValue34(e.target.value)}
suffix={
searchBarValue34.length > 0 ? (
<CloseSVG
onClick={() => setSearchBarValue34("")}
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
<a href="#">
<Img src="images/img_wishlist.svg" alt="Wishlist" className="ml-6 h-[32px] sm:ml-0 sm:w-full" />
</a>
<a href="#">
<Img
src="images/img_cart1_gray_900.svg"
alt="Cartone"
className="ml-4 h-[32px] sm:ml-0 sm:w-full"
/>
</a>
<a href="#">
<Img
src="images/img_user_black_900_01.svg"
alt="User"
className="ml-4 h-[32px] sm:ml-0 sm:w-full"
/>
</a>
</div>
</div>
</div>
</div>
<Img src="images/img_line_3.svg" alt="Linethree" className="h-px w-full" />
</div>
</div>
</header>
<div className="container-xs mt-20 md:px-5">
<div className="flex flex-col gap-20 md:gap-[60px] sm:gap-10">
<div className="flex items-center gap-3">
<Heading size="texts" as="hl" className="text-[14px] font-normal !text-black-900_7f">
Home
</Heading>
<div className="h-[10px] w-[6px] rotate-[117deg] bg-black-900_7f" />
<Heading size="texts" as="h2" className="text-[14px] font-normal">
Cantact
</Heading>
</div>
<div className="flex gap-[30px] md:flex-col">
<div className="w-[30%] md:w-full">
<div className="rounded bg-white-a700 px-[34px] py-10 shadow-xs sm:p-5">
<div className="mb-2.5 flex flex-col gap-8">
<ContactInformation className="mr-2" />
<Img src="images/img_underline.svg" alt="Underline" className="h-px w-full flex-1 self-stretch" />
<ContactInformation callToUsText="Write To US" className="mr-5" />
</div>
</div>
</div>
<div className="flex-1 md:self-stretch">
<div className="flex flex-col items-end gap-8 rounded bg-white-a700 px-[30px] py-10 shadow-xs sm:p-5">
<div className="flex justify-end gap-4 self-stretch md:flex-col">
<Input
shape="round"
type="text"
name="name"
placeholder={ "Your Name *" }
className="w-full rounded px-3.5"
/>
<Input
shape="round"
type="email"
name="email"
placeholder={ "Your Email *" }
className="w-full rounded px-3.5"
/>
<Input
shape="round"
type="number"
name="phone"
placeholder={ "Your Phone *" }
className="w-full rounded px-3.5"
/>
</div>
<TextArea
shape="round"
name="placeboxinfo"
placeholder={ "Your Massage" }
className="self-stretch rounded px-3.5 text-black-900_7f"
/>
<Button
color="gray_900_01"
size="4xl"
className="min-w-[214px] rounded px-[34px] font-medium sm:px-5"
>
Send Massage
</Button>
</div>
</div>
</div>
</div>
</div>
<Footer className="mt-[140px] self-stretch" />
</div>
</>
);
}

