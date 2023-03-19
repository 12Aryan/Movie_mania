import React from "react";

function Card(props){
    return (<>

     
     
    
        <div className="card ">
        <img src={props.movieImgSrc} alt="movieImg"/>
        <div className="card-info">
          <span className="card-category">Directer By : {props.director}</span>
          <h2 className="card-title">{props.movieName}</h2>
          <a href={props.movieLink} target="_blank" rel="noreferrer">
          <button  >watch now</button>
          </a>
        </div>
        </div>
      
      
      
  
    </>);
  }

  export default Card;