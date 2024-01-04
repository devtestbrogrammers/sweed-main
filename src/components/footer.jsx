import Image from "next/image"
import Link from "next/link"
import logo from "/public/images/sweed-color.svg"
import { Iconoir, PinAlt, AtSign, Phone } from 'iconoir-react';
import linkedin from '/public/images/linkedin.png'
import instagram from '/public/images/instagram.png'
import facebook from '/public/images/facebook.png'

export default function Footer() {
    return (
        <div className="bg-color-tile p-5 pb-0 md:pt-12 md:px-16">
            <div className="bg-white py-8 md:py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center md:justify-items-start items-center md:items-start gap-8 flex-wrap">
                        <div>
                            <Link href="/">
                                <Image
                                    src={logo}
                                    alt=""
                                    className="lg:col-span-2 xl:col-span-1"
                                />
                            </Link>
                            <div className="flex gap-3 justify-center md:justify-start items-center mt-7">
                                <a href="https://www.linkedin.com/company/sweed-pos/" target="_blank">
                                    <Image
                                        src={linkedin}
                                        alt="LinkedIn"
                                    />
                                </a>
                                <a href="#" target="_blank">
                                    <Image
                                        src={instagram}
                                        alt="Instagram"
                                    />
                                </a>
                                <a href="#" target="_blank">
                                    <Image
                                        src={facebook}
                                        alt="Facebook"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="t-body-lg mb-2">Contact</h2>
                            <ul className="grid md:grid-cols-[auto_1fr] gap-3 text-neutral-700 items-center">
                                <li className="contents">
                                    <div className="hidden md:block"><PinAlt color="black" height={16} width={16}></PinAlt></div>
                                    <div>225 W Hubbard, Floor 3,<br />Chicago, IL 60654</div>
                                </li>
                                <li className="contents">
                                    <div className="hidden md:block"><AtSign color="black" height={16} width={16}></AtSign></div>
                                    <div>hello@sweed.com</div>
                                </li>
                                <li className="contents">
                                    <div className="hidden md:block"><Phone color="black" height={16} width={16}></Phone></div>
                                    <div>(767) 987-6789</div>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <div className="t-body-md mb-4">One Platform to Manage All Cannabis Retail Operations</div>
                            <Link href="/schedule-a-demo" className="btn btn-primary-solid">Schedule a Demo</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-6">
                <div className="container">
                    <div className="flex flex-col md:flex-row items-center gap-4 text-neutral-400 t-body-xs">
                        <div>© 2023 Sweed. All right reserved.</div>
                        <Link href="/terms-and-conditions">Terms & Conditions</Link>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                        <Link href="/cookies">Cookies</Link>
                        <hr className="w-16 md:hidden" />
                        <div className="md:ml-auto">Made in Chicago</div>
                    </div>
                </div>
            </div>
        </div>
    )
}