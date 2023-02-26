// import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
const Home = () => {
    const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    return ( 
        <div className="home">
          {error &&<div>{error}</div>}
          {isPending && <div>loading...</div>}
         {blogs && <BlogList blogs = {blogs} title="All blogs here" />}
         
         {/* <BlogList blogs = {blogs.filter((blog)=>blog.author ==='mario') } title="mario blogs here"  />
         <BlogList blogs = {blogs.filter((blog)=>blog.author ==='yoshi') } title="yoshi blogs here"  /> */}
        </div>
      );
      
  
}
 
export default Home;