import React from 'react';
import Foto5 from "../image/5.jpg";
import Foto4 from "../image/4.jpeg";
import Edit from "../image/edit.png";
import Delete from "../image/delete.png";
import { Link } from "react-router-dom";
import Menu from '../Components/Menu';


const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src={Foto5} alt="content-foto" />
        <div className="user">
          <img src={Foto4} alt="user-foto" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={"/write?edit=2"}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae magnam non, asperiores nobis eos velit sapiente odio dolore obcaecati mollitia! Modi molestiae, vel sit corrupti dolores adipisci autem dicta magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ut, fugiat accusantium voluptatem velit delectus! Non a quis natus ducimus repudiandae ad, rem adipisci minus necessitatibus ipsum sequi, ipsam assumenda.<br/><br/>
        Illum officia alias sequi assumenda ex neque quis labore aliquid recusandae exercitationem ea quos eum hic nesciunt quisquam facere, error perferendis suscipit ab! Porro, labore libero voluptatibus ad pariatur doloribus!
        Delectus est voluptate iusto nesciunt dolores eveniet consequuntur blanditiis, quaerat molestiae, voluptatum exercitationem itaque? Tempore obcaecati odit cum ullam nam odio facere nihil, in, voluptatibus illo fugiat optio, officia mollitia!<br/><br/>
        Quasi magnam ullam unde quis, vitae dolorem tempore pariatur, accusantium, corrupti soluta ut. Dolores enim temporibus ex ab commodi quibusdam vero corrupti eaque consectetur sequi, rerum laborum ipsum voluptatem tempora.
        Alias dolores corrupti cum omnis provident incidunt pariatur recusandae necessitatibus maiores ratione. Optio sunt amet maxime, ipsa quae error ducimus nisi itaque commodi dolore sint? Possimus quaerat quae reprehenderit minus.
        Quasi similique reiciendis facere. Accusantium, dolorem! Nulla fugit corrupti labore commodi, eos iure illo nesciunt expedita quidem eligendi ea rerum magnam ex impedit veritatis eaque quisquam eveniet nisi cumque temporibus.
        Magnam, non aliquam. Dolores, minima doloribus. In magnam consectetur iste earum, maiores officiis reprehenderit recusandae cupiditate corporis facere explicabo delectus quos quo sequi impedit dolorum nihil obcaecati eos! Debitis, corporis?<br/><br/>
        Rerum minus eaque quas distinctio earum saepe voluptates praesentium perferendis deserunt. Incidunt facere, consequatur est laudantium harum nihil dolore magni ratione corporis. Dolorem deserunt vel, harum libero quod illo alias.
        Facere quia amet nostrum corrupti magni placeat laborum, pariatur architecto eligendi beatae officia consequuntur culpa iusto quibusdam animi hic doloribus odio dolor qui eaque at dolore temporibus. Eveniet, reprehenderit asperiores?<br/><br/>
        Cumque quas fugiat iste laudantium exercitationem sint in accusamus hic! Voluptatibus consequuntur voluptatem inventore corrupti dolorum repudiandae iusto recusandae, voluptatum quas aliquam, unde, ducimus praesentium odit adipisci rerum labore sapiente?</p>
      </div>
      <Menu/>
    </div>
  )
}

export default Single
