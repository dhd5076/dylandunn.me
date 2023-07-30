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
    <div className=" h-16 fixed backdrop-blur-sm bg-white/50 z-50 shadow shadow-black/50 w-full">
        <nav className="flex mx-auto items-center px-6 w-full max-w-7xl w-full">
            <div className="flex w-full my-4 ml-0 items-center text-white justify-between">
                <div className="font-black text-2xl text-gray-900 mr-8 bg-clip-text text-transparent bg-black/75"><Link href="/">Dylan Dunn</Link></div>
                <div className="">
                    <Link href="/" className=" font-semibold mr-2 font-semibold text-white bg-black/75 rounded hover:text-black hover:bg-white/50 py-2 px-4"> 
                        Home
                    </Link>
                    <Link href="/post" className=" font-semibold font-semibold text-white bg-black/75 rounded hover:text-black hover:bg-white/50 py-2 px-4"> 
                        Blog 
                    </Link>
                </div>
            </div>
        </nav>
    </div>
    </>
)}

export default Header
