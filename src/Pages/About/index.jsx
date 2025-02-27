import { Helmet } from "react-helmet";
import { Heading, Img, Input, SelectBox } from "../../components";
import DeliveryInfo from "../../components/DeliveryInfo";
import DeliveryStats from "../../components/DeliveryStats";
import Footer from "../../components/Footer";
import  CloseSVG  from "../../components/Input/close";
import AboutColumn from "./AboutColumn";
import AboutRowourstory from "./AboutRowourstory";
import React, { Suspense } from "react";

const data = [
  { thumbsUpImage: "images/img_thumbs_up.svg", deliveryCountText: "10.5k", activeSiteText: "Sellers active on our site" },
  { thumbsUpImage: "images/img_profile.svg", deliveryCountText: "33k", activeSiteText: "Monthly Product Sale" },
  { thumbsUpImage: "images/img_thumbs_up_blue_gray_900.svg", deliveryCountText: "45.5k", activeSiteText: "Customers active on our site" },
  { thumbsUpImage: "images/img_contrast_blue_gray_900_80x80.svg", deliveryCountText: "25k", activeSiteText: "Annual gross sale on our site" },
];

const datal = [
  {
    deliveryImage: "images/img_contrast_blue_gray_900.svg",
    deliveryTitle: "LIVRAISON EXPRESS",
    deliveryDescription: "Livraison dans les meilleurs délais",
  },
  {
    deliveryImage: "images/img_play.svg",
    deliveryTitle: "SERVICE CLIENT 24/7",
    deliveryDescription: "Assistance clientèle 24h/24 et 7j/7",
  },
  {
    deliveryImage: "images/img_checkmark.svg",
    deliveryTitle: "MODES PAIEMENT",
    deliveryDescription: "En ligne ou à la livraison",
  },
];

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AboutPage() {
  const [searchBarValue30, setSearchBarValue30] = React.useState("");

  return (
    <>
      <Helmet>
        <title>E-Commerce</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-a700">
        <header className="flex flex-col gap-10">
          <div className="flex justify-center bg-gray-900 py-3">
            <div className="container-xs flex justify-end md:px-5">
              <div className="flex w-[74%] justify-between gap-5 md:w-full md:flex-col">
                <div className="flex flex-wrap gap-2">
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
                  placeholder="English"
                  options={dropDownOptions}
                  className="w-[8%] gap-1 px-3 text-gray-50 md:w-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="container-xs md:px-5">
              <div className="mr-4 flex items-center justify-between gap-5 md:mr-0 md:flex-col">
                <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[30px] w-[132px] object-contain" />
                <div className="flex w-[76%] items-center justify-between gap-5 md:w-full md:flex-col">
                  <ul className="flex gap-12">
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
                        <div className="flex flex-col items-center">
                          <Heading as="p" className="text-[16px] font-normal">
                            A propos
                          </Heading>
                          <Img src="images/img_underline.svg" alt="Underline" className="mx-3 h-px w-[48px] md:mx-0" />
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="flex w-[46%] items-center justify-between gap-5 md:w-full sm:flex-col">
                    <Input
                      size="sm"
                      shape="round"
                      name="search"
                      placeholder="Qu'est-ce que tu cherches?"
                      value={searchBarValue30}
                      onChange={(e) => setSearchBarValue30(e.target.value)}
                      suffix={
                        searchBarValue30.length > 0 ? (
                          <CloseSVG
                            onClick={() => setSearchBarValue30("")}
                            height={24}
                            width={24}
                            fillColor="#000000ff"
                          />
                        ) : (
                          <Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px] object-contain" />
                        )
                      }
                      className="flex-grow gap-[34px] rounded"
                    />
                    <div className="flex gap-4">
                      <a href="#">
                        <Img src="images/img_wishlist.svg" alt="Wishlist" className="h-[32px]" />
                      </a>
                      <a href="#">
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
        </header>
        <div className="mt-20 flex flex-col items-center gap-[42px]">
          <div className="container-xs md:px-5">
            <div className="flex items-center gap-3">
              <Heading size="texts" as="h1" className="text-[14px] font-normal !text-black-900_7f">
                Home
              </Heading>
              <div className="h-[10px] w-[6px] rotate-[117deg] bg-black-900_7f"></div>
              <Heading size="texts" as="h2" className="text-[14px] font-normal">
                About
              </Heading>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[149px] self-stretch md:gap-[105px] sm:gap-[70px]">
            <AboutRowourstory />
            <div className="container-xs md:px-5">
              <div className="flex gap-[30px] md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {data.map((d, index) => (
                    <DeliveryStats {...d} key={"list105KOne" + index} className="hover:shadow-sm" />
                  ))}
                </Suspense>
              </div>
            </div>
            <AboutColumn />
            <div className="container-xs flex flex-col items-start pl-28 pr-14 md:px-5">
              <div className="mr-24 flex w-[94%] gap-[88px] md:mr-0 md:w-full md:flex-col">
                <Suspense fallback={<div>Loading feed...</div>}>
                  {datal.map((d, index) => (
                    <DeliveryInfo {...d} key={"fullservices" + index} className="w-[34%]" />
                  ))}
                </Suspense>
              </div>
            </div>
          </div>
        </div>
        <Footer className="mt-[140px]" />
      </div>
    </>
  );
}
