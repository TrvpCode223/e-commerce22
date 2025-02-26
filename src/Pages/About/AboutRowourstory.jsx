import { Img, Heading } from "../../components";
import React from "react";

export default function AboutRowourstory() {
  return (
    <div className="flex items-center justify-end self-stretch md:flex-col">
      <div className="flex w-[42%] flex-col items-start gap-7 md:w-full md:px-5">
        <Heading
          size="heading4x1"
          as="h2"
          className="!font-inter text-[54px] font-semibold tracking-[3.24px] md:text-[46px] sm:text-[40px]"
        >
          Our Story
        </Heading>
        <div className="flex flex-col items-start gap-6 self-stretch">
          <Heading as="h3" className="w-[88%] text-[16px] font-normal leading-[26px] md:w-full">
            Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in
            Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500
            sellers and 300 brands and serves 3 million customers across the region.{" "}
          </Heading>
          <Heading as="h4" className="w-[84%] text-[16px] font-normal leading-[26px] md:w-full">
            Exclusive has more than 1 Million products to offer, growing at a very fast rate. Exclusive offers a diverse
            assortment in categories ranging from consumer.
          </Heading>
        </div>
      </div>
      <div className="flex rounded-bl rounded-tl bg-pink-50 md:px-5">
        <Img
          src="images/img_portrait_two_af.jpg"
          alt="Portraittwoaf"
          className="h-[688px] w-full rounded-bl rounded-tl object-cover md:h-auto"
        />
      </div>
    </div>
  );
}
