import DeliveryInfo from "../../components/DeliveryInfo";
import React, { Suspense } from "react";

const data = [
    {
        deliveryImage: "images/img_contrast_blue_gray_900.svg",
        deliveryTitle: "LIVRAISON EXPRESS",
        deliveryDescription: "Livraison dans les meilleurs délais",
    },
    {
        deliveryImage: "images/img_play.svg",
        deliveryTitle: "SERVICE CLIENT 24/7",
        deliveryDescription: "Assistance clientéle 24h/24 et 7j/7",
    },
    {
        deliveryImage: "images/img_checkmark.svg",
        deliveryTitle: "MODES PAIEMENT",
        deliveryDescription: "En Ligne ou à la Livraison",
    },
];

export default function EcommercehomeRowFive() {
    return (
        <div className="mt-[140px] flex justify-center self-stretch">
            <div className="container-xs flex justify-center px-14 md:px-5">
                <div className="mr-[94px] flex w-[88%] gap-[88px] md:mr-0 md:flex-col">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                            <DeliveryInfo
                                key={"listcontrast" + index}
                                deliveryImage={d.deliveryImage}
                                deliveryTitle={d.deliveryTitle}
                                deliveryDescription={d.deliveryDescription}
                                className="w-[34%]"
                            />
                        ))}
                    </Suspense>
                </div>
            </div>
        </div>
    );
}