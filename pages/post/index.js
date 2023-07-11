import { DateTime } from 'luxon';
import { getPosts } from '../../ghost';

export default function Posts(props) {
    return (
    <div className="p-4 mt-16">
        <div className="grid grid-cols-3">
        {props.posts.map(post => (
            <a href={"/post/" + post.slug} className="relative shadow-lg block m-2 rounded bg-white/50 hover:bg-white/60 pb-8">
                <img src={post.feature_image} className="object-cover w-full h-48 bg-black/75 rounded-t"></img>
                <h1 className="font-semibold p-4 pb-0"> {post.title}</h1>
                <p className="text-xs font-normal leading-4 p-4"> {post.excerpt} </p>
                <div className="text-gray-500 absolute bottom-2 right-4 block text-xs font-semibold">{DateTime.fromISO(post.published_at).toLocaleString(DateTime.DATE_MED)}</div>
            </a>
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