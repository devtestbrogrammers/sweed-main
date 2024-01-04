import Image from "next/image"
import Link from "next/link"
import logo from "/public/images/sweed-white.png"

export default function Header() {
    return (
        <div className="bg-color-tile text-white">
            <div className="container">
                <div className="flex justify-between items-center gap-8 h-[105px]">
                    <Link href="/">
                        <Image
                            width={165}
                            src={logo}
                            alt=""
                        />
                    </Link>
                    <Link href="/schedule-a-demo" className="btn btn-secondary-solid">Schedule a Demo</Link>
                </div>
            </div>
        </div>
    )
}