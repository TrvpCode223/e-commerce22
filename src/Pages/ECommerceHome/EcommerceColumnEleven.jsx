import { Button, Img, Heading, Slider, RatingBar } from "../../components";
import React, { useState } from "react";

const initialState = 0;

export default function EcommerceColumnEleven() {
    const [sliderState, setSliderState] = useState(initialState);

    const sliderRef = React.useRef(null);

    return (
        <div className="mt-[70px] flex flex-col items-center self-stretch">
                    <div className="container-xs flex flex-col items-center gap-[60px] md:px-5 sm:gap-[30px]">
                        <div className="flex flex-col gap-[60px] self-stretch sm:gap-[30px]">
                            <div className="flex items-center justify-between gap-5 md:flex-col">
                                <div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
                                    <div className="flex items-center gap-4 self-stretch">
                                        <div className="h-[40px] w-[20px] rounded bg-orange-700" />
                                        <Heading size="headings" as="h6" className="text-[16px] font-semibold !text-orange-700">
                                            Our Products
                                        </Heading>
                                    </div>
                                    <Heading
                                        size="heading2xl"
                                        as="h1"
                                        className="!font-inter text-[36px] font-semibold tracking-[1.44px] md:text-[34px] sm:text-[32px]"
                                    >
                                        Explore Our Products
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
                                        <Img src="images/img_arrow_right_gray 900.svg" />
                                    </Button>
                                </div>
                            </div>

                            <div className="mx-auto flex w-full">
                                <Slider

                                    responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                                    disableDotsControls
                                    activeIndex={sliderState}
                                    onChange={( e ) => {
                                        setSliderState( e?.item );
                                    }}
                                    ref={sliderRef}
                                    items={[ ...Array( 3 ) ].map( () => (
                                        <React.Fragment key={Math.random()}>
                                            <div className="flex flex-col gap-[60px] sm:gap-[30px]">
                                                <div className="flex gap-[30px] md:flex-col">
                                                    <div className="flex w-full flex-col gap-4">
                                                        <div className="relative h-[250px] rounded bg-gray-100 p-3">
                                                            <div className="absolute left-0 right-0 top-3 mx-auto flex flex-1 flex-col items-end gap-2">
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_wishlist.svg" />
                                                                </Button>
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_quick_view.svg" />
                                                                </Button>
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 px-14 md:px-5">
                                                                <Img
                                                                    src="images/img_71rdoexxtrl_1.png"
                                                                    alt="71rdoexxtrlone"
                                                                    className="h-[180px] w-[86%] object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start gap-2">
                                                            <Heading as="p" className="text-[16px] font-medium">
                                                                Breed Dry Dog Food
                                                            </Heading>
                                                            <div className="flex items-center self-stretch">
                                                                <Heading as="p" className="text-[16px] font-medium !text-orange-700">
                                                                    $100
                                                                </Heading>
                                                                <div className="flex flex-1 items-center gap-2 px-2">
                                                                    <RatingBar
                                                                        value={3}
                                                                        isEditable={true}
                                                                        color="#00000071"
                                                                        activeColor="#ffad33"
                                                                        size={20}
                                                                        className="flex gap-2.5"
                                                                    />
                                                                    <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
                                                                        (35)
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex w-full flex-col gap-4">
                                                        <div className="rounded bg-gray-100">
                                                            <div className="mt-3 flex flex-col gap-[22px]">
                                                                <div className="mx-3 flex items-start justify-end md:mx-0">
                                                                    <Img
                                                                        src="images/img_eos_250d_03_500x500.png"
                                                                        alt="Eos250dthree"
                                                                        className="mt-2.5 h-[162px] w-[58%] self-end object-contain"
                                                                    />
                                                                        <div className="flex flex-col items-end gap-2">
                                                                            <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                                <Img src="images/img_wishlist.svg" />
                                                                            </Button>
                                                                            <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                                <Img src="images/img_quick_view.svg" />
                                                                            </Button>
                                                                        </div>
                                                                </div>
                                                                <Button
                                                                    color="gray_900"
                                                                    size="xl"
                                                                    className="self-stretch rounded-bl rounded-br px-[34px] font-medium sm:px-5"
                                                                >
                                                                    Ajouter au Panier
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start gap-2">
                                                            <Heading as="p" className="text-[16px] font-medium">
                                                                CANON EOS DSLR Camera
                                                            </Heading>
                                                            <div className="flex items-center self-stretch">
                                                                <Heading as="p" className="text-[16px] font-medium !text-orange-700">
                                                                    $360
                                                                </Heading>
                                                                <div className="flex flex-1 items-center gap-2 px-2">
                                                                    <RatingBar
                                                                        value={4}
                                                                        isEditable={true}
                                                                        color="#00000071"
                                                                        activeColor="#ffad33"
                                                                        size={20}
                                                                        className="flex gap-2.5"
                                                                    />
                                                                    <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
                                                                        (95)
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full flex-col gap-4">
                                                        <div className="flex items-start justify-end rounded bg-gray-100 p-3">
                                                            <Img
                                                                src="images/img_ideapad_gaming_i3_01_500x500.png"
                                                                alt="Ideapadgaming"
                                                                className="my-[22px] h-[180px] w-[70%] self-center object-contain"
                                                            />
                                                            <div className="flex flex-col items-end gap-2">
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_wishlist.svg" />
                                                                </Button>
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_quick_view.svg" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start gap-2">
                                                            <Heading as="p" className="text-[16px] font-medium">
                                                                ASUS FHD Gaming Laptop
                                                            </Heading>
                                                            <div className="flex items-center self-stretch">
                                                                <Heading as="p" className="text-[16px] font-medium !text-orange-700">
                                                                    $700
                                                                </Heading>
                                                                <div className="flex flex-1 items-center gap-2 px-2">
                                                                    <RatingBar
                                                                        value={5}
                                                                        isEditable={true}
                                                                        color="#00000071"
                                                                        activeColor="#ffad33"
                                                                        size={20}
                                                                        className="flex gap-2.5"
                                                                    />
                                                                    <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
                                                                        (325)
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                     </div>
                                                    </div>
                                                    <div className="flex w-full flex-col gap-4">
                                                        <div className="flex items-start justify-end rounded bg-gray-100 p-3">
                                                            <Img
                                                                src="images/img_curology_j7pkvqrtusm_unsplash.png"
                                                                alt="Curology"
                                                                className="mb-8 mt-[34px] h-[158px] w-[70%] self-center object-contain"
                                                            />
                                                            <div className="flex flex-col items-end gap-2">
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_wishlist.svg" />
                                                                </Button>
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_quick_view.svg" />
                                                                </Button>
                                                            </div>
                                                        </div>

                                                        <div className="flex flex-col items-start gap-2">
                                                            <Heading as="p" className="text-[16px] font-medium">
                                                                Curology Product Set{" "}
                                                            </Heading>
                                                            <div className="flex items-center self-stretch">
                                                                <Heading as="p" className="text-[16px] font-medium !text-orange-700">
                                                                    $500
                                                                </Heading>
                                                                <div className="flex flex-1 items-center gap-2 px-2">
                                                                    <RatingBar
                                                                        value={4}
                                                                        isEditable={true}
                                                                        color="#00000071"
                                                                        activeColor="#ffad33"
                                                                        size={20}
                                                                        className="flex gap-2.5"
                                                                    ></RatingBar>
                                                                    <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
                                                                        (145)
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-[30px] md:flex-col">
                                                    <div className="flex w-full flex-col gap-4">
                                                        <div className="relative h-[250px] rounded bg-gray-100 p-3 md:h-auto™">
                                                            <div className="flex flex-1 flex-col items-end gap-2">
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_wishlist.svg" />
                                                                </Button>
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_quick_view.svg" />
                                                                </Button>
                                                            </div>
                                                            <Button
                                                                color="black_900_01"
                                                                size="xs"
                                                                className="absolute left-3 top-3 m-auto min-w-[58px] rounded px-3"
                                                            >
                                                                NEW
                                                            </Button>
                                                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 p-[22px] sm:p-5">
                                                                <Img
                                                                    src="images/img_new_mercedes_be.png"
                                                                    alt="Newmercedesbe"
                                                                    className="h-[132px] w-[90%] object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start gap-2">
                                                            <Heading as="p" className="text-[16px] font-medium">
                                                                Kids Electric Car
                                                            </Heading>
                                                            <div className="flex items-center self-stretch">
                                                                <Heading as="p" className="text-[16px] font-medium !text-orange-700">
                                                                    $960
                                                                </Heading>
                                                                <div className="flex flex-1 items-center gap-2 px-2">
                                                                    <RatingBar
                                                                        value={5}
                                                                        isEditable={true}
                                                                        color="#00000071"
                                                                        activeColor="#ffad33"
                                                                        size={20}
                                                                        className="flex gap-2.5"
                                                                    />
                                                                    <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
                                                                        (65)
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                            <Img src="images/img_settings.svg" alt="Settings" className="h-[20px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full flex-col gap-4">
                                                        <div className="relative h-[250px] rounded bg-gray-180 p-3">
                                                            <div className="absolute left-0 right-0 top-3 mx-auto flex flex-1 flex-col items-end gap-2">
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_wishlist.svg" />
                                                                </Button>
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_quick_view.svg" />
                                                                </Button>
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 p-2">
                                                                <Img
                                                                    src="images/img_copa_sense_1.png"
                                                                    alt="Copasenseone"
                                                                    className="h-[164px] w-[80%] object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start gap-2">
                                                            <Heading as="p" className="text-[16px] font-medium">
                                                                Jr. Zoom Soccer Cleats
                                                            </Heading>
                                                            <div className="flex items-center self-stretch">
                                                                <Heading as="p" className="text-[16px] font-medium !text-orange-700">
                                                                    $1160
                                                                </Heading>
                                                                <div className="flex flex-1 items-center gap-2 px-2">
                                                                    <RatingBar
                                                                        value={5}
                                                                        isEditable={true}
                                                                        color="#00000071"
                                                                        activeColor="#ffad33"
                                                                        size={20}
                                                                        className="flex gap-2.5"
                                                                    />
                                                                    <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
                                                                        (ED)
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                            <Img src="images/img_contrast.svg" alt="Contrast" className="h-[20px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full flex-col gap-4">
                                                        <div className="relative h-[250px] rounded bg-gray-100 p-3 md:h-auto">
                                                            <div className="flex flex-1 flex-col items-end gap-2">
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_wishlist.svg" />
                                                                </Button>
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_quick_view.svg" />
                                                                </Button>
                                                            </div>
                                                            <Button
                                                                color="black_900_01"
                                                                size="xs"
                                                                className="absolute left-3 top-3 m-auto min-w-[50px] rounded px-3"
                                                            >
                                                                NEW
                                                            </Button>
                                                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 p-3.5">
                                                                <Img
                                                                    src="images/img_gpll_prd3_1.png"
                                                                    alt="Gpllprd3one"
                                                                    className="h-[150px] w-[82%] object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start gap-2">
                                                            <Heading as="p" className="text-[16px] font-medium">
                                                                GP11 Shooter USB Gamepad
                                                            </Heading>
                                                            <div className="flex items-center self-stretch">
                                                                <Heading as="p" className="text-[16px] font-medium !text-orange-700">
                                                                    $660
                                                                </Heading>
                                                                <div className="flex flex-1 items-center gap-2 px-2">
                                                                    <RatingBar
                                                                        value={4}
                                                                        isEditable={true}
                                                                        color="#00000071"
                                                                        activeColor="#ffad33"
                                                                        size={20}
                                                                        className="flex gap-2.5"
                                                                    />
                                                                    <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
                                                                        (55)
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                            <Img src="images/img_user_orange_700.svg" alt="User" className="h-[20px]" />
                                                        </div>
                                                    </div>
                                                    <div className="flex w-full flex-col gap-4">
                                                        <div className="relative h-[250px] rounded bg-gray-100 p-3">
                                                            <div className="absolute left-0 right-0 top-3 mx-auto flex flex-1 flex-col items-end gap-2">
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_wishlist.svg" />
                                                                </Button>
                                                                <Button shape="round" className="w-[34px] rounded-[16px] px-1">
                                                                    <Img src="images/img_quick_view.svg" />
                                                                </Button>
                                                            </div>
                                                            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1">
                                                                <Img
                                                                    src="images/img_698717_z8a1x_34.png"
                                                                    alt="698717z8a1xthir"
                                                                    className="h-[176px] w-[74%] object-contain"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-start gap-2">
                                                            <Heading as="p" className="text-[16px] font-medium">
                                                                Quilted Satin Jacket
                                                            </Heading>
                                                            <div className="flex items-center self-stretch">
                                                                <Heading as="p" className="text-[16px] font-medium !text-orange-700">
                                                                    $660
                                                                </Heading>
                                                                <div className="flex flex-1 items-center gap-2 px-2">
                                                                    <RatingBar
                                                                        value={4}
                                                                        isEditable={true}
                                                                        color="#00000071"
                                                                        activeColor="#ffad33"
                                                                        size={20}
                                                                        className="flex gap-2.5"
                                                                    />
                                                                    <Heading size="headingxs" as="p" className="text-[14px] font-semibold !text-black-900_7f">
                                                                        (55)
                                                                    </Heading>
                                                                </div>
                                                            </div>
                                                            <Img src="images/img_user_orange_700_20x43.svg" alt="User" className="h-[208px]" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ) )}
                                />
                            </div>
                        </div>
                        <Button color="gray_900_01" size="4xl" className="min-w-[230px] rounded px-[34px] font-medium sm:px-5">
                            Tous les Produits
                        </Button>
                    </div>
                </div>
    );
}
