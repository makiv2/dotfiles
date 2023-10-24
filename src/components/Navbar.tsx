import "../styles/navbar.css"
import {Link, Outlet, useLocation} from "react-router-dom";
import React from "react";

const Navbar = () => {
    const { pathname } = useLocation();

    const CustomLink: React.FC<{ dest: string, pathname: string }> = ({dest, pathname}) => {
        const formattedDest = dest.startsWith('/') ? dest.slice(1).toLowerCase() : dest.toLowerCase();
        const formattedPathname = pathname.startsWith('/') ? pathname.slice(1).toLowerCase() : pathname.toLowerCase();

        return (
            <Link className={formattedPathname === formattedDest ? 'active' : 'inactive'}
                  to={formattedDest}
            >
                {dest === '/' ? "Overview" : dest}
            </Link>
        )
    }

    return (
        <div className={"root__div"}>
            <div className={"navbar"}>
                <CustomLink dest={'/'} pathname={pathname}></CustomLink>
                <CustomLink dest={'System'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Rectangle'} pathname={pathname}></CustomLink>
                <CustomLink dest={'HomeBrew'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Kitty'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Git'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Keyboard Layouts'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Neovim'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Jetbrains'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Creative Cloud'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Docker Desktop'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Python'} pathname={pathname}></CustomLink>
                <CustomLink dest={'Node Js'} pathname={pathname}></CustomLink>
                <CustomLink dest={'LaTeX'} pathname={pathname}></CustomLink>
            </div>
            <Outlet/>
        </div>
    )
}

export default Navbar
