import { DateTime } from 'luxon';
import { getPosts, useTitle } from '../../ghost';

import Link from 'next/link';

export default function Posts(props) {
    useTitle("Dylan Dunn | Blog");
    return (
    <div className="h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-3">
        {props.posts.slice(0,3).map(post => (
            <Link href={"/post/" + post.slug} className="relative shadow block bg-white/75 hover:bg-white/50 pb-8 mb-2">
                <h1 className="font-semibold text-xl pb-2 mb-2 p-4"> {post.title}</h1>
                <img className="w-full mb-4 sm:px-4" src={post.feature_image}></img>
                <p className="text-sm font-normal font-serif mb-2 line-clamp-5 px-4"> {post.excerpt} </p>
                <div className="text-gray-500 absolute bottom-4 right-4 block text-xs font-semibold">{DateTime.fromISO(post.published_at).toLocaleString(DateTime.DATE_MED)}</div>
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