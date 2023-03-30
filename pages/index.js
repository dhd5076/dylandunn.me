export default function Home() {
  return (
    <>
    <div class="sm:flex shadow-lg w-full">
      <img src="/img/head.png" class="z-1 shadow-lg w-full sm:w-1/3 bg-gradient-to-b from-pink-500 to-indigo-500 object-cover"/>
      <div class="flex-grow sm:border sm:border-2 sm:border-white/75 w-full text-white font-bold text-3xl bg-black/75 mx-auto shadow-lg">
        <div class="lg:flex lg:flex-wrap p-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-purple-500 inner-shadow">
          <h1 className="mr-6"> Coding.</h1>
          <h1 className="mr-6"> Cooking.</h1>
          <h1 className="mr-6"> Creating.</h1>
        </div>
        <p class="text-sm p-6 pt-0 w-full font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   
        </p>
        <div class="grid grid-cols-3 p-6 gap-6"> 
          <img src="https://picsum.photos/seed/aasdgg/1080/540" class="rounded"/>
          <img src="https://picsum.photos/seed/agasasdadd/1080/540" class="rounded"/>
          <img src="https://picsum.photos/seed/aaggsad/1080/540" class="rounded"/>
          <button class="block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full"> Github </button>
          <button class="block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full"> Recipes </button>
          <button class="block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-0 w-full"> Projects </button>
        </div>
      </div>
      <div class="bg-white/25 shadow-lg p-6 overflow-y-auto">
        <h1 class="text-white font-semibold text-2xl mb-6"> Recent Posts </h1>
        <div class="grid grid-cols-2 mb-6 h-1/3">
          <div class="bg-white w-64 rounded drop-shadow p-2">
            <h1 class="font-semibold"> Post Title </h1>
            <p class="line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button class="block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-6"> Go </button>
          </div>
        </div>
        <div class="grid grid-cols-2 mb-6 h-1/3">
          <div class="bg-white w-64 rounded drop-shadow p-2">
            <h1 class="font-semibold"> Post Title </h1>
            <p class="line-clamp-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button class="block bg-blue-500 px-4 py-2 text-white text-sm rounded ml-auto mt-6"> Go </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}