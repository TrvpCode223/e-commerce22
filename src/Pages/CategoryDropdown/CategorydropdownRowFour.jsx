import DeliveryInfo from "../../components/DeliveryInfo";
import React, { Suspense } from "react";
const data = [

    {

    deliveryImage: "images/img_contrast_blue_gray_ 900.svg",
    deliveryTitle: "LIVRAISON EXPRESS",
    deliveryDescription: "Livraison dans les meilleurs délais",
    },
{
deliveryImage: "images/img play.svg",
deliveryTitle: "SERVICE CLIENT 24/7",
deliveryDescription: "Assistance clientéle 24h/24 et 73/7",
},
{
deliveryImage: "images/img_ checkmark.svg",
deliveryTitle: "MODES PAIEMENT",
deliveryDescription: "En Ligne ou a la Livraison",
},
];
export default function CategorydropdownRowFour() {
return (
<div className="mt-[1409px] flex justify-center self-stretch">
<div className="container-xs flex justify-center px-14 md:px-5">
<div className="mr-[94px] flex w-[88%] gap-[88px] md:mr-0 md:flex-col">
<Suspense fallback={<div>Loading feed...</div>}>
{data.map((d, index) => (
<DeliveryInfo {...d} key={"listcontrast" + index} className="w-[34%]" />
))}
</Suspense>
</div>
</div>
</div>
);
}
