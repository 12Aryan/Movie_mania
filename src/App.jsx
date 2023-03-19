import React from "react";

import Card from "./Card"
 
import MovieData from "./MovieData";
// mapcard is a callback which is passed inside the MovieData.map()
function mapcard(value){
     return (<Card key ={value.id}
                   movieImgSrc = {value.movieImgSrc}
                   movieLink={value.movieLink} 
                   movieName = {value.movieName} 
                   director = {value.director} 
     />);
}


function App(){
  return (<>
   
  <h1> list of some Underrated Movies</h1>
     <div className="container">
       {MovieData.map(mapcard)};  {/* using arr.map function to map the data into some other array   */}
       
      </div>
     
  </>);
}

export default App;