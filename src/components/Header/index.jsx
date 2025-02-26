import React from "react";
import  CloseSVG  from "../Input/close";
import { Img, Input, Heading, SelectBox } from "./..";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props} className={`${props.className} flex flex-col gap-2`}>
      {/* Announcement Bar */}
      <div className="flex items-center justify-center  py-3" style={{backgroundColor:"#4E1E0F"  }}>
        <div className="container-xs flex justify-between   gap-5 md:flex-col md:px-0">
          <div className="flex flex-row ml-44 space-x-5 md:ml-0">
            <span
              size="text-sm"
              as="p"
              className="self-end text-[14px] text-sky-100 font-normal "
            >
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </span>
            <span
              size="heading-xs"
              as="p"
              className="text-[14px] font-semibold text-sky-100 py-1 mt-1 underline"
            >
              Shop Now
            </span>
          </div>
          <SelectBox
            shape="square"
            indicator={<Img src="images/img_dropdown.svg" alt="Dropdown" className="h-[24px] w-[24px]" />}
            name="language"
            placeholder="English"
            options={dropDownOptions}
            className="w-[120px] gap-1 px-3 text-gray-50 md:w-full"
          />
        </div>
      </div>

      {/* Main Header Section */}
      <div className="self-stretch">
        <div className="flex flex-col items-center gap-4">
          <div className="container-xs md:px-5">
            <div className="mr-7 flex items-center justify-between space-x-5 md:mr-0 md:flex-col">
                <div className="h-[31px] w-[132px] flex items-center justify-center ">
                     <Img src="images/img_header_logo.png"  alt="Header Logo" fill className="object-cover" />
               </div>
              <div className="flex w-[74%] items-center justify-between space-x-12 md:w-full md:flex-col">
                <ul className="flex gap-12">
                  <li>
                    <a href="#">
                      <div className="flex flex-col items-center">
                        <Heading as="p" className="text-[16px] font-normal">Accueil</Heading>
                        <Img src="images/img_underline.svg" alt="Underline" className="mx-1 h-[2px] w-[48px] md:mx-0" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Heading as="p" className="text-[16px] font-normal">Contact</Heading>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <div className="flex flex-row items-center space-x-1">
                      <span as="p" className="text-[16px] font-normal">À </span>
                      <span>propos</span>
                      </div>
                    </a>
                  </li>
                </ul>

                <div className="flex items-center justify-center border-2 rounded-xl w-92">
                  <Input
                    size="sm"
                    shape="round"
                    name="search"
                    placeholder="Qu'est-ce que tu cherches ?"
                    value={searchBarValue}
                    onChange={(e) => setSearchBarValue(e.target.value)}
                    suffix={
                      searchBarValue?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue("")}
                          height={24}
                          width={24}
                          fillColor="#000000"
                        />
                      ) : (
                        <Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px] object-contain" />
                      )
                    }
                    className="flex-grow  rounded"
                  />
                </div>

                <div className="flex items-center gap-4">
                  <a href="#">
                    <Img src="images/img_wishlist.svg" alt="Wishlist" className="h-[32px]" />
                  </a>
                  <a href="#">
                    <Img src="images/img_cart_gray_900.svg" alt="Cart" className="h-[32px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_line_3.svg" alt="Line Separator" className="h-px w-full" />
        </div>
      </div>
    </header>
  );
}
