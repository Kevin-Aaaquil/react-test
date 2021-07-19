//import {useState, useEffect} from 'react'
import BlogList from './blogList';
import useFetch from './useFetch';

const Home =()=>{
  

//     const handleDelete = (id) => {
// const newBlogs= blogs.filter((item)=> item.id!==id)
//         setBlogs(newBlogs)
//     }
     

const {data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')


return (
    <div className="home">
        {error && <h3>{error}</h3>}
        {isPending && <div>Loading.....</div>}
    {/* {blogs && <BlogList blogs={blogs} title={"bitches"} handleDelete={handleDelete}/>} */}
    {blogs && <BlogList blogs={blogs} title={"Bitches"}/>}
    </div>
)
}

export default  Home