import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Home() {
  return (
    <>
    <div class="sm:flex shadow-lg w-full">
      <img src="/img/head.png" class="z-1 shadow-lg w-full sm:w-1/3 bg-gradient-to-b from-pink-500 to-indigo-500 object-cover"/>
      <div class="flex-grow w-full text-white font-bold text-3xl bg-black/75 mx-auto shadow-lg">
        <div class="lg:flex lg:flex-wrap p-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-purple-500 inner-shadow">
          <h1 className="mr-6"> Coding.</h1>
          <h1 className="mr-6"> Cooking.</h1>
          <h1 className="mr-6"> Creating.</h1>
        </div>
        <p class="text-sm p-6 pt-0 w-full font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 p-6 gap-6"> 
          <div> 
            <img src="https://picsum.photos/1080/540" class="rounded"/>
            <a class="block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full text-center mt-4"> Link 1 </a>
          </div>
          <div> 
            <img src="https://picsum.photos/1080/540" class="rounded"/>
            <a class="block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full text-center mt-4"> Link 2 </a>
          </div>
          <div> 
            <img src="https://picsum.photos/1080/540" class="rounded"/>
            <a class="block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full text-center mt-4"> Link 3 </a>
          </div>
        </div>
      </div>
      <div class="bg-white/25 shadow-lg p-6 overflow-y-auto">
        <h1 class="text-white font-semibold text-2xl mb-6"> Recent Posts </h1>
        <div class="grid grid-cols-1 gap-6 mb-6 h-1/3">
          <div class="bg-black/75 text-white rounded drop-shadow">
            <img src="https://picsum.photos/720" class="rounded-t w-full max-h-48 object-cover"></img>
            <h1 class="font-semibold pl-4 pt-4"> Post Title </h1>
            <p class="line-clamp-2 px-4 w-full text-sm"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div>
            <button class="block mb-4 mr-4 bg-blue-500 px-6 py-1 text-white text-sm rounded ml-auto mt-4 drop-shadow font-semibold"> Go </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}