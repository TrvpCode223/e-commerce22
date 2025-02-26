import { Button, Heading } from "../../components";
import AccountDropdownWithAccountCart from "../../components/AccountDropdownAccountCart";
import React, { Suspense } from "react";
export default function CategorydropdownColumnFive() {
return (
<div className="mt-[68px] flex flex-col items-center self-stretch">
<div className="container-xs flex flex-col gap-[60px] md:px-5 sm:gap-[30px]">
<div className="flex items-center justify-center md:flex-col">
<div className="flex flex-1 flex-col items-start gap-5 md:self-stretch">
<div className="flex items-center gap-4 self-stretch">
<div className="h-[40px] w-[20px] rounded bg-orange-700" ></div>
<Heading size="headings" as="h6" className="text-[16px] font-semibold !text-orange-700">
This Month
</Heading>
</div>
<Heading
size="heading2xl"
as="h1"
className="!font-inter text-[36px] font-semibold tracking-[1.44px] md:text-[34px] sm:text-[32px]"
>
Best Selling Products
</Heading>
</div>
<Button
color="gray_900_01"
size="4xl"
className="min-w-[158px] self-end rounded px-[34px] font-medium sm:px-5"
>
View All
</Button>
</div>
<div className="flex gap-[30px] md:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
                    {[ ...Array( 4 ) ].map( ( d, index ) => (
                        <AccountDropdownWithAccountCart key={"listheartsmall" + index} ></AccountDropdownWithAccountCart>
                    ) )}
</Suspense>
</div>
</div>
</div>
);
}
