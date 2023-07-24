import { DateTime } from 'luxon';
import { getPosts, useTitle } from '../../ghost';

import Link from 'next/link';

export default function Posts(props) {
    useTitle("Dylan Dunn | Blog");
    return (
    <div className="h-screen bg-black/25">
        <div className="sm:flex pl-6 py-6 bg-white/75 justify-between ">
            <h1 className="font-semibold mb-6 sm:mb-0"> Blog </h1>
            <div>
                <input className="rounded bg-black/25 p-2 placeholder-white/50" type="text" placeholder=""></input>
                <btn onClick="" className="cursor-pointer ml-2 mr-6 bg-black/75 hover:bg-black/50 rounded py-2 px-4 font-semibold text-white border-2 border-black/0"> Search</btn>
            </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3">
        {props.posts.slice(0,3).map(post => (
           <Link href={"/post/" + post.slug} className="relative block bg-white/75 hover:bg-white/50 pb-8">
            <img className="w-full mb-4" src={post.feature_image}></img>
            <h1 className="font-semibold text-xl pb-2 p-6"> {post.title}</h1>
            <p className="text-sm font-normal font-serif mb-6 line-clamp-5 px-6"> {post.excerpt} </p>
            <div className="text-gray-500 absolute bottom-6 right-6 block text-xs font-semibold">{DateTime.fromISO(post.published_at).toLocaleString(DateTime.DATE_MED)}</div>
          </Link>
          ))}
        </div>
    </div>
    )
}

export async function getServerSideProps(context) {
    const posts = await getPosts();

    return {
        props: { posts }
    }
}