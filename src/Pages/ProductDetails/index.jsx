import { Helmet } from "react-helmet";
import {
Heading,
Img,
Button,
Input,
Text,
RatingBar,
BreadcrumbLink,
Breadcrumb,
BreadcrumbItem,
} from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfileImage from "../../components/UserProfileImage";
import ProductdetailsColumnTwo from "./ProductdetailsColumnTwo";
import React, { Suspense } from "react";
const data = [
{ userImage: "images/img_image_57.png" },
{ userImage: "images/img_image_58.png" },
{ userImage: "images/img_image_61.png" },
{ userImage: "images/img_image_59.png" },
];
export default function ProductDetailsPage() {
    const [ quantity, setQuantity ] = React.useState( 1 );
    return (
        <>
            <Helmet>
                <title>E-Commerce</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="w-full bg-white-a700">
                <Header ></Header>
                <div className="mt-20 flex flex-col items-center gap-[140px] md:gap-[105px] sm:gap-[70px]">
                    <div className="container-xs md:px-5">
                        <div className="flex flex-col gap-[76px] md:gap-[57px] sm:gap-[38px]">
                            <Breadcrumb
                                separator={
                                    <Img src="images/img_roadmap.svg" alt="Line 13" className="h-[11.75px] w-[6px] object-contain" />
                                }
                                className="flex flex-wrap items-center gap-3"
                            >
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        <Heading size="texts" as="h1" className="text-[14px] font-normal !text-black-900_7f">
                                            Account
                                        </Heading>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="#">
                                        <Heading size="texts" as="h2" className="text-[14px] font-normal !text-black-900_7f">
                                            Gaming
                                        </Heading>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink href="#">
                                        <Heading size="texts" as="h3" className="text-[14px] font-normal">
                                            Havic HV G-92 Gamepad
                                        </Heading>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                            <div className="flex items-center md:flex-col">
                                <div className="flex flex-1 justify-center gap-[30px] md:flex-col md:self-stretch">
                                    <div className="flex w-[22%] flex-col gap-4 md:w-full md:flex-row sm:flex-col">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {data.map( ( d, index ) => (
                                                <UserProfileImage {...d} key={"list" + index} ></UserProfileImage>
                                            ) )}
                                        </Suspense>
                                    </div>
                                    <div className="w-[68%] rounded bg-gray-100 px-[26px] py-[130px] md:w-full md:py-5 sm:p-5">
                                        <Img
                                            src="images/img_image_63.png"
                                            alt="Imagesixtythree"
                                            className="mt-[22px] h-[314px] w-full object-cover md:h-auto"
                                        />
                                    </div>
                                </div>
                                <div className="flex w-[34%] flex-col items-start md:w-full">
                                    <Heading
                                        size="headinglg"
                                        as="h4"
                                        className="!font-inter text-[24px] font-semibold tracking-[0.72px] md:text-[22px]"
                                    >
                                        Havic HV G-92 Gamepad
                                    </Heading>
                                    <div className="mt-2 flex gap-2 self-stretch sm:flex-col">
                                        <div className="flex w-full justify-center gap-2 sm:w-full">
                                            <RatingBar
                                                value={4}
                                                isEditable={true}
                                                color="#00000071"
                                                activeColor="#ffad33"
                                                size={20}
                                                className="flex gap-2.5"
                                            />
                                            <Heading size="texts" as="h5" className="text-[14px] font-normal !text-black-900_7f">
                                                (150 Reviews)
                                            </Heading>
                                        </div>
                                        <div className="flex w-full items-center gap-[15px] px-2 sm:w-full">
                                            <div className="h-[16px] w-px bg-gray-900_7f" />
                                            <Heading size="texts" as="h6" className="text-[14px] font-normal !text-black-900_99">
                                                In Stock
                                            </Heading>
                                        </div>
                                    </div>
                                    <Text as="p" className="mt-2.5 text-[24px] font-normal tracking-[0.72px] md:text-[22px]">
                                        $192.00
                                    </Text>
                                    <Heading
                                        size="texts"
                                        as="p"
                                        className="mt-[18px] w-[92%] text-[14px] font-normal leading-[21px] md:w-full"
                                    >
                                        PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free
                                        install & mess free removal Pressure sensitive.
                                    </Heading>
                                    <Img src="images/img_underline.svg" alt="Underline" className="mt-6 h-px w-full" />
                                    <div className="mt-[18px] flex items-center gap-[25px] self-stretch">
                                        <Heading size="textlg" as="p" className="!font-inter text-[20px] font-normal tracking-[0.60px]">
                                            Colours:
                                        </Heading>
                                        <Img src="images/img_contrast_amber_700.svg" alt="Contrast" className="h-[20px]" />
                                    </div>
                                    <div className="mt-5 flex items-center self-stretch">
                                        <Heading size="textlg" as="p" className="!font-inter text-[20px] font-normal tracking-[0.68px]">
                                            Size:
                                        </Heading>
                                        <div className="flex flex-1 gap-4 px-6 sm:px-5">
                                            <Button
                                                color="black_900_7f"
                                                size="sm"
                                                variant="outline"
                                                className="min-w-[32px] rounded !border px-1 font-medium"
                                            >
                                                XS
                                            </Button>
                                            <Button
                                                color="black_900_7f"
                                                size="sm"
                                                variant="outline"
                                                className="min-w-[32px] rounded !border px-3 font-medium"
                                            >
                                                S
                                            </Button>
                                            <Button color="orange_700" size="sm" className="min-w-[32px] rounded px-2.5 font-medium">
                                                M
                                            </Button>
                                            <Button
                                                color="black_900_7f"
                                                size="sm"
                                                variant="outline"
                                                className="min-w-[32px] rounded !border px-3 font-medium"
                                            >
                                                L
                                            </Button>
                                            <Button
                                                color="black_900_7f"
                                                size="sm"
                                                variant="outline"
                                                className="min-w-[32px] rounded !border px-1.5 font-medium"
                                            >
                                                XL
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="mt-6 flex items-center gap-4 self-stretch sm:flex-col">
                                        <div className="flex flex-1 sm:self-stretch">
                                            <div
                                                onClick={( event ) => {
                                                    event.stopPropagation();
                                                    setQuantity( ( quantity ) => ( quantity < 1 ? 0 : quantity - 1 ) );
                                                }}
                                                className="flex cursor-pointer flex-col items-center rounded-b1 rounded-t1 border border-solid border-black-900_7f px-2 py-2.5"
                                            >
                                                <Img src="images/img_icon_minus.svg" alt="Iconminus" className="h-[24px]" />
                                            </div>
                                            <Input
                                                color="black_900_7f"
                                                size="md"
                                                variant="outline"
                                                shape="square"
                                                name="frame908"
                                                placeholder={"2"}
                                                type="number"
                                                step="1"
                                                min="0"
                                                value={quantity}
                                                onChange={( e ) => setQuantity( e.target.valueAsNumber )}
                                                className="flex-grow !border-b !border-t px-[34px] font-medium sm:px-5"
                                            />
                                            <div
                                                onClick={( event ) => {
                                                    event.stopPropagation();
                                                    setQuantity( ( quantity ) => quantity + 1 );
                                                }}
                                                className="flex cursor-pointer flex-col items-center rounded-br rounded-tr bg-orange-700 px-2 py-2.5"
                                            >
                                                <Img src="images/img_icon_plus.svg" alt="Iconplus" className="h-[24px]" />
                                            </div>
                                        </div>
                                        EE iit AL
                                        <Button
                                            color="gray_900_01"
                                            size="2xl"
                                            className="flex-1 rounded px-[34px] font-medium sm:self-stretch sm:px-5"
                                        >
                                            Buy Now
                                        </Button>
                                        <Button color="black_900_7f" size="lg" variant="outline" className="w-[49px] rounded !border px-1">
                                            <Img src="images/img wishlist.svg" />
                                        </Button>
                                    </div>
                                    <div className="mt-10 self-stretch rounded border border-solid border-black-900_7f py-6 sm:py-5">
                                        <div className="flex flex-col gap-4">
                                            <div className="mx-4 flex items-center justify-center gap-4 md:mx-0">
                                                <Img src="images/img_icon_delivery.svg" alt="Icondelivery" className="h-[40px]" />
                                                <div className="flex flex-1 flex-col items-start gap-2">
                                                    <Heading as="p" className="text-[16px] font-medium">
                                                        Free Delivery
                                                    </Heading>
                                                    <Heading size="texts" as="p" className="text-[12px] font-medium underline">
                                                    Enter your postal code for Delivery Availability
                                                </Heading>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <Img src="images/img_underline_black_900_01.svg" alt="Underline" className="h-px" />
                                            <div className="mx-4 flex items-center justify-center gap-4 md:mx-9">
                                                <Img src="images/img_icon_return.svg" alt="Iconreturn" className="h-[40px]" />
                                                <div className="flex flex-1 flex-col items-start gap-2">
                                                    <Heading as="p" className="text-[16px] font-medium">
                                                        Return Delivery
                                                    </Heading>
                                                    <Heading size="textxs" as="p" className="flex text-[12px] font-medium">
                                                        <span>Free 30 Days Delivery Returns.&nbsp;</span>
                                                        <a href="#" className="inline underline">
                                                            Details
                                                        </a>
                                                    </Heading>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductdetailsColumnTwo />
            </div>
            <Footer className="mt-[138px]" />
        </div >
</>
    );
}
