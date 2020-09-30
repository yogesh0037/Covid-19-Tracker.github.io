import React,{useState,useEffect} from "react";

 function India(){
 const[indiaCases,setIndiaCases]=useState({});

  useEffect(()=>{
    fetch("https://api.covid19india.org/data.json")
    .then((response)=> response.json())
    .then((data)=>{
      
    })
  },[]);

  return(
      <div>
          <h1>India Map</h1>
      </div>
  )

}

export default India;