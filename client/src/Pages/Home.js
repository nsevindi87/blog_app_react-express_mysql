import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {

  const posts =[
    {
      id:1,
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img:"https://www.pexels.com/de-de/foto/schwarz-und-weiss-fliegen-tiere-vogel-15851469/"
    },
    {
      id:2,
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img:"https://www.pexels.com/tr-tr/fotograf/pembe-gokyuzu-altinda-fotograf-lavanta-cicegi-tarlasi-1166209/"
    },
    {
      id:3,
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img:"https://www.pexels.com/tr-tr/fotograf/golun-ortasinda-dag-siralarina-bakan-ahsap-ev-yansitici-ayna-golu-147411/"
    },
    {
      id:4,
      title:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      img:"https://www.pexels.com/tr-tr/fotograf/gokyuzunde-sicak-hava-balonlari-2325446/"
    },
  ]
  return (
    <div className='home'>
      <div className="posts">
        {posts?.map((post)=>(
          <div className="post" key={post.id}><div className="img">
            <img src={post.img} alt="post-photo" />
            <div className="content">
              <Link to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              <p>{post.desc}</p>
              <button>Read More</button>
              </Link>
            </div>
            </div></div>
        ))}
      </div>
    </div>
  )
}

export default Home
