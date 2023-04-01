import { faArrowRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div class="sm:flex w-full">
        <img src="/img/Head.png" class="z-1 w-full sm:w-1/3 bg-gradient-to from-pink-500 to-indigo-500 object-cover"/>
        <div class="sm:shadow-xl sm:shadow sm:shadow-black flex-grow w-full text-white font-bold text-3xl bg-black/75 mx-auto">
          <div class="lg:flex lg:flex-wrap p-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-purple-500 inner-shadow">
            <h1 className="mr-6"> Coding.</h1>
            <h1 className="mr-6"> Cooking.</h1>
            <h1 className="mr-6"> Creating.</h1>
          </div>
          <p class="text-sm p-6 pt-0 w-full font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 p-6 gap-6"> 
            <div> 
              <img src="https://picsum.photos/1080/540" class="rounded"/>
              <a class="mb-2 block bg-pink-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full text-center mt-4"> Github </a>
            </div>
            <div> 
              <img src="https://picsum.photos/seed/11/1080/540" class="rounded"/>
              <a class="mb-2 block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full text-center mt-4"> Recipes </a>
            </div>
            <div> 
              <img src="https://picsum.photos/seed/43/1080/540" class="rounded"/>
              <a class="mb-2 block bg-purple-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full text-center mt-4"> Youtube </a>
            </div>
          </div>
        </div>
        <div class="bg-white/25 p-6 overflow-y-auto">
          <h1 class="text-white font-semibold text-2xl mb-6"> Featured Post </h1>
          <div class="grid grid-cols-1 gap-6 mb-6 h-1/3">
            <div class="bg-black/75 text-white rounded">
              <img src="https://picsum.photos/720" class="rounded-t w-full max-h-48 object-cover"></img>
              <h1 class="font-semibold pl-4 pt-4"> Post Title </h1>
              <p class="line-clamp-4 px-4 w-full text-sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              <div class="justify-between w-full p-4 flex">
                <span class="text-sm font-semibold text-white/50 py-1 "> 2 Days Ago </span>
                <button class="text font-bold bg-blue-500 hover:bg-blue-400 px-4 py-1 rounded text-white"> <FontAwesomeIcon icon={faArrowRight}/> </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-white/75 h-12 backdrop-blur-xl shadow-lg shadow-gray-900/30 -my-2">
      </div>
      <div class="flex">
        <div class="text-white text-xs bg-black/75 overflow-hidden sm:w-1/3 p-6">
          <h1 class="text-2xl font-black mb-4"> About Me</h1>
          <div class="flex flex-wrap sm:flex-none">
            <p class="text-sm font-semibold mr-6 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <img src="https://picsum.photos/seed/22111/1080/640" class="rounded w-full h-1/2"></img>
          </div>
        </div>
      </div>
    </>
  )
}