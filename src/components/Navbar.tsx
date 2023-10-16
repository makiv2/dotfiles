import "../styles/navbar.css"
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className={"navbar"}>
                <Link to={"system"}>System Settings</Link>
                <Link to={"rectangle"} >Rectangle</Link>
                <Link to={"homebrew"} >Homebrew</Link>
                <Link to={"kitty"} >Kitty</Link>
                <Link to={"git"} >Git</Link>
                <Link to={"keyboards"} >Keyboard Layout/s</Link>
                <Link to={"neovim"} >Neovim</Link>
                <Link to={"jetbrains"} >Jetbrains</Link>
                <Link to={"cc"} >Creative Cloud</Link>
                <Link to={"docker"} >Docker Desktop</Link>
                <Link to={"python"} >Python</Link>
                <Link to={"node"} >Node Js</Link>
                <Link to={"latex"} >LaTeX</Link>
            </div>
            <Outlet/>
        </>
    )
}

export default Navbar