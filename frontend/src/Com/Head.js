import React from 'react'
import {Link} from "react-router-dom"

const Head = () => {
  return (
    <div>
        <ul>
        <Link to={"/"}> <h3 style={{cursor:"pointer",color:"black"}}>home</h3></Link>
      <Link to={"/about"}><h3 style={{cursor:"pointer",color:"black"}}>about</h3></Link>
      <Link to={"/con"}><h3 style={{cursor:"pointer",color:"black"}}>contact</h3></Link>
        </ul>
    <div>Head</div>
    </div>
  )
}


export default Head