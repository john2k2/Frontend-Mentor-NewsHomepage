import { useState } from "react";

//logo
import LogoIcon from "@/components/icons/LogoIcon";
import MenuIcon from "@/components/icons/MenuIcon";

//icons
import CloseIcon from "@/components/icons/CloseIcon";

//NavLinkHeader
import NavLinkHeader from "@/components/MainHeader/NavLinkHeader";

const MainHeader = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const handlerOpenMenu = () => {
        setIsOpenMenu(true);
    };

    const handlerCloseMenu = () => {
        setIsOpenMenu(false);
    };

    return (
        <div className="container  mx-auto w-full px-3 md:container md:mx-auto md:flex md:h-[12vh] md:px-3 ">
            <section className="mx-auto flex h-24 w-full grid-cols-2 items-center justify-between py-8  ">
                <LogoIcon />

                <nav
                    className={`font-bold md:static md:ml-auto md:flex md:flex-row md:gap-4 md:p-0 ${
                        isOpenMenu
                            ? `absolute top-0 right-0  flex h-full w-10/12 flex-col  bg-white p-8 `
                            : `hidden`
                    }`}
                >
                    <button
                        onClick={handlerCloseMenu}
                        className="ml-auto mb-44 h-10 w-auto md:hidden "
                    >
                        <CloseIcon />
                    </button>
                    <NavLinkHeader text="home" />
                    <NavLinkHeader text="New" />
                    <NavLinkHeader text="Popular" />
                    <NavLinkHeader text="Trending" />
                    <NavLinkHeader text="Categories" />
                </nav>
                <button
                    onClick={handlerOpenMenu}
                    className="grid justify-end md:hidden"
                >
                    <MenuIcon />
                </button>
            </section>
        </div>
    );
};

export default MainHeader;
