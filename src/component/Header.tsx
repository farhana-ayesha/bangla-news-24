import Image from "next/image";
import React from "react";
import Navlinks from "./Navlinks";

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full",
    });

    return (
        <header className="w-full">
            <div className="flex items-center justify-between px-8 lg:px-20 xl:px-32">

                {/* Logo + Title */}
                <div className="flex items-center gap-2">
                    <Image
                        className="h-10 w-10"
                        src="/logo.webp"
                        alt="Logo"
                        width={50}
                        height={50}
                        priority
                    />

                    <div className="flex flex-col justify-center gap-1">
                        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
                            Bangla News 24
                        </h1>

                        <span className="text-sm text-gray-500">
                            {date}
                        </span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2 text-sm font-medium">
                    <button className="btn btn-ghost text-neutral-700 transition-colors hover:text-red-700">
                        সাইন ইন
                    </button>

                    <button className="btn bg-red-700 px-3 py-1.5 font-semibold text-white transition-colors hover:bg-red-800">
                        সাইন আপ
                    </button>
                </div>

            </div>
            <Navlinks/>
        </header>
    );
};

export default Header;