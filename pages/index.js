export default function Home() {
  return (
    <>
    <div class="sm:flex">
    <img src="/img/head.png" class="shadow-inner w-full sm:w-1/3 lg:w-1/6 bg-gradient-to-b from-pink-500 to-blue-500 object-cover"/>
      <div class="w-full sm:w-2/3 lg:w-5/6 text-white font-bold text-3xl bg-black/75 backdrop-blur mx-auto">
        <div class="sm:flex p-6">
          <h1 className="mr-6"> Coding.</h1>
          <h1 className="mr-6"> Cooking.</h1>
          <h1 className="mr-6"> Creating.</h1>
        </div>
        <p class="text-sm p-6 pt-0 w-full font-semibold sm:w-1/2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.   
        </p>
        <div class="grid sm:pl-6 sm:grid-cols-4 grid-cols-2 w-full sm:w-1/2 sm:gap-4"> 
          <img src="https://picsum.photos/seed/aasd/1080/1080" class="sm:rounded shadow-lg shadow-gray-900"/>
          <img src="https://picsum.photos/seed/aas2d/1080/1080" class="sm:rounded shadow-lg shadow-gray-900"/>
          <img src="https://picsum.photos/seed/asda4ads/1080/1080" class="sm:rounded shadow-lg shadow-gray-900"/>
          <img src="https://picsum.photos/seed/a44a/1080/1080" class="sm:rounded shadow-lg shadow-gray-900"/>
        </div>
        <div class="w-full sm:w-1/2 flex justify-between">
          <div></div>
          <a href="#" class="text-sm mr-2 sm:mr-0 mb-6 inline-block px-2 py-1 mt-4 rounded bg-blue-500"> View Projects </a>   
        </div> 
      </div>
    </div>
    </>
  )
}