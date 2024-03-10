import Styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if(!res.ok){
//       throw new Error("Something went wrong")
//   }

//   return res.json()
// }

export const generateMetadata = async ({params}) => {
  const {slug} = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  }
}

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  const post = await getPost(slug);


  return (
    <div className={Styles.container}>
      {post.img && <div className={Styles.imgContainer}>
        <Image
          src={post.img}
          alt="singlePost"
          fill
          className={Styles.img}
        />
      </div>}
      <div className={Styles.textContainer}>
        <h1 className={Styles.title}>{post.title}</h1>
        <div className={Styles.detail}>
            {post && (<Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId}/>
            </Suspense>)}
            <div className={Styles.detailText}>
                <span className={Styles.detailTitle}>Published</span>
                <span className={Styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
            </div>
        </div>
        <div className={Styles.content}>
            {post.desc}
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
