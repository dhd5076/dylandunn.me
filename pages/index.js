import { faArrowRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { getPosts, useTitle } from "../ghost"
import { DateTime } from "luxon"

import Link from "next/link"

export default function Home(props) {
  useTitle("Dylan Dunn | Home");
  return (
    <>
      <div className="sm:flex mt-16">
        <img src="/img/Head.png" className="object-cover sm:h-full bg-gradient-to-bl from-pink-500 to-indigo-500 w-full"/>
        <div className="text-white font-bold text-3xl bg-black/75 flex-auto">
          <div className="lg:flex lg:flex-wrap p-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 inner-shadow">
            <h1 className="mr-6"> Coding.</h1>
            <h1 className="mr-6"> Cooking.</h1>
            <h1 className="mr-6"> Creating.</h1>
          </div>
          <p className="text-sm p-6 pt-0 w-full font-semibold">
          Full-Time Cook, Expert Script Kiddie, and Sporadic Content Creator. I thrive on diverse and novel endeavors, constantly honing my skills, without claiming mastery in any one field. Stick around long enough, and you might witness the rare occasion when I bring a project to completion. For often I find myself captivated by tangents that lead me into the realm of philosophical musings.
          </p>
          <div className="pb-6 sm:flex">
            <Link className="text-lg m-6 hover:brightness-75 bg-white sm:w-1/3 text-black/75 p-2 rounded shadow block justify-center flex" href="https://github.com/dhd5076">
              <span> Github </span> 
            </Link>
            <Link className="text-lg m-6 hover:brightness-75 bg-pink-500 sm:w-1/3 text-white p-2 rounded shadow block justify-center flex" href="/post">
              <span> Blog </span> 
            </Link>
            <Link className="text-lg m-6 hover:brightness-75 bg-red-500 sm:w-1/3 text-white p-2 rounded shadow block justify-center flex" href="https://youtube.com/@Dylan_Dunn">
              <span> Youtube</span> 
            </Link>
          </div>
        </div>
      </div>
      <div className="p-0 flex-grow bg-white/25">
        <h1 className="text-2xl font-semibold text-black mb-2 bg-white/75 p-6 shadow pl-6"> Latest Posts</h1>
        <div className="sm:flex p-0 m-0">
          {props.posts.slice(0,3).map(post => (
           <Link href={"/post/" + post.slug} className="relative shadow block sm:rounded bg-white/75 hover:bg-white/50 pb-8 m-6 sm:w-1/3">
            <h1 className="font-semibold text-xl pb-2 mb-2 p-4"> {post.title}</h1>
            <img className="w-full mb-4 sm:px-4" src={post.feature_image}></img>
            <p className="text-sm font-normal font-serif mb-2 line-clamp-5 px-4"> {post.excerpt} </p>
            <div className="text-gray-500 absolute bottom-4 right-4 block text-xs font-semibold">{DateTime.fromISO(post.published_at).toLocaleString(DateTime.DATE_MED)}</div>
          </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between shadow-2xl">
        <div className="text-white text-xs bg-black/75 overflow-hidden sm:w-1/3 p-6 flex-grow">
          <h1 className="text-2xl font-semibold mb-4"> About Me</h1>
          <div className="flex flex-wrap sm:flex-none">
            <img src="/img/labola.jpg" className="md:w-1/2 w-full object-cover rounded border-white/50 border-4"></img>
            <p className="text-sm font-semibold md:w-1/2 md:pl-6 mt-4 md:mt-0"> During my workday, I serve as one of two cooks at La Bola, a small upscale bar nestled in downtown Rochester. While my body stays busy, my mind often roams free, inspiring late-night writings and weekend projects. I value the clear separation between my creative pursuits and financial dependence. This separation empowers me to create with unadulterated passion, unwavering curiosity, and a steadfast commitment to ethical principles. While my primary career lies in the culinary arts, I remain open to exploring alternative paths in life, eagerly awaiting the right opportunity to embrace new adventures. </p>
          </div>
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
    </>
  )
}

export async function getServerSideProps(context) {
  const posts = await getPosts();

  return {
      props: { posts }
  }
}