
import { getSinglePost, getPosts, useTitle } from '../../ghost';
import { DateTime } from 'luxon';

import Link from 'next/link';

export default function Post(props) {
    useTitle(props.post.title);
    return (
    <>
        <div className="flex flex-col sm:flex-row mt-16">
            <div className="sm:w-5/6 bg-white/100 ">
                <h1 className="text-3xl font-black font-roboto pl-8 mt-8"> {props.post.title}</h1>
                <p className="px-8">
                    <span className="text-sm text-gray-500 font-mono block mt-2"> {DateTime.fromISO(props.post.published_at).toLocaleString(DateTime.DATE_MED)} </span>
                    <span className="block font-bold"> By Dylan Dunn</span>
                </p>
                <img src={props.post.feature_image} className="object-cover w-full my-8 bg-black/75"/>
                <div className="text-black px-8 pb-8 font-serif font-medium text-lg space-y-4 sm:w-3/4 mx-auto" dangerouslySetInnerHTML={{ __html: props.post.html }}>

                </div>
            </div>
            <div className="flex flex-col sm:w-1/4">
                <div>
                    <h3 className="font-semibold m-4 text-2xl text-white"> Featured Posts</h3>
                </div>
                {props.posts.slice(0,3).map(post => (
                    <div className="hover:brightness-75">
                    <Link href={"/post/" + post.slug}>
                        <img src={post.feature_image} className="object-cover w-full h-32"/>
                        <div className="px-4 bg-black/75 text-white p-4 w-full flex flex-col">
                            <h1 className="font-semibold text-md mb-2"> {post.title} </h1>
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
  