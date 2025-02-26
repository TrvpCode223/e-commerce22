import { Helmet } from "react-helmet";
import { Button, Heading, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

export default function AccountPage() {
    return (
        <>
            <Helmet>
                <title>E-Commerce</title>
                <meta name="description" content="Web site created using create-react-app" />
            </Helmet>
            <Header className="self-stretch" />
            <div className="container-xs mt-20 md:px-5">
                <div className="flex flex-col gap-20 md:gap-[60px] sm:gap-10">
                    <div className="flex justify-center md:flex-col">
                        <div className="flex flex-1 justify-center md:self-stretch">
                            <Heading size="texts" as="hl1l" className="text-[14px] font-normal !text-black-900_7f">
                                Home
                            </Heading>
                            <div className="flex flex-1 items-center gap-3 px-3">
                                <div className="h-[10px] w-[6px] rotate-[117deg] bg-black-900_7f" ></div>
                                <Heading size="texts" as="h2" className="text-[14px] font-normal">
                                    My Account
                                </Heading>
                            </div>
                        </div>
                        <Heading size="texts" as="h3" className="text-[14px] font-normal">
                            <span className="text-black-900_01">Welcome!&nbsp;</span>
                            <span className="text-orange-700">Md Rimel</span>
                        </Heading>
                    </div>
                    <div className="flex items-start md:flex-col">
                        <div className="flex w-[20%] flex-col items-start gap-5 md:w-full">
                            <div className="flex flex-col items-start gap-4 self-stretch">
                                <Heading as="h4" className="text-[16px] font-medium">
                                    Manage My Account
                                </Heading>
                                <div className="mx-[34px] flex flex-col items-start gap-2 self-stretch md:mx-0">
                                    <Heading as="h5" className="text-[16px] font-normal !text-orange-700">
                                        My Profile
                                    </Heading>
                                    <Heading as="h6" className="text-[16px] font-normal !text-black-900_7f">
                                        Address Book
                                    </Heading>
                                    <Heading as="p" className="text-[16px] font-normal !text-black-900_7f">
                                        My Payment Options
                                    </Heading>
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-4 self-stretch">
                                <Heading as="p" className="text-[16px] font-medium">
                                    My Orders
                                </Heading>
                                <div className="mx-[34px] flex flex-col items-start gap-2 self-stretch md:mx-0">
                                    <Heading as="p" className="text-[16px] font-normal !text-black-900_7f">
                                        My Returns
                                    </Heading>
                                    <Heading as="p" className="text-[16px] font-normal !text-black-900_7f">
                                        My Cancellations
                                    </Heading>
                                </div>
                            </div>
                            <Heading as="p" className="text-[16px] font-medium">
                                My WishList
                            </Heading>
                        </div>
                        <div className="flex flex-1 justify-center self-center md:self-stretch">
                            <div className="flex w-[94%] flex-col items-start justify-center gap-3.5 rounded bg-white-a700 py-9 pl-20 pr-14 shadow-xs md:w-full md:px-5 sm:p-5">
                                <Heading size="textlg" as="p" className="text-[20px] font-medium !text-orange-700">
                                    Edit Your Profile
                                </Heading>
                                <div className="flex flex-col gap-6 self-stretch">
                                    <div className="flex gap-[50px] md:flex-col">
                                        <div className="flex w-full flex-col items-start gap-2">
                                            <Heading as="p" className="text-[16px] font-normal">
                                                First Name
                                            </Heading>
                                            <Input
                                                shape="round"
                                                name="firstName"
                                                placeholder={"Md"}
                                                className="self-stretch rounded px-3.5"
                                            />
                                        </div>
                                        <div className="flex w-full flex-col items-start gap-2">
                                            <Heading as="p" className="text-[16px] font-normal">
                                                Last Name
                                            </Heading>
                                            <Input
                                                shape="round"
                                                name="lastName"
                                                placeholder="Rimel"
                                                className="self-stretch rounded px-3.5"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-[50px] md:flex-col">
                                        <div className="flex w-full flex-col items-start gap-2">
                                            <Heading as="p" className="text-[16px] font-normal">
                                                Email
                                            </Heading>
                                            <Input
                                                shape="round"
                                                type="email"
                                                name="email"
                                                placeholder="rimel111@gmail.com"
                                                className="self-stretch rounded px-3.5"
                                            />
                                        </div>
                                        <div className="flex w-full flex-col items-start gap-2">
                                            <Heading as="p" className="text-[16px] font-normal">
                                                Address
                                            </Heading>
                                            <Input
                                                shape="round"
                                                name="address"
                                                placeholder="Kingston, 5238, United State"
                                                className="self-stretch rounded px-3.5"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col items-start gap-2">
                                            <Heading as="p" className="text-[16px] font-normal">
                                                Password Changes
                                            </Heading>
                                            <Input
                                                shape="round"
                                                type="password"
                                                name="password"
                                                placeholder="Current Password"
                                                className="self-stretch rounded px-3.5"
                                            />
                                        </div>
                                        <Input
                                            shape="round"
                                            type="password"
                                            name="newPassword"
                                            placeholder="New Password"
                                            className="rounded px-3.5"
                                        />
                                        <Input
                                            shape="round"
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm New Password"
                                            className="rounded px-3.5"
                                        />
                                    </div>
                                    <div className="flex items-center justify-end gap-[33px]">
                                        <Heading as="p" className="text-[16px] font-normal">
                                            Cancel
                                        </Heading>
                                        <Button
                                            color="gray_900_01"
                                            size="4xl"
                                            className="min-w-[214px] rounded px-[34px] font-medium sm:px-5"
                                        >
                                            Save Changes
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer className="mt-[140px]" />
        </>
    );
}
