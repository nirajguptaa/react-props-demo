import React from 'react'
import Avatar from './Avatar'
import Detail from './Detail'
function card(props){
   return (
     <div className="card">
        <div className="top">
          <h2 className="name" >{props.name}</h2>
          {/* <img className="circle-img"msrc={props.imgURL} alt="avatar_img" /> */}
          <Avatar img={props.imgURL}/>
        </div>
        <div className="bottom">
          {/* <p className="info">{props.phone}</p>
          <p className="info">{props.email}</p> */}
          <Detail detailInfo={props.phone}></Detail>
          <Detail detailInfo={props.email}></Detail>
        </div>
      </div>
   )
}
export default card;