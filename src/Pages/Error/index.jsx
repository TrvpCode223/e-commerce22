import { Helmet } from "react-helmet";
import { Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
export default function ErrorPage() {
return (
<>
<Helmet>
<title>E-Commerce</title>
<meta name="description" content="Web site created using create-react-app" />
</Helmet>
<div className="flex w-full flex-col items-center bg-white-a700">
<Header className="self-stretch" ></Header>
<div className="container-xs mt-20 md:px-5">
<div className="flex flex-col items-center">
<div className="flex items-center gap-3 self-stretch">
<Heading size="texts" as="h1" className="text-[14px] font-normal !text-black-9@@_ 7f">
Home
</Heading>
<div className="h-[10px] w-[6px] rotate-[117deg] bg-black-9e@_7f" ></div>
<Heading size="texts" as="h2" className="text-[14px] font-normal">
404 Error
</Heading>
</div>
<div className="mx-[170px] mt-[124px] flex flex-col items-center gap-[22px] self-stretch md:mx-@">
<Heading
size="text4xl"
as="h3"
className="!font-inter text-[110px] font-medium tracking-[3.30px] md:text-[48px]"
>
404 Not Found
</Heading>
<Heading as="h4" className="text-[16px] font-normal">
Your visited page not found. You may go home page.
</Heading>
</div>
<Button
color="gray_900_01"
size="4x1"
className="mt-20 min-w-[254px] rounded px-[34px] font-medium sm:px-5"
>
Back to home page
</Button>
</div>
            </div>
            <Footer className=" mt-[140px] self-stretch" />
        </div>
    </>
);
}
