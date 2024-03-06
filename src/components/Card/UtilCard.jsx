import React from "react";
import "./UtilCard.css"
        

const UtilityCards = ({data}) => {

const {title, content, image} = data;
  
  
  return (
 <div className="util-card">
  <div className="utilcard-image">
    <img src={image} alt="" />
  </div>
  <div className="utilcard-text">
    <p>{title}</p>
    <p>{content}</p>
  </div>
 </div>
  )
}

export default UtilityCards

