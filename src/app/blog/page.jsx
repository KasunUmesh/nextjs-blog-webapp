import Styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard';
const BlogPage = () => {
    return (
        <div className={Styles.container}>
            <div className={Styles.post}>
                <PostCard/>
            </div>
            <div className={Styles.post}>
                <PostCard/>
            </div>
            <div className={Styles.post}>
                <PostCard/>
            </div>
            <div className={Styles.post}>
                <PostCard/>
            </div>
        </div>
    )
}

export default BlogPage;