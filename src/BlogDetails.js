import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data:blog , isPending, error} = useFetch('http://localhost:8000/blogs/'+id)
    const history = useHistory();

    const handleClick = ()=>{

        fetch('http://localhost:8000/blogs/'+id,{
            method: "DELETE"
        })
        .then(()=>{
            history.push('/')
        })
    }


    return ( 
        <div className="blog-details">
            {error && <h3>{error}</h3>}
            {isPending && <div>Loading...</div>}
            {blog && (<article>
                <h2>{blog.title}</h2>
                <p>Written By {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete that right now!!!</button>
            </article>)}
        </div>
     );
}
 
export default BlogDetails;