import { faArrowRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { getPosts, useTitle } from "../ghost"
import { DateTime } from "luxon"
import FeatherIcon from 'feather-icons-react';

import Link from "next/link"

export default function Home(props) {
  useTitle("Dylan Dunn | Home");
  return (
    <>
      <div className="sm:flex">
        <img src="/img/Head.png" className="object-cover bg-gradient-to-bl from-pink-500 to-indigo-500 sm:w-1/3 box-border"/>
        <div className="text-white font-bold text-3xl bg-black/75 flex-auto sm:w-2/3">
          <div className="lg:flex lg:flex-wrap p-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500 inner-shadow">
            <h1 className="mr-6"> Coding.</h1>
            <h1 className="mr-6"> Cooking.</h1>
            <h1 className="mr-6"> Creating.</h1>
          </div>
          <p className="text-sm p-6 pt-0 w-full font-semibold">
          Full-Time Cook, Expert Script Kiddie, and Sporadic Content Creator. I thrive on diverse and novel endeavors, constantly honing my skills, without claiming mastery in any one field. Stick around long enough, and you might witness the rare occasion when I bring a project to completion. For often I find myself captivated by tangents that lead me into the realm of philosophical musings.
          </p>
          <div className="flex p-6">
            <Link className="text-lg hover:brightness-75 bg-white text-black/75 p-4 border-r-2 border-black/25" href="https://github.com/dhd5076">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="#333" />
              </svg>
            </Link>
            <Link className="text-lg hover:brightness-75 bg-white text-black/75 p-4 border-r-2 border-black/25" href="https://github.com/dhd5076">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none">
                <path d="M5.143 24H0V0h5.143v24ZM24 8.584C24 3.851 20.16 0 15.442 0c-4.734 0-8.585 3.85-8.585 8.584 0 4.72 3.851 8.559 8.585 8.559 4.719 0 8.558-3.84 8.558-8.559Z" fill="#FF424D" />
              </svg>
            </Link>
            <Link className="text-lg bg-white hover:brightness-75 text-black/75 p-4" href="youtube.com/@Dylan_Dunn">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon" fill="none">
                <path clip-rule="evenodd" d="M22.747 4.834c.372.375.64.84.775 1.351.502 1.885.502 5.815.502 5.815s0 3.93-.502 5.815A3.017 3.017 0 0 1 21.4 19.95c-1.876.505-9.376.505-9.376.505s-7.5 0-9.376-.505a3.016 3.016 0 0 1-2.122-2.135C.024 15.93.024 12 .024 12s0-3.93.502-5.815A3.016 3.016 0 0 1 2.648 4.05c1.876-.505 9.376-.505 9.376-.505s7.5 0 9.376.505c.51.139.974.41 1.347.784ZM15.842 12 9.57 8.431v7.138L15.842 12Z" fill="#FF0302" fill-rule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="p-0 flex-grow5">
        <h1 className="text-2xl font-semibold text-black bg-white/75 p-6"> Latest Posts</h1>
        <div className="sm:flex p-0 m-0">
          {props.posts.slice(0,3).map(post => (
           <Link href={"/post/" + post.slug} className="relative block bg-white/75 hover:bg-white/50 pb-8 sm:w-1/3">
            <img className="w-full mb-4" src={post.feature_image}></img>
            <h1 className="font-semibold text-xl pb-2 p-4"> {post.title}</h1>
            <p className="text-sm font-normal font-serif mb-2 line-clamp-5 px-4"> {post.excerpt} </p>
            <div className="text-gray-500 absolute bottom-4 right-4 block text-xs font-semibold">{DateTime.fromISO(post.published_at).toLocaleString(DateTime.DATE_MED)}</div>
          </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between shadow-2xl">
        <div className="text-white text-xs bg-black/75 overflow-hidden sm:w-1/3 p-6 flex-grow">
          <h1 className="text-2xl font-semibold mb-4 pb-2"> About Me</h1>
          <div className="flex flex-wrap sm:flex-none">
            <img src="/img/labola.jpg" className="md:w-1/2 w-full object-cover border-white/50 border-4"></img>
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