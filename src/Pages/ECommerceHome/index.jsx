import React, { useState, useRef } from "react";
import Helmet from "react-helmet";
import { Heading, Img, Slider, Button } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

// Import des composants de sections
import EcommercehomeColumnEleven from "./EcommerceColumnEleven";
import EcommercehomeColumnFive from "./EcommercehomeColumnFive";
import EcommercehomeColumnFourteen from "./EcommercehomeColumnFourteen";
import EcommercehomeColumnOne from "./EcommercehomeColumnOne";
import EcommercehomeRowFive from "./EcommercehomeRowFive";
import EcommercehomeRowOne from "./EcommercehomeRowOne";
import EcommercehomeRowThree from "./EcommercehomeRowThree";

export default function ECommerceHomePage() {
    const [sliderState, setSliderState] = useState(0);
    const sliderRef = useRef(null);

    const handlePrevSlide = () => {
        sliderRef?.current?.slidePrev();
    };

    const handleNextSlide = () => {
        sliderRef?.current?.slideNext();
    };

    const handleSlideChange = (e) => {
        setSliderState(e?.item);
    };

    const renderCategorySection = () => (
        <div className="container-xs mt-[60px] md:px-5">
            <div className="flex flex-col gap-[78px] md:gap-[58px] sm:gap-[39px]">
                <div className="h-[0.5px] bg-black-900_4c transform rotate-180" />
                <div className="flex flex-col gap-[70px] md:gap-[52px] sm:gap-[35px]">
                    <div className="flex flex-col gap-[60px] sm:gap-[30px]">
                        <div className="flex items-center justify-between gap-5 md:flex-col">
                            <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                                <div className="flex items-center gap-4 self-stretch">
                                    <div className="h-[48px] w-[20px] rounded bg-orange-700" />
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
                                    onClick={handlePrevSlide}
                                    color="gray_100"
                                    size="3xl"
                                    className="w-[46px] rounded-[22px] px-2.5"
                                    aria-label="Previous slide"
                                >
                                    <Img src="images/img_arrow_left.svg" alt="Previous" />
                                </Button>
                                <Button
                                    onClick={handleNextSlide}
                                    color="gray_100"
                                    size="3xl"
                                    className="w-[46px] rounded-[22px] px-2.5"
                                    aria-label="Next slide"
                                >
                                    <Img src="images/img_arrow_right_gray_900.svg" alt="Next" />
                                </Button>
                            </div>
                        </div>
                        <div className="mx-auto flex w-full gap-[30px] md:mx-0 md:flex-wrap overflow-hidden">
                            <Slider

                                responsive={{
    0: { items: 1 },
    480: { items: 2 },
    768: { items: 3 },
    1024: { items: 5 },
    1280: { items: 6 }
}}

                                disableDotsControls
                                activeIndex={sliderState}
                                onSlideChanged={handleSlideChange}
                                ref={sliderRef}
                                items={[...Array(18)].map((_, index) => (
                                    <React.Fragment key={index}>
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
                    <div className="h-[0.5px] rotate-[180deg] bg-black-900_4c" />
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Helmet>
                <title>E-Commerce</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <div className="relative content-center">
                <Header />
                <div className="bg-white-a700">
                    <div className="flex flex-col items-center">
                        <EcommercehomeRowOne />
                        <EcommercehomeColumnOne />
                        {renderCategorySection()}
                        <EcommercehomeColumnFive />
                        <EcommercehomeRowThree />
                        <EcommercehomeColumnEleven />
                        <EcommercehomeColumnFourteen />
                        <EcommercehomeRowFive />
                    </div>
                    <Footer className="mt-[140px]" />
                </div>
            </div>
        </>
    );
}
