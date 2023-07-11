import { faArrowRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { getPosts, useTitle } from "../ghost"
import { DateTime } from "luxon"

export default function Home(props) {
  useTitle("Dylan Dunn | Home");
  return (
    <>
      <div className="sm:flex mt-16">
        <div className=" sm:max-w-sm sm:min-w-16 sm:h-full">
          <img src="/img/Head.png" className="object-cover sm:h-full bg-gradient-to-bl from-pink-500 to-indigo-500"/>
        </div>
        <div className="text-white font-bold text-3xl bg-black/75 flex-auto">
          <div className="lg:flex lg:flex-wrap p-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 inner-shadow">
            <h1 className="mr-6"> Coding.</h1>
            <h1 className="mr-6"> Cooking.</h1>
            <h1 className="mr-6"> Creating.</h1>
          </div>
          <p className="text-sm p-6 pt-0 w-full font-semibold">
          Full-Time Cook, Expert Script Kiddie, and Sporadic Content Creator. I thrive on diverse and novel endeavors, constantly honing my skills, without claiming mastery in any one field. Stick around long enough, and you might witness the rare occasion when I bring a project to completion. For often I find myself captivated by tangents that lead me into the realm of philosophical musings.
          </p>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <h1 className="text-2xl font-semibold text-black mb-6"> Latest Posts</h1>
        <div className="sm:flex">
          {props.posts.slice(0,3).map(post => (
            <a href={"/post/" + post.slug} className="relative shadow-lg block m-2 rounded bg-white/50 hover:bg-white/60 sm:w-1/3 p-4 pb-8">
              <h1 className="font-semibold pb-2"> {post.title}</h1>
              <p className="text-xs font-normal leading-4"> {post.excerpt} </p>
              <div className="text-gray-500 absolute bottom-2 right-4 block text-xs font-semibold">{DateTime.fromISO(post.published_at).toLocaleString(DateTime.DATE_MED)}</div>
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="text-white text-xs bg-black/75 overflow-hidden sm:w-1/3 p-6 flex-grow">
          <h1 className="text-2xl font-semibold mb-4"> About Me</h1>
          <div className="flex flex-wrap sm:flex-none">
            <p className="text-sm font-semibold mr-6"> During my workday, I serve as one of two cooks at La Bola, a small upscale bar nestled in downtown Rochester. While my body stays busy, my mind often roams free, inspiring late-night writings and weekend projects. I value the clear separation between my creative pursuits and financial dependence. This separation empowers me to create with unadulterated passion, unwavering curiosity, and a steadfast commitment to ethical principles. While my primary career lies in the culinary arts, I remain open to exploring alternative paths in life, eagerly awaiting the right opportunity to embrace new adventures. </p>
          </div>
        </div>
        <div className="text-black bg-white/75 w-full sm:w-auto p-6">
          <h1 className="text-2xl font-semibold mb-4"> Contact Me </h1>
          <span className="font-semibold"> Email: </span>
          <span> contact@dylandunn.me </span>
          <br/>
          <span className="font-semibold"> Phone: </span>
          <span> 315-529-4032 </span>
          {/*
          <form className="w-full">
            <input className="block w-1/2 mb-2 rounded py-2 px-4 inner-shadow bg-black/25 shadow-inner text-white font-semibold placeholder-gray-100" placeholder="Name"/>
            <input className="block w-1/2 rounded mb-2 py-2 px-4 inner-shadow bg-black/25 shadow-inner text-white font-semibold placeholder-gray-100" placeholder="Email"/>
            <textarea className="block w-full rounded mb-1 py-2 px-4 inner-shadow bg-black/25 shadow-inner text-white font-semibold placeholder-gray-100" placeholder="Type your message here..."/>
            <p className="text-right mt-0"> 0/300 Characters</p>
            <button className="ml-auto block bg-blue-500 px-2 py-1 rounded font-semibold text-white mt-2" disabled> Submit</button>
          </form>  */}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const posts = await getPosts();

  return {
      props: { posts }
  }
}