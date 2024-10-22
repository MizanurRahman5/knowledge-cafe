import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleBookmarks}) => {
    // console.log(blog)
    const {cover, title, author, author_img, post_date, reading_time, hashtags} = blog;
    return (
        <div>
            <img className="w-full" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex">
                <img className="w-12" src={author_img} alt="" />
                <div>
                    <h2>{author}</h2>
                    <p>{post_date}</p>
                </div>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <p>{reading_time} min read</p>
                   <button onClick={()=> handleBookmarks(blog)} className="text-2xl"> <CiBookmark /></button>
                </div>
                
            </div>
            <div>
                <h1 className="text-4xl">{title}</h1>
                {
                    hashtags.map((hastage , ind)=> <spen key={ind}>{hastage}</spen>)
                }
            </div>

        </div>
    );
};

Blog.PropTypes = {
    blog: PropTypes.object
}

export default Blog;