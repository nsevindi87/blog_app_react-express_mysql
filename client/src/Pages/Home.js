import React, {useState, useEffect}from 'react';
import { Link,useLocation } from "react-router-dom";
import axios from 'axios';
import Foto5 from "../image/5.jpg"


const Home = () => {
 const [posts,setPosts] = useState([])

 const cat = useLocation().search

 useEffect(()=>{
  const fetchData = async ()=>{
    try {
      const res = await axios.get(`http://localhost:8000/api/posts${cat}`)
      setPosts(res.data)
    } catch (error) {
      console.log(error)
    }
  };
  fetchData()
 },[cat])
  /* const posts = [
    {
      id: 1,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 2,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 3,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
      id: 4,
      title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

    },
  ] */
  return (
    <div className='home'>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={Foto5} alt="post-photo" />
            </div>
              <div className="content">
                <Link to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                  <p>{post.desc}</p>
                  <button>Read More</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
