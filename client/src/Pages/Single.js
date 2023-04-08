import React, {useState, useContext,useEffect} from 'react';
import Foto5 from "../image/5.jpg";
import Foto4 from "../image/4.jpeg";
import Edit from "../image/edit.png";
import Delete from "../image/delete.png";
import { Link } from "react-router-dom";
import Menu from '../Components/Menu';
import { useLocation } from "react-router-dom";
import axios from 'axios';
import moment from "moment";
import { AuthContext } from '../context/authContext';

const Single = () => {
  const [post,setPost] = useState({})

 const location = useLocation()
 const postId = location.pathname.split("/")[2]

 const {currentUser} = useContext(AuthContext)

 useEffect(()=>{
  const fetchData = async ()=>{
    try {
      const res = await axios.get(`http://localhost:8000/api/posts/${postId}`)
      setPost(res.data)
    } catch (error) {
      console.log(error)
    }
  };
  fetchData()
 },[postId])

 const handleDelete = async() => {
  try {
    await axios.delete(`http://localhost:8000/api/posts/${postId}`)
    Navigate()
  } catch (error) {
    console.log(error)
  }
 }

  return (
    <div className='single'>
      <div className="content">
        <img src={post?.img} alt="content-foto" />
        <div className="user">
          {post.userImg && <img src={post.userImg} alt="user-foto" />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser.username === post.username && (<div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="edit" />
            </Link>
            <img onClick={handleDelete} src={Delete} alt="delete" />
          </div>)}
        </div>
        <h1>{post.title} </h1>
        {post.desc}
      </div>
      <Menu/>
    </div>
  )
}

export default Single
