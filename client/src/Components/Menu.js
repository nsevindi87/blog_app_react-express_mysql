import React from 'react';
import Foto3 from "../image/3.jpeg"


const Menu = () => {
    const posts = [
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
    ]

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {
        posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={Foto3} alt="aside-photo"/>
                <h2>{post.title}</h2>
                <button>Read More</button>
            </div>
        ))
      }
    </div>
  )
}

export default Menu
