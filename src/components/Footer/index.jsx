import { Heading, Img, Input } from "./..";
import React from "react";

export default function Footer({ ...props }) {
    return (
        <footer {...props} className={`${props.className} flex py-6 sm:py-5 bg-gray-900`}>
            <div className="mt-[74px] flex w-full flex-col items-center">
                <div className="mx-auto flex w-full max-w-[1292px] items-start justify-between gap-5 md:flex-col md:px-5">
                    <div className="flex w-[18%] flex-col gap-4 md:w-full">
                        <div className="flex flex-col items-start gap-5">
                            <Img src="images/img_footer_logo.png" alt="Footer logo" className="h-[28px] w-[118px] object-contain" />
                            <Heading size="textlg" as="p" className="text-[20px] font-medium !text-gray-50">
                                INSCRIVEZ-VOUS
                            </Heading>
                            <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                Rejoignez notre newsletter !!
                            </Heading>
                        </div>
                        <Input
                            color="gray_50"
                            variant="outline"
                            shape="round"
                            name="email"
                            placeholder="Entrez votre email"
                            suffix={
                                <Img src="images/img_icon_send.svg" alt="Icon send" className="h-[24px] w-[24px] object-contain" />
                            }
                            className="gap-8 rounded !border-[1.5px] px-3.5"
                        />
                    </div>
                    <div className="flex w-[50%] items-start justify-center self-center md:w-full md:flex-col">
                        <div className="flex w-[46%] flex-col items-start gap-4 md:w-full">
                            <div className="flex flex-col items-start gap-5 self-stretch">
                                <Heading size="textlg" as="p" className="text-[20px] font-medium !text-gray-50">
                                    Contact
                                </Heading>
                                <a href="#" className="w-[70%] leading-6 md:w-full">
                                    <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                        KM1 Avenue Cheikh Anta Diop Immeuble Barsalam Dakar, Senegal
                                    </Heading>
                                </a>
                            </div>
                            <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                contact@othentik.sn
                            </Heading>
                            <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                +221 77 419 94 59
                            </Heading>
                        </div>
                        <div className="flex w-[54%] items-start justify-between gap-5 self-center md:w-full">
                            <div className="flex w-[60%] flex-col items-start gap-[18px] self-center">
                                <Heading size="textlg" as="p" className="text-[20px] font-medium !text-gray-50">
                                    Catégories
                                </Heading>
                                <nav>
                                    <ul className="flex flex-col items-start gap-4">
                                        <li>
                                            <a href="#">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    My Account
                                                </Heading>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    Login / Register
                                                </Heading>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Cart" target="_blank" rel="noreferrer">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    Cart
                                                </Heading>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Wishlist" target="_blank" rel="noreferrer">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    Wishlist
                                                </Heading>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Shop" target="_blank" rel="noreferrer">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    Shop
                                                </Heading>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex flex-col items-start gap-[18px]">
                                <Heading size="textlg" as="p" className="text-[20px] font-medium !text-gray-50">
                                    Liens rapides
                                </Heading>
                                <nav>
                                    <ul className="flex flex-col items-start gap-4">
                                        <li>
                                            <a href="Accueil" target="_blank" rel="noreferrer">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    Accueil
                                                </Heading>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="A propos" target="_blank" rel="noreferrer">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    A propos
                                                </Heading>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="FAQ" target="_blank" rel="noreferrer">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    FAQ
                                                </Heading>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="Contact" target="_blank" rel="noreferrer">
                                                <Heading as="p" className="text-[16px] font-normal !text-gray-50">
                                                    Contact
                                                </Heading>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-[18%] flex-col gap-6 md:w-full">
                        <div className="flex flex-col items-start gap-[18px]">
                            <Heading size="textlg" as="p" className="text-[20px] font-medium !text-gray-50">
                                Télécharger l&#39;application
                            </Heading>
                            <div className="flex w-[78%] flex-col items-start gap-2 md:w-full">
                                <Heading size="textxs" as="p" className="text-[12px] font-medium !text-gray-50">
                                    Disponible sur :
                                </Heading>
                                <div className="flex items-center gap-2 self-stretch">
                                    <div className="w-[42%] bg-black-900_01">
                                        <Img
                                            src="images/img_qrcode_1.png"
                                            alt="QR Code"
                                            className="h-[76px] w-full object-cover md:h-auto"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col gap-1">
                                        <a href="#">
                                            <Img
                                                src="images/img_googleplay.png"
                                                alt="Google Play"
                                                className="h-[40px] object-contain md:w-[110px]"
                                            />
                                        </a>
                                        <a href="#">
                                            <Img
                                                src="images/img_appstore.png"
                                                alt="App Store"
                                                className="h-[40px] object-contain md:w-[110px]"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-[66%] justify-between gap-5 md:w-full">
                            <a href="#">
                              <img src="images/img_icon_facebook.svg" alt="Facebook" className="h-[24px]" />
                            </a>
                            <a href="#">
                                <Img src="images/img_icon_twitter.svg" alt="Twitter" className="h-[24px]" />
                            </a>
                            <a href="#">
                                <Img src="images/img_info.svg" alt="Info" className="h-[24px]" />
                            </a>
                            <a href="#">
                                <Img src="images/img_icon_linkedin.svg" alt="LinkedIn" className="h-[24px]" />
                            </a>
                        </div>
                    </div>
                </div>
                <Img src="images/img_underline_white_a700.svg" alt="Underline" className="mt-[38px] h-px w-full" />
                <div className="container-xs mt-4 flex flex-col items-center px-14 md:px-5">
                    <div className="flex items-center gap-1.5 sm:flex-col">
                        <Img src="images/img_icon_copyright.svg" alt="Copyright" className="h-[20px] sm:w-full" />
                        <Heading as="p" className="text-[16px] font-normal !text-white-a700">
                            Copyright Othemtik 2025. Tous droits réservés
                        </Heading>
                    </div>
                </div>
            </div>
        </footer>
    );
}
