import { faArrowRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div class="sm:flex w-full">
        <img src="/img/Head.png" class="z-1 w-full sm:w-1/4 bg-gradient-to from-pink-500 to-indigo-500 object-cover"/>
        <div class="sm:shadow-xl sm:shadow sm:shadow-black flex-grow w-full text-white font-bold text-3xl bg-black/75 mx-auto sm:mb-2">
          <div class="lg:flex lg:flex-wrap p-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 inner-shadow">
            <h1 class="mr-6"> Coding.</h1>
            <h1 class="mr-6"> Cooking.</h1>
            <h1 class="mr-6"> Creating.</h1>
          </div>
          <p class="text-sm p-6 pt-0 w-full font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   
          </p>
          <div class="grid grid-cols-1 lg:grid-cols-3 p-4 gap-4"> 
            <div class="w-full mx-auto sm:w-full bg-white/25 p-2 rounded"> 
              <img src="/img/code.webp" class="rounded w-full h-32 object-cover"/>
              <a href="https://github.com/dhd5076" class="mb-2 block bg-black/75 px-4 py-2 text-white text-xs rounded ml-auto mt-0 w-full text-center mt-4"> 
                <span class="mr-2"> Github</span>
                <FontAwesomeIcon icon={faArrowRight}/>
               </a>
            </div>
            <div class="w-full mx-auto sm:w-full bg-white/25 p-2 rounded"> 
              <img src="/img/food.jpeg" class="rounded w-full h-32 object-cover"/>
              <a href="https://github.com/dhd5076" class="mb-2 block bg-orange-500/75 px-4 py-2 text-white text-xs rounded ml-auto mt-0 w-full text-center mt-4"> 
                <span class="mr-2"> Recipes </span>
                <FontAwesomeIcon icon={faArrowRight}/>
               </a>
            </div>
            <div class="w-full mx-auto sm:w-full bg-white/25 p-2 rounded mb-2 sm:mb-0"> 
              <img src="/img/video.jpeg" class="rounded w-full h-32 object-cover"/>
              <a href="https://github.com/dhd5076" class="mb-2 block bg-red-500/75 px-4 py-2 text-white text-xs rounded ml-auto mt-0 w-full text-center mt-4"> 
                <span class="mr-2"> Youtube </span>
                <FontAwesomeIcon icon={faArrowRight}/>
               </a>
            </div>
          </div>
        </div>
        <div class="bg-white/75 p-6 overflow-y-auto ">
          <h1 class="text-black font-semibold text-2xl mb-6 "> Featured Post </h1>
          <div class="grid grid-cols-1 gap-6 mb-6 h-1/3">
            <div class="bg-black/75 text-white rounded">
              <img src="https://picsum.photos/720/300" class="object-cover rounded"></img>
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
      <div class="p-6 bg-white/25">
        <h1 class="text-2xl font-semibold text-white"> Latest Posts</h1>
        <div class="sm:flex">
          <a href="/post/asdasdasd" class="block m-2 rounded bg-white/50 hover:bg-white/60 sm:w-1/6 p-4">
            <h1 class="font-semibold pb-2"> Post Title</h1>
            <p class="text-xs font-normal leading-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <span class="text-gray-500 block mt-4 text-xs font-semibold"> 2 Days Ago</span>
          </a>
          <a href="/post/asdasdasd" class="block m-2 rounded bg-white/50 hover:bg-white/60 sm:w-1/6 p-4">
            <h1 class="font-semibold pb-2"> Post Title</h1>
            <p class="text-xs font-normal leading-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </a>
          <a href="/post/asdasdasd" class="block m-2 rounded bg-white/50 hover:bg-white/60 sm:w-1/6 p-4">
            <h1 class="font-semibold pb-2"> Post Title</h1>
            <p class="text-xs font-normal leading-4"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </a>
        </div>
      </div>
      <div class="bg-white/75 h-12 backdrop-blur-xl shadow-lg shadow-gray-900/30 -my-2">
      </div>
      <div class="flex flex-wrap justify-between sm:pb-8">
        <div class="text-white text-xs bg-black/75 overflow-hidden sm:w-1/3 p-6 flex-grow">
          <h1 class="text-2xl font-semibold mb-4"> About Me</h1>
          <div class="flex flex-wrap sm:flex-none">
            <p class="text-sm font-semibold mr-6 mb-8 sm:w-1/2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div class="text-black bg-white/75 w-full sm:w-1/3 p-6 shadow-2xl ">
          <h1 class="text-2xl font-semibold mb-4"> Let's Talk!</h1>
          <form class="w-full">
            <input class="block w-1/2 mb-2 rounded py-2 px-4 inner-shadow bg-black/25 shadow-inner text-white font-semibold placeholder-gray-100" placeholder="Name"/>
            <input class="block w-1/2 rounded mb-2 py-2 px-4 inner-shadow bg-black/25 shadow-inner text-white font-semibold placeholder-gray-100" placeholder="Email"/>
            <textarea class="block w-full rounded mb-1 py-2 px-4 inner-shadow bg-black/25 shadow-inner text-white font-semibold placeholder-gray-100" placeholder="Type your message here..."/>
            <p class="text-right mt-0"> 0/300 Characters</p>
            <button class="ml-auto block bg-blue-500 px-2 py-1 rounded font-semibold text-white mt-2"> Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}