import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Header (props){
    return (
    <>
    <nav class="flex items-center sm:justify-between flex-wrap px-6 w-screen h-16 fixed shadow-2xl backdrop-blur-xl bg-white/75 z-50 shadow-2xl shadow-black/50">
        <div class="flex w-full sm:w-auto ml-0 items-center flex-shrink-0 text-white mx-auto justify-between">
            <span class="font-bold text-lg text-gray-500 tracking-tight mr-8 ">Dylan Dunn</span>
            <div class="hidden sm:block text-white/90">
                <Link href="/" class="text-sm font-semibold mr-6 hover:text-black/90 py-2 px-4 font-semibold rounded bg-purple-500/75 hover:bg-purple-400/75 hover:shadow-inner"> Home </Link>
                <a href="blog" class="text-sm font-semibold mr-6 hover:text-black/90 py-2 px-4 font-semibold rounded bg-pink-500/75 hover:bg-pink-400/75 hover:shadow-inner"> Blog </a>
                <a href="#" class="text-sm font-semibold mr-6 hover:text-black/90 py-2 px-4 font-semibold rounded bg-orange-500/75 hover:bg-orange-400/75 hover:shadow-inner"> Karen </a>
            </div>
            <span class="font-semibold text-lg text-gray-500 tracking-tight sm:hidden">
            <FontAwesomeIcon
                icon={faBars}
            />
            </span>
        </div>
        <div class="hidden sm:block bg-blue-500 text-white font-semibold text-sm py-2 px-4 rounded">
            Login
        </div>
    </nav>
    <div class="h-16"></div>
    </>
)}

export default Header
