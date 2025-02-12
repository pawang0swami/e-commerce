import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Head = () => {

  const a=localStorage.getItem("user")
  const nav=useNavigate()
 const logout =()=>{
   localStorage.clear()
   nav("/sign")
   
 }

 


  return (
    <div>

<header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Tailblocks</span>
    </a>
    {a? <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">

  <Link to={"/"}> <h3  > <a className="mr-5 hover:text-white">home</a> </h3></Link>
      <Link to={"/add"}><h3   ><a className="mr-5 hover:text-white">add</a></h3></Link>
      <Link to={"/list"}><h3   ><a className="mr-5 hover:text-white">list</a></h3></Link>

      {/* <Link to={"/update"}><h3    > <a className="mr-5 hover:text-white">update</a></h3></Link> */}
      {/* <Link to={"/profile"}><h3    > <a className="mr-5 hover:text-white">profile</a></h3></Link> */}
       <Link onClick={logout} to={"/sign"}><h3    > <a className="mr-5 hover:text-white">logout({JSON.parse(a).name})</a></h3></Link> 












    </nav>

       :
    <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center" > 
      <Link  to={"/sign"}><h3    > <a className="mr-5 hover:text-white">signup</a></h3></Link>     
<Link  to={"/login"}><h3    > <a className="mr-5 hover:text-white">login</a></h3></Link>
</ul>

 }
    
   
  </div>
</header>
       
    </div>
  )
}


export default Head