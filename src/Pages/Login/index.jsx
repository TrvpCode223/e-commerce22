import { Helmet } from "react-helmet";
import { Heading, Button, Input, Img, SelectBox } from "../../components";
import Footer from "../../components/Footer";
import  CloseSVG  from "../../components/Input/close";
import React from "react";
const dropDownOptions = [
{ label: "Optionl", value: "optionl" },
{ label: "Option2", value: "option2" },
{ label: "Option3", value: "option3" },
];
export default function LogInPage() {
const [searchBarValue8, setSearchBarValue8] = React.useState("");
return (
<>
<Helmet>
<title>E-Commerce</title>
<meta name="description" content="Web site created using create-react-app" />
</Helmet>
<div className="w-full bg-white-a700">
<header className="flex flex-col gap-[38px]">
<div className="flex justify-center bg-gray-900 py-3">
<div className="container-xs flex justify-between gap-5 md:flex-col md:px-5">
<div className="ml-[308px] flex flex-wrap gap-2 md:ml-8">
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
className="w-[8%] gap-1 px-3 text-gray-50 md:w-full"
/>
</div>
</div>
<div>
<div className="flex flex-col items-center gap-4">
<div className="container-xs md:px-5">
<div className="flex items-center justify-between gap-5 md:flex-col">
<Img
src="images/img_header_logo.png"
alt="Headerlogo"
className="h-[30px] w-[132px] object-contain"
/>
<ul className="flex flex-wrap gap-12">
<li>
<a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank">
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
<Input
size="sm"
shape="round"
name="search"
placeholder={ "Qu'est-ce que tu cherches?"}
value={searchBarValue8}
onChange={(e) => setSearchBarValue8(e.target.value)}
suffix={
searchBarValue8?.length > 0 ? (
<CloseSVG onClick={() => setSearchBarValue8("")} height={24} width={24} fillColor="#000000ff" />
): (
<Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px] object-contain" />
)
}
className="mr-2 w-[22%] gap-[34px] rounded md:mr-0 md:w-full"
/>
</div>
</div>
<Img src="images/img_line_3.svg" alt="Linethree" className="h-px w-full" />
</div>
</div>
</header>
<div className="mt-[600px] flex items-center md:flex-col">
<div className="flex flex-1 justify-center md:self-stretch md:px-5">
<div className="flex rounded-br rounded-tr bg-blue_gray-100">
<Img
src="images/img_dl_beatsnoop_1.jpg"
alt="Dlbeatsnoopone"
className="mt-[74px] h-[706px] w-full object-cover md:h-auto"
/>
                    </div>
                </div>
<div className="flex w-[40%] flex-col gap-10 px-14 md:w-full md:px-5">
<div className="flex flex-col gap-12">
<div className="flex flex-col items-start gap-2">
<Heading
size="text3xl"
as="h1"
className="!font-inter text-[36px] font-medium tracking-[1.44px] md:text-[34px] sm:text-[32px]"
>
Log in to Exclusive
</Heading>
<Heading as="h2" className="text-[16px] font-normal">
Enter your details below
</Heading>
</div>
<div className="flex flex-col items-start gap-10">
<Input
size="xs"
shape="square"
type="email"
name="phoneNumber"
placeholder={ "Email or Phone Number" }
className="w-[84%] px-3 text-black-900_66"
/>
<Input
color="black_900_01"
size="xs"
variant="underline"
shape="square"
type="password"
name="password"
placeholder={ "Password" }
className="w- [84%] !border-b px-3"
/>
</div>
</div>
<div className="flex items-center justify-between gap-5">
<Button color="gray_ 900_01" size="4xl" className="min-w-[142px] rounded px-[34px] font-medium sm:px-5">
Log In
</Button>
<Heading as="h3" className="mr-[70px] text-[16px] font-normal !text-orange-700">
Forget Password?
</Heading>
</div>
</div>
</div>
<Footer className="mt-[140px]" />
</div>
    </>
);
}
