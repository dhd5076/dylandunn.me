import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faBars,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Header (props){
    return (
    <>
    <nav class="flex items-center sm:justify-between flex-wrap px-6 w-full h-16 fixed shadow-2xl backdrop-blur-xl bg-white/75 z-50 shadow-2xl shadow-black/50">
        <div class="flex w-full sm:w-auto ml-0 items-center flex-shrink-0 text-white mx-auto justify-between">
            <span class="font-black text-xl text-gray-500 tracking-tight mr-8 ">Dylan Dunn</span>
            <div class="hidden sm:block text-black/90">
                <a href="/" class="text-sm font-semibold mr-2 font-semibold rounded shadow-inner bg-white/75 py-2 px-4"> 
                    Home 
                </a>
                <a href="/" class="text-sm font-semibold mr-2 font-semibold rounded shadow-inner bg-white/75 py-2 px-4"> 
                    Blog 
                </a>
                <a href="/" class="text-sm font-semibold mr-2 font-semibold rounded shadow-inner bg-white/75 py-2 px-4"> 
                    Contact 
                </a>
            </div>
            <span class="font-semibold text-lg text-gray-500 tracking-tight sm:hidden">
            <FontAwesomeIcon
                icon={faBars}
            />
            </span>
        </div>
        <div class="flex">
            <div class="hidden sm:block bg-gray-500 text-white font-semibold ml-8 text-sm py-2 px-4 rounded mr-2">
                Login
            </div>
            <div class="hidden sm:block bg-blue-500 text-white font-semibold text-sm py-2 px-4 rounded">
                Sign Up
            </div>
        </div>
    </nav>
    <div class="h-16"></div>
    </>
)}

export default Header
