
import { getSinglePost, getPosts, useTitle } from '../../ghost';
import { DateTime } from 'luxon';
import Prism from "prismjs";
import Link from 'next/link';
import { useEffect } from 'react';

export default function Post(props) {
    useEffect(() => {
        const highlight = async () => {
        await Prism.highlightAll(); // <--- prepare Prism 
        };
        highlight();
    });
    useTitle(props.post.title);
    return (
    <>
        <div className="flex-wrap w-screen sm:w-auto">
            <div className="w-full bg-white/100 shadow">
                <h1 className="text-4xl font-black font-roboto px-8 pt-8 "> {props.post.title}</h1>
                <p className="px-8">
                    <span className="text-sm text-gray-500 font-mono block mt-2"> {DateTime.fromISO(props.post.published_at).toLocaleString(DateTime.DATE_MED)} </span>
                    <span className="block font-bold"> By Dylan Dunn</span>
                </p>
                <img src={props.post.feature_image} className="object-cover w-full my-8 bg-black/75"/>
                <div className="text-black px-8 pb-8 font-serif space-y-4 mx-auto sm:max-w-[720px]" dangerouslySetInnerHTML={{ __html: props.post.html }}>
                </div>
            </div>
            <div className="flex flex-col sm:w-full bg-black/50">
            <div className="bg-black/75 shadow">
                <h3 className="font-semibold m-6 text-2xl text-white"> Related Posts</h3>
            </div>
            {props.posts.slice(0,3).map(post => (
                <div className="hover:brightness-75 sm:w-1/3">
                <Link href={"/post/" + post.slug}>
                    <img src={post.feature_image} className="w-full"/>
                    <div className="px-4 bg-black/75 text-white p-4 w-full flex flex-col">
                        <h1 className="font-semibold text-lg mb-2"> {post.title} </h1>
                        <p className="text-sm mb-4 line-clamp-5"> {post.excerpt} </p>
                        <p className="text-sm font-semibold ml-auto"> {DateTime.fromISO(props.post.published_at).toLocaleString(DateTime.DATE_MED)} </p>
                    </div>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    </>
    )
}
  
  export async function getServerSideProps(context) {
    const post = await getSinglePost(context.params.slug)
    const posts = await getPosts();
  
    if (!post) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { 
        post,
        posts
     }
    }
  }
  