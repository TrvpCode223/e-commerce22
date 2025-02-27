import { Helmet } from "react-helmet";
import { Heading, Img, Slider, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CategorydropdownColumnEleven from "./CategorydropdownColumnEleven";
import CategorydropdownColumnFive from "./CategorydropdownColumnFive";
import CategorydropdownColumnFourteen from "./CategorydropdownColumnFourteen";
import CategorydropdownColumnOne from "./CategorydropdownColumnOne";
import CategorydropdownRowFour from "./CategorydropdownRowFour";
import CategorydropdownRowTwo from "./CategorydropdownRowTwo";
import React from "react";
export default function CategoryDropdownPage() {
    const [ sliderState, setSliderState ] = React.useState( 0 );
    const sliderRef = React.useRef( null );
    const [ sliderState1, setSliderState1 ] = React.useState( 0 );
    const sliderRef1 = React.useRef( null );
    return (
        <>
            <Helmet>
                <title>E-Commerce</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="relative w-full content-center md:h-auto">
                <div className="w-full bg-white-a700">
                    <Header />
                    <div className="flex flex-col items-center gap-[140px] md:gap-[105px] sm:gap-[70px]">
                        <div className="container-xs md:px-5">
                            <div className="flex items-center gap-11 md:flex-col">
                                <div className="flex w-[20%] items-center justify-center md:w-full">
                                    <div className="relative z-[1] flex flex-1 flex-col items-start gap-4 self-end">
                                        <div className="flex justify-between gap-5 self-stretch">
                                            <Heading as="h1" className="text-[16px] font-normal">
                                                Woman’s Fashion
                                            </Heading>
                                            <Img src="images/img_dropdown_gray_900.svg" alt="Dropdown" className="mr-4 h-[24px]" />
                                        </div>
                                        <div className="flex justify-between gap-5 self-stretch">
                                            <Heading as="h2" className="text-[16px] font-normal">
                                                Men’s Fashion
                                            </Heading>
                                            <Img src="images/img_dropdown_gray_900.svg" alt="Dropdown" className="mr-4 h-[24px]" />
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
                                    <div className="h-[384px] w-px bg-black-900_4c" ></div>
                                </div>
                                <div className="relative h-[344px] w-[77%] content-center self-end md:h-auto md:w-full">
                                    <div className="slider1200pxapp mx-auto flex w-full">
                                        <Slider
                                            autoPlay
                                            autoPlayInterval={2000}
                                            responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                                            renderDotsItem={( props ) => {
                                                return props?.isActive ? (
                                                    <div className="mr-[11px] inline-block h-[14px] w-[14px] cursor-pointer rounded-[50%] border-2 border-solid border-white-a700" ></div>
                                                ) : (
                                                    <div className="mr-[11px] inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-white-a7ee_7f" ></div>
                                                );
                                            }}
                                            activeIndex={sliderState1}
                                            onSlideChanged={( e ) => {
                                                setSliderState1( e?.item );
                                            }}
                                            ref={sliderRef1}
                                            items={[ ...Array( 3 ) ].map( () => (
                                                <React.Fragment key={Math.random()}>
                                                    <div className="flex items-center gap-[19px] bg-black-900_01 md:flex-col">
                                                        <div className="flex w-[34%] flex-col gap-5 md:w-full md:px-5">
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
                                                                    <div className="h-px w-full self-stretch bg-gray-50" ></div>
                                                                </div>
                                                                <Img
                                                                    src="images/img_arrow_right_gray_50.svg"
                                                                    alt="Arrowright"
                                                                    className="h-[24px] self-start"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="relative mt-4 h-[328px] w-[58%] content-center md:mt-0 md:h-auto md:w-full md:px-5">
                                                            <Img
                                                                src="images/img_hero_endframe.png"
                                                                alt="Image"
                                                                className="h-[328px] flex-1 object-cover"
                                                            />
                                                            <div className="absolute bottom-[13px] left-6 m-auto h-[10px] w-[10px] rounded-[S5px] bg-orange-700" ></div>
                                                        </div>
                                                    </div>
                                                </React.Fragment>
                                            ) )}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center self-stretch">
                            <CategorydropdownColumnOne ></CategorydropdownColumnOne>
                            <div className="container-xs mt-[60px] md:px-5">
                                <div className="flex flex-col gap-[78px] md:gap-[58px] sm:gap-[39px]">
                                    <div className="h-[0.5px] rotate-[180deg] bg-black-900_4c" ></div>
                                    <div className="flex flex-col gap-[70px] md:gap-[52px] sm:gap-[35px]">
                                        <div className="flex flex-col gap-[60px] sm:gap-[30px]">
                                            <div className="flex items-center justify-between gap-5 md:flex-col">
                                                <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                                                    <div className="flex items-center gap-4 self-stretch">
                                                        <div className="h-[40px] w-[20px] rounded bg-orange-700" ></div>
                                                        <Heading
                                                            size="headings"
                                                            as="h6"
                                                            className="self-end text-[16px] font-semibold !text-orange-700"
                                                        >
                                                            Categories
                                                        </Heading>
                                                    </div>
                                                    <Heading
                                                        size="heading2xl"
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
                                                        size="3xl"
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
                                                        <Img src="images/img_arrow_right_gray_900.svg" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="mx-auto flex w-full gap-[30px] md:mx-0 md:flex-col">
                                                <Slider

                                                    responsive={{ 0: { items: 1 }, 551: { items: 2 }, 1051: { items: 6 } }}
                                                    disableDotsControls
                                                    activeIndex={sliderState}
                                                    onSlideChanged={( e ) => {
                                                        setSliderState( e?.item );
                                                    }}
                                                    ref={sliderRef}
                                                    items={[ ...Array( 18 ) ].map( () => (
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
                                                    ) )}
                                                />
                                            </div>
                                        </div>
                                        <div className="h-[0.5px] rotate-[180deg] bg-black-900_4c" ></div>
                                    </div>
                                </div>
                            </div>

                            <CategorydropdownColumnFive ></CategorydropdownColumnFive>
                            <CategorydropdownRowTwo ></CategorydropdownRowTwo>
                            <CategorydropdownColumnEleven ></CategorydropdownColumnEleven>
                            <CategorydropdownColumnFourteen ></CategorydropdownColumnFourteen>
                            <CategorydropdownRowFour ></CategorydropdownRowFour>
                        </div>
                    </div>
                    <Footer className="mt-[140px]" />
                </div>
                <div className="absolute bottom-[8%] right-[6%] m-auto h-[46px] w-[3%] rotate-[-90deg] rounded-[22px] object-contain" ></div>
            </div>
        </>
    );
}
