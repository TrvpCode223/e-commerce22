import { Img, Heading, Slider } from "../../components";
import React from "react";

const categories = [
  { title: "Woman’s Fashion", icon: "dropdown_gray_900.svg" },
  { title: "Men’s Fashion", icon: "dropdown_gray_900.svg" },
  { title: "Electronics", icon: null },
  { title: "Home & Lifestyle", icon: null },
  { title: "Medicine", icon: null },
  { title: "Sports & Outdoor", icon: null },
  { title: "Baby’s & Toys", icon: null },
  { title: "Groceries & Pets", icon: null },
  { title: "Health & Beauty", icon: null },
];

const slides = [
  {
    logo: "img_1200px_apple_gray_logo.png",
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    cta: "Shop Now",
    ctaIcon: "img_arrow_right_gray_50.svg",
    image: "img_hero_endframe.png",
  },
  // Vous pouvez ajouter d'autres slides ici
];

export default function EcommercehomeRowOne() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex justify-center self-stretch bg-white-a700">
      <div className="container-xs flex items-center justify-center gap-11 md:flex-col md:px-5">
        {/* Section des catégories */}
        <div className="flex w-[20%] items-center justify-center gap-4 md:w-full">
          <div className="flex flex-1 flex-col items-start gap-4 self-end">
            {categories.map((category, index) => (
              <div key={index} className="flex justify-between gap-5 self-stretch">
                <Heading as={`h${index + 1}`} className="text-[16px] font-normal">
                  {category.title}
                </Heading>
                {category.icon && (
                  <Img
                    src={`images/img_${category.icon}`}
                    alt={`${category.title} dropdown`}
                    className="h-[24px]"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="h-[384px] w-px bg-black-900_4c"></div>
        </div>

        {/* Slider des promotions */}
        <div className="relative h-[344px] w-[77%] content-center self-end md:h-auto md:w-full">
          <div className="slider1200pxapp mx-auto flex w-full">
            <Slider
              autoPlay={true}               // Active l'auto-play
              autoPlayInterval={2000}       // Intervalle de 2 secondes
              responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
              renderDotsItem={(props) => (
                <div
                  className={`mr-[5px] inline-block h-[${props.isActive ? 14 : 12}px] w-[${props.isActive ? 14 : 12}px] cursor-pointer rounded-[50%] ${props.isActive ? "border-2 border-solid border-white-a700" : "bg-white-a700_7f"}`}
                ></div>
              )}
              activeIndex={sliderState}
              onSlideChanged={(e) => setSliderState(e?.item)}
              ref={sliderRef}
              items={slides.map((slide, index) => (
                <React.Fragment key={index}>
                  <div className="flex bg-black-900_01">
                    <div className="mt-4 flex w-full items-center md:flex-col">
                      <div className="relative z-[1] mb-2.5 flex w-[48%] justify-center self-end px-14 md:w-full md:px-5">
                        <div className="mb-[34px] flex w-full flex-col gap-5">
                          <div className="flex items-center gap-6">
                            <Img
                              src={`images/${slide.logo}`}
                              alt="Apple Logo"
                              className="h-[48px] object-cover"
                            />
                            <Heading as="p" className="mb-2 self-end text-[16px] font-normal !text-gray-50">
                              {slide.title}
                            </Heading>
                          </div>
                          <Heading
                            size="heading3xl"
                            as="h1"
                            className="w-[88%] !font-inter text-[48px] font-semibold leading-[60px] tracking-[1.92px] !text-gray-50 md:w-full md:text-[44px] sm:text-[38px]"
                          >
                            {slide.description}
                          </Heading>
                          <div className="flex items-center gap-[9px]">
                            <div className="flex w-[24%] flex-col items-center gap-1">
                              <Heading as="p" className="text-[16px] font-medium !text-gray-50">
                                {slide.cta}
                              </Heading>
                              <div className="h-px w-full self-stretch bg-gray-50"></div>
                            </div>
                            <Img
                              src={`images/${slide.ctaIcon}`}
                              alt="Arrow Right"
                              className="h-[24px] self-start"
                            />
                          </div>
                        </div>
                      </div>
                      <Img
                        src={`images/${slide.image}`}
                        alt="iPhone 14"
                        className="relative ml-[-66px] h-[328px] w-[52%] object-contain md:ml-0 md:w-full"
                      />
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
