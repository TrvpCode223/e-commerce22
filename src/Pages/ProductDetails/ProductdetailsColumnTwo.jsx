import { Heading } from "../../components";
import ProductDetailsCartwithflat from "../../components/ProductDetailsCartwithflat";
import React, { Suspense } from "react";
export default function ProductdetailsColumnTwo() {
    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col gap-[60px] md:px-5 sm:gap-[30px]">
                <div className="flex items-center gap-4">
                    <div className="h-[40px] w-[20px] rounded bg-orange-700" />
                    <Heading size="headings" as="h2" className="text-[16px] font-semibold !text-orange-700">
                        Related Item
                    </Heading>
                </div>
                <div className="flex gap-[30px] md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {[ ... Array( 4 ) ].map( ( d, index ) => (
                            <ProductDetailsCartwithflat key={"list40" + index} />
                        ) )}
</Suspense>
                </div>
            </div>
        </div>
    );
}
