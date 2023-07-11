
import { getSinglePost, getPosts } from '../../ghost';
import { DateTime } from 'luxon';


export default function Post(props) {
    return (
    <>
        <div className="">
            <img src={props.post.feature_image} className="object-cover h-96 w-full mt-16 bg-black/75 brightness-50"/>
        </div>
        <div className="flex flex-col sm:flex-row">
            <div className="sm:w-5/6 bg-white/75 text-black">
                <h1 className="text-4xl font-semibold pl-8 mt-8"> {props.post.title}</h1>
                <p className="font-semibold px-8 mt-2 mb-4">
                    <a href="/posts" className="text-sm ">By <span className="underline"> { props.post.authors[0].name } </span></a>
                    <br/>
                    <span className="text-sm text-gray-800"> {DateTime.fromISO(props.post.published_at).toLocaleString(DateTime.DATE_MED)} </span>
                </p>
                <div className="space-y-4 text-black px-8 pb-4" dangerouslySetInnerHTML={{ __html: props.post.html }}>

                </div>
            </div>
            <div className="flex flex-col sm:w-1/4">
                <div>
                    <h3 className="font-semibold m-4 text-2xl text-white"> Featured Posts</h3>
                </div>
                {props.posts.slice(0,3).map(post => (
                    <div className="hover:brightness-75">
                    <a href={"/post/" + post.slug}>
                        <img src={post.feature_image} className="object-cover w-full"/>
                        <div className="px-4 bg-black/75 text-white p-4 w-full flex flex-col">
                            <h1 className="font-semibold text-md"> {post.title} </h1>
                            <p className="text-sm mb-4"> {post.excerpt} </p>
                            <p className="text-sm font-semibold ml-auto"> {DateTime.fromISO(props.post.published_at).toLocaleString(DateTime.DATE_MED)} </p>
                        </div>
                        </a>
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
  