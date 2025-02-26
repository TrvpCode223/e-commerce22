import { Img, Heading, Slider } from "../../components";
import React from "react";

export default function AboutColumn() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  const profiles = [
    {
      name: "Tom Cruise",
      title: "Founder & Chairman",
      image: "images/img_image_46.png",
      socialIcons: [
        "images/img_icon_twitter_gray_900.svg",
        "images/img_info_gray_900.svg",
        "images/img_icon_linkedin_gray_900.svg",
      ],
    },
    {
      name: "Emma Watson",
      title: "Managing Director",
      image: "images/img_image_51.png",
      socialIcons: [
        "images/img_icon_twitter_gray_900.svg",
        "images/img_info_gray_900.svg",
        "images/img_icon_linkedin_gray_900.svg",
      ],
    },
    {
      name: "Will Smith",
      title: "Product Designer",
      image: "images/img_image_47.png",
      socialIcons: [
        "images/img_icon_twitter_gray_900.svg",
        "images/img_info_gray_900.svg",
        "images/img_icon_linkedin_gray_900.svg",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="container-xs flex flex-col items-center gap-10 md:px-5">
        <div className="mx-auto flex w-full gap-[30px] self-stretch md:mx-0 md:flex-col">
          <Slider
            autoPlay
            autoPlayInterval={2000}
            responsive={{
              0: { items: 1 }, // 1 élément sur les petits écrans
              768: { items: 2 }, // 2 éléments sur les écrans moyens
              1024: { items: 3 }, // 3 éléments sur les grands écrans
            }}
            disableDotsControls
            activeIndex={sliderState}
            onSlideChanged={(e) => setSliderState(e?.item)}
            ref={sliderRef}
            items={profiles.map((profile, index) => (
              <React.Fragment key={index}>
                <div className="px-[15px]">
                  <div className="flex flex-col gap-[22px]">
                    <div className="rounded bg-gray-100 px-14 md:px-5">
                      <Img
                        src={profile.image}
                        alt={profile.name}
                        className="mt-[38px] h-[390px] w-full object-cover md:h-auto"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col items-start">
                        <Heading
                          size="text2x1"
                          as="h5"
                          className="!font-inter text-[32px] font-medium tracking-[1.28px] md:text-[30px] sm:text-[28px]"
                        >
                          {profile.name}
                        </Heading>
                        <Heading as="h6" className="text-[16px] font-normal">
                          {profile.title}
                        </Heading>
                      </div>
                      <div className="flex gap-4">
                        {profile.socialIcons.map((icon, idx) => (
                          <Img key={idx} src={icon} alt={`Icon ${idx}`} className="h-[24px]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          />
        </div>
        <div className="flex items-center justify-center">
          {[...Array(Math.ceil(profiles.length / 3))].map((_, i) => (
            <React.Fragment key={i}>
              {sliderState >= i * (sliderRef.current?.state?.itemsInSlide || 1) &&
                sliderState < (i + 1) * (sliderRef.current?.state?.itemsInSlide || 1) && (
                  <div
                    onClick={() => sliderRef.current?.slideTo(i * (sliderRef.current?.state?.itemsInSlide || 1))}
                    className="mr-[5px] inline-block h-[16px] w-[16px] cursor-pointer rounded-[50%] border-2 border-solid border-gray-900_75"
                  />
                )}
              {!(sliderState >= i * (sliderRef.current?.state?.itemsInSlide || 1) &&
                sliderState < (i + 1) * (sliderRef.current?.state?.itemsInSlide || 1)) && (
                  <div
                    onClick={() => sliderRef.current?.slideTo(i * (sliderRef.current?.state?.itemsInSlide || 1))}
                    className="mr-[5px] inline-block h-[12px] w-[12px] cursor-pointer rounded-[50%] bg-gray-900_4c"
                  />
                )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
