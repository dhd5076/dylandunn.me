import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import the icons you need
import {
  faBars,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

function Header (props){
    return (
    <>
    <nav className="flex items-center sm:justify-between px-6 w-full h-16 fixed shadow-2xl backdrop-blur-xl bg-white/75 z-50 shadow-2xl shadow-black/50">
        <div className="flex my- 4w-full sm:w-auto ml-0 items-center flex-shrink-0 text-white mx-auto justify-between w-full">
            <span className="font-black text-xl text-gray-500 tracking-tight mr-8 "><a href="/">Dylan Dunn</a></span>
            <div className="hidden sm:block text-black/90">
                <a href="/" className="text-sm font-semibold mr-2 font-semibold rounded shadow-inner bg-white/75 py-2 px-4"> 
                    Home 
                </a>
                <a href="/" className="text-sm font-semibold mr-2 font-semibold rounded shadow-inner bg-white/75 py-2 px-4"> 
                    Blog 
                </a>
                <a href="/" className="text-sm font-semibold mr-2 font-semibold rounded shadow-inner bg-white/75 py-2 px-4"> 
                    Contact 
                </a>
            </div>
            <span className="font-semibold text-lg text-gray-500 tracking-tight sm:hidden ml-auto">
            <FontAwesomeIcon
                icon={faBars}
            />
            </span>
        </div>
        <div className="flex my-4">
            <a href="/login" className="hidden sm:block bg-gray-500 text-white font-semibold ml-8 text-sm py-2 px-4 rounded mr-2">
                Login
            </a>
            <div className="hidden sm:block bg-blue-500 text-white font-semibold text-sm py-2 px-4 rounded">
                Sign Up
            </div>
        </div>
    </nav>
    </>
)}

export default Header
