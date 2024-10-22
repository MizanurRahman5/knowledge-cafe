import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmarks}) => {

    const [bolgs, setBogs] = useState([])

    useEffect(() =>{
        const losdBlogs = async() =>{
            const res = await fetch('blog.json')
            const data = await res.json()
            setBogs(data)
        }
        losdBlogs()
    },[])

    return (
        <div className='md:w-2/3 space-y-8'>
            <h1>blogs : {bolgs.length}</h1>
            {
                bolgs.map(blog => <Blog 
                    key={blog.id} 
                    handleBookmarks={handleBookmarks}
                    blog={blog}
                    ></Blog>)
            }
        </div>
        
    );
};

export default Blogs;