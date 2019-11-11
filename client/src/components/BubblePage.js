import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { axiosWithAuth } from '../axiosAuth.js';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
      
     
useEffect(()=> {


      axiosWithAuth().get('http://localhost:5000/api/colors')
      .then(res => {
          console.log(res, "result from get colors")
      })
      .catch( err => {
          console.log(err, "this is an error duh")
      })

},[])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
      <h1>Welcome to BubblePage</h1>
    </>
  );
};

export default BubblePage;
