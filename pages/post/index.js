import { DateTime } from 'luxon';
import { getPosts, useTitle } from '../../ghost';

import Link from 'next/link';

export default function Posts(props) {
    useTitle("Dylan Dunn | Blog");
    return (
    <div className="p-4 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-3">
        {props.posts.slice(0,3).map(post => (
            <Link href={"/post/" + post.slug} className="relative shadow-lg block rounded bg-white/50 hover:bg-white/60 p-4 pb-8">
              <img className="w-full" src={post.feature_image}></img>
              <h1 className="font-semibold py-2"> {post.title}</h1>
              <p className="text-sm font-normal font-serif mb-2 line-clamp-5"> {post.excerpt} </p>
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