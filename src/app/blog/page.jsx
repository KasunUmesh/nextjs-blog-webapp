import { getPosts } from '@/lib/data';
import Styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard';

// FETCH DATA WITH AN API
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

    if(!res.ok){
        throw new Error("Something went wrong")
    }

    return res.json()
}

const BlogPage = async () => {
    // FETCH DATA WITH AN API
    const posts = await getData()

    // FETCH DATA WITHOUT AN API
    // const posts = await getPosts();

    return (
        <div className={Styles.container}>
            {posts.map((post) => (
                <div className={Styles.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
            
        </div>
    )
}

export default BlogPage;