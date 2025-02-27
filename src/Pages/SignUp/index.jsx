import { Helmet } from "react-helmet";
import { Img, Heading, Button, Input, SelectBox } from "../../components";
import Footer from "../../components/Footer";
import  CloseSVG  from "../../components/Input/close";
import React from "react";
const dropDownOptions = [
{ label: "Optionl", value: "optionl" },
{ label: "Option2", value: "option2" },
{ label: "Option3", value: "option3" },
];
export default function SignUpPage() {
const [searchBarValue5, setSearchBarValue5] = React.useState("");
return (
<>
<Helmet>
<title>E-Commerce</title>
<meta name="description" content="Web site created using create-react-app" />
</Helmet>
<div className="w-full bg-white-a70">
<header className="flex flex-col gap-[38px]">
<div className="flex justify-center bg-gray-900 py-3">
<div className="container-xs flex justify-between gap-5 md:flex-col md:px-5">
<div className="ml-[308px] flex flex-wrap gap-2 md:ml-0">
<Heading size="texts" as="p" className="self-end text-[14px] font-normal !text-gray-50">
Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
</Heading>
<Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-gray-50 underline">
Shophow
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
<div className="flex items-center justify-between gap-5 md:flex-col">
<Img
src="images/img_header_logo.png"
alt="Headerlogo"
className="h-[30px] w-[132px] object-contain"
/>
<ul className="flex gap-10 sm:flex-col">
<li>
<a href="https://www.youtube.com/embed/bv8Fxksz71" target="_blank" rel="noreferrer">
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
<li>
<a href="#">
<div className="flex flex-col items-center">
<Heading as="p" className="text-[16px] font-normal">
Connexion
</Heading>
<Img src="images/img_underline.svg" alt="Underline" className="mx-3 h-px w-[6px] md:mx-0" />
</div>
</a>
</li>
</ul>
<Input
size="sm"
shape="round"
name="search"
placeholder={ "Qu'est-ce que tu cherches2?"}
value={searchBarValue5}
onChange={(e) => setSearchBarValue5(e.target.value)}
suffix={
searchBarValue5.length > 0 ? (
<CloseSVG onClick={() => setSearchBarValue5("")} height={24} width={24} fillColor="#000000ff" />
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
<div className="mt-[60px] flex items-center md:flex-col">
<div className="flex flex-1 md:self-stretch md:px-5">
<div className="flex rounded-br rounded-tr bg-blue_gray-100">
<Img
src="images/img_dl_beatsnoop_1.jpg"
alt="Dlbeatsnoopone"
className="mt-[74px] h-[706px] w-full object-cover md:h-auto"
/>
</div>
</div>
<div className="flex w-[34%] flex-col gap-12 md:w-full md:px-5">
<div className="flex flex-col items-start gap-3">
<a href="#" className="md:text-[34px] sm:text-[32px]">
<Heading size="text3x1" as="hl" className="!font-inter text-[36px] font-medium tracking-[1.44px]">
Create an account
</Heading>
</a>
<Heading as="h2" className="text-[16px] font-normal">
Enter your details below
</Heading>
</div>
<div className="flex flex-col gap-10">
<div className="flex flex-col items-start gap-10">
<Input
size="xs"
shape="square"
type="text"
name="name"
placeholder={" Name" }
className="w-[72%] px-3 text-black-900_66"
/>
<Input
size="xs"
shape="square"
type="email"
name="phoneNumber"
placeholder={ "Email or Phone Number"}
className="w-[72%] px-3 text-black-9060_66"
/>
<Input
color="black_900_01"
size="xs"
variant="underline"
shape="square"
type="password"
name="password"
placeholder={ "Password" }
className="w-[72%] !border-b px-3"
/>
</div>
<div className="flex flex-col items-start gap-4">
<Button color="gray 900 01" size="4xl" className="min-w-[370px] rounded px-[34px] font-medium sm:px-5">
Create Account
</Button>
<div className="flex flex-col items-start gap-8 self-stretch">
<Button
color="black_900_66"
size="4x1"
variant="outline"
leftIcon={
<Img
src="images/img_icongoogle.svg"
alt="Icon-google"
className="h-[24px] w-[24px] object-contain"
/>
}
className="min-w-[370px] gap-4 rounded !border px-[33px] sm:px-5"
>
Sign up with Google
</Button>
<div className="mx-[60px] flex items-center justify-center self-stretch md:mx-0 sm:flex-col">
<Heading as="h3" className="text-[16px] font-normal !text-black-900_b2">
Already have account?
</Heading>
<div className="flex w-full flex-col items-start gap-1 px-4 sm:w-full">
<a href="https://www.youtube.com/embed/bv8Fxksz7I" target="_blank" rel="noreferrer">
<Heading as="h4" className="text-[16px] font-medium !text-black-900_b2">
Log in
</Heading>
</a>
<Img src="images/img_underline.svg" alt="Underline" className="h-px" />
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<Footer className="mt-[148px]" ></Footer>
</div>
    </>
);
    }
