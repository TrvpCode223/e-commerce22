import { Helmet } from "react-helmet";
import { Button, Heading, Img, Input, SelectBox } from "../../components";
import Footer from "../../components/Footer";
import  CloseSVG  from "../../components/Input/close";
import WishlistCart from "../../components/WishlistCart";
import React, { Suspense } from "react";
const dropDownOptions = [
{ label: "Optionl", value: "optionl" },
{ label: "Option2", value: "option2" },
{ label: "Option3", value: "option3" },
];
export default function WishlistPage() {
const [searchBarValue10, setSearchBarValue10] = React.useState("");
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
<div className="ml-[388px] flex flex-wrap gap-2 md:ml-0">
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
placeholder={ "English"}
options={dropDownOptions}
className="w-[8%] gap-1 px-3 text-gray-50 md:w-full"
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
<ul className="flex flex-wrap gap-12">
<li>
<a href="https://www.youtube.com/embed/bv8Fxk0sz71" target="_blank" rel="noreferrer">
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
value={searchBarValue10}
onChange={(e) => setSearchBarValue10(e.target.value)}
suffix={
searchBarValue10?.length > 0 ? (
<CloseSVG
onClick={() => setSearchBarValue10("")}ù
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
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
<Img src="images/img_cart1_gray_900.svg" alt="Cartone" className="h-[32px]" />
</a>
<a href="#">
<Img src="images/img_user_black_900_01.svg" alt="User" className="h-[32px]" />
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
<div className="flex flex-col gap-20 md:gap-[600px] sm:gap-10">
<div className="flex flex-col gap-[60px] sm:gap-[30px]">
<div className="flex items-center justify-between gap-5">
<Heading size="textlg" as="h1" className="text-[20px] font-normal">
Wishlist (4)
</Heading>
<Button
color="black_900_7f"
size="4xl"
variant="outline"
className="min-w-[222px] rounded !border px-[33px] font-medium sm:px-5"
>
Move All To Bag
</Button>
</div>
<div className="flex gap-[30px] md:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{[...Array(4)].map((d, index) => (
<WishlistCart key={"listicondelete" + index} ></WishlistCart>
))}
</Suspense>
</div>
</div>
<div className="flex flex-col gap-[60px] sm:gap-[30px]">
<div className="flex items-center justify-center">
<div className="flex flex-1 items-center gap-4">
<div className="h-[40px] w-[20px] rounded bg-orange-700" ></div>
<Heading size="textlg" as="h2" className="text-[20px] font-normal">
Just For You
</Heading>
</div>
<Button
color="black_900_7f"
size="4xl"
variant="outline"
className="min-w-[150px] rounded !'border px-[33px] font-medium sm:px-5"
>
See All
</Button>
</div>
<div className="flex gap-[30px] md:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{[...Array(4)].map((d, index) => (
<WishlistCart key={"listquickview" + index} ></WishlistCart>
))}
</Suspense>
</div>
</div>
</div>
</div>
<Footer className="mt-[138px] self-stretch" ></Footer>
</div>
</>
);
}
