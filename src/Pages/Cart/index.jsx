import { Helmet } from "react-helmet";
import { Button, Heading, Img, Input, SelectBox } from "../../components";
import Footer from "../../components/Footer";
import  CloseSVG  from "../../components/Input/close";
import  ReactTable  from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
const dropDownOptions = [
{ label: "Optionl", value: "optionl" },
{ label: "Option2", value: "option2" },
{ label: "Option3", value: "option3" },
];
const tableData = [
{
rowproduct: "LCD Monitor",
rowprice: "$650",
rowquantity: "01",
rowsubtotal: "$650",
iconcancelOne: "images/img_icon_cancel.svg",
},
    {
        rowproduct: "H1 Gamepad",
        rowprice: "$550",
        rowquantity: "2",
        rowsubtotal: "$1100",
    },
];
export default function CartPage() {
const [searchBarValuel2, setSearchBarValuel2] = React.useState("");
const tableColumns = React.useMemo(() => {
const tableColumnHelper = createColumnHelper();
return [
tableColumnHelper.accessor("rowproduct", {
cell: (info) => (
<div className="flex justify-center px-2.5">
<div className="flex w-[90%] items-center justify-center gap-5 md:w-full">
<div className="relative h-[58px] w-[40%]">
<Img
src="images/img_monitor_cart_small.png"
alt="Monitorcart"
className="absolute bottom-0 right-0 m-auto h-[54px] flex-1 object-cover"
/>
<Img
src={info.row.original.iconcancelOne}
alt="Iconcancel"
className="absolute left-0 top-0 m-auto h-[24px]"
/>
</div>
<Heading as="p" className="mb-3.5 self-end text-[16px] font-normal">
{info.getValue()}
</Heading>
</div>
</div>
    ),
    header: (info) => (
<div className="flex px-5 py-6 sm:py-5">
<Heading as="h3" className="text-[16px] font-normal">
Product
</Heading>
</div>
),
meta: { width: "216px" },
}),
tableColumnHelper.accessor("rowprice", {
cell: (info) => (
<div className="ml-[74px] flex px-[38px] sm:px-5">
<Heading as="p" className="text-[16px] font-normal">
{info.getValue()}
</Heading>
</div>
),
header: (info) => (
<div className="ml-[74px] flex p-6 sm:p-5">
<Heading as="h4" className="text-[16px] font-normal">
Price
</Heading>
</div>
),
meta: { width: "190px" },
}),
tableColumnHelper.accessor("rowquantity", {
cell: (info) => (
<div className="ml-[102px] flex flex-1 justify-center px-7 sm:px-5">
<div className="flex w-[32%] items-center justify-center gap-4 rounded border-[1.5px] border-solid border-black-900_66 p-1.5 md:w-full">
<Heading as="p" className="text-[16px] font-normal !text-gray-900">
{info.getValue()}
</Heading>
<div className="w-full">
<Img src="images/img_drop_up_small.svg" alt="Dropupsmall" className="h-[16px] w-full" />
<Img src="images/img_drop_down_small.svg" alt="Dropdownsmall" className="h-[16px] w-full" />
</div>
</div>
</div>
),
header: (info) => (
<div className="ml-[102px] flex flex-1 justify-center p-6 sm:p-5">
<Heading as="h5" className="text-[16px] font-normal">
Quantity
</Heading>
</div>
),
meta: { width: "278px" },
}),
tableColumnHelper.accessor("rowsubtotal", {
cell: (info) => (
<div className="ml-44 flex">
<Heading as="p" className="text-[16px] font-normal">
{info.getValue()}
</Heading>
</div>
),
header: (info) => (
<div className="ml-44 flex py-6 sm:py-5">
<Heading as="h6" className="text-[16px] font-normal">
Subtotal
</Heading>
</div>
),
meta: { width: "186px" },
}),
];
 }, []);
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
placeholder={ "Qu'est-ce que tu cherches?"}
value={searchBarValuel2}
onChange={(e) => setSearchBarValuel2(e.target.value)}
suffix={
searchBarValuel2?.length > 0 ? (
<CloseSVG
onClick={() => setSearchBarValuel2("")}
height={24}
width={24}
fillColor="#000000 ff"
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
<div className="relative mt-[-18px] h-[18px] w-[16px] rounded-lg bg-orange-700" >
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
<div className="absolute right-px top-[2.46px] m-auto h-[16px] w-[16px] rounded-lg bg-orange-700" ></div>
<Heading
size="textxs"
as="p"
className="absolute right-1.5 top-0 m-auto text-[12px] font-normal !text-gray-50"
>
2
</Heading>
</div>
<a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
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
<div className="flex flex-col gap-20 md:gap-[60px] sm:gap-10">
<div className="flex justify-center">
<Heading size="texts" as="h1" className="text-[14px] font-normal !text-black-900_7f">
Home
</Heading>
<div className="flex flex-1 items-center gap-3 px-3">
<div className="h-[10px] w-[6px] rotate-[117deg] bg-black-900_7f" />
<Heading size="texts" as="h2" className="text-[14px] font-normal">
Cart
</Heading>
</div>
</div>
<div className="flex flex-col gap-20 md:gap-[60px] sm:gap-108">
<div className="flex flex-col gap-6">
<ReactTable
size="xs"
variant="simple"
className="tableproduct md:block md:overflow-x-auto md:whitespace-nowrap"
bodyProps={{ className: "" }}
headerCellProps={{ className: "bg-white-a700" }}
headerProps={{ className: "shadow-xs" }}
rowDataProps={{ className: "bg-white-a700 shadow-xs" }}
cellProps={{ className: "rounded" }}
columns={tableColumns}
data={tableData}
/>
<div className="flex justify-between gap-5">
<Button
color="black_900_7f"
size="4xl"
variant="outline"
className="min-w-[218px] rounded !border px-[33px] font-medium sm:px-5"
>
Return To Shop
</Button>
<Button
color="black_900_7f"
size="4xl"
variant="outline"
className="min-w-[194px] rounded !border px-[33px] font-medium sm:px-5"
>
Update Cart
</Button>
</div>
</div>
<div className="flex items-start md:flex-col">
<div className="flex flex-1 gap-4 md:self-stretch sm:flex-col">
<Input
color="black_900_81"
size="2xl"
variant="outline"
shape="round"
name="coupon_code"
placeholder={" Coupon Code" }
className="w-[44%] rounded !border px-6 sm:w-full sm:px-5"
/>
<Button
color="gray_900_01"
size="4xl"
className="min-w-[210px] rounded px-[34px] font-medium sm:px-5"
>
Apply Coupon
</Button>
</div>
<div className="flex w-[40%] flex-col items-start justify-center self-center rounded border-[1.5px] border-solid border-black-900_01 px-6 py-7 md:w-full sm:p-5">
<Heading size="textlg" as="p" className="text-[20px] font-medium">
Cart Total
</Heading>
<div className="mt-5 flex flex-col gap-4 self-stretch">
<div className="flex flex-wrap justify-between gap-5">
<Heading as="p" className="text-[16px] font-normal">
Subtotal:
</Heading>
<Heading as="p" className="text-[16px] font-normal">
$1750
</Heading>
</div>
<Img src="images/img_underline_black_900_01.svg" alt="Underline" className="h-px" />
</div>
<div className="mt-4 flex flex-wrap justify-between gap-5 self-stretch">
<Heading as="p" className="text-[16px] font-normal">
Shipping:
</Heading>
<Heading as="p" className="text-[16px] font-normal">
Free
</Heading>
</div>
<div className="mt-4 flex flex-col gap-4 self-stretch">
<Img src="images/img_underline_black_900_01.svg" alt="Underline" className="h-px" />
<div className="flex flex-wrap justify-between gap-5">
<Heading as="p" className="text-[16px] font-normal">
Total:
</Heading>
<Heading as="p" className="text-[16px] font-normal">
$1750
</Heading>
</div>
</div>
<Button
color="gray_900_0o1"
size="4xl"
className="ml-16 mt-4 min-w-[260px] rounded px-[34px] font-medium md:ml-0 sm:px-5"
>
Procees to checkout
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
