import React from "react";

function Card(prop){
    return <div>
     <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <img
            src={prop.imgURL}
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p>{prop.phone}</p>
          <p>{prop.email}</p>
        </div>
      </div>
    </div>

}

export default Card;