import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

function Header (props){
    return (
    <>
    <nav class="flex items-center sm:justify-between flex-wrap px-6 w-screen h-16 fixed shadow-2xl backdrop-blur-xl bg-black/30 z-50">
        <div class="flex w-full sm:w-auto ml-0 items-center flex-shrink-0 text-white mx-auto justify-between">
            <span class="font-bold text-lg text-white tracking-tight mr-8 ">Dylan Dunn</span>
            <div class="hidden sm:block">
                <a href="#" class="text-sm font-semibold mr-6 hover:text-gray-200 py-2 font-semibold "> Home </a>
                <a href="#" class="text-sm font-semibold mr-6 hover:text-gray-200 py-2 font-semibold"> About </a>
                <a href="#" class="text-sm font-semibold mr-6 hover:text-gray-200 py-2 font-semibold"> Blog </a>
            </div>
            <span class="font-semibold text-lg text-white tracking-tight sm:hidden">
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
