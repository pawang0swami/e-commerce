import React, { useEffect, useState } from 'react'

const Home = () => {

const [pro,setp]=useState([])

useEffect(()=>{
 getp()
},[])



const getp=async()=>{
    let result = await fetch("http://localhost:5010/products",{
      headers:{
        authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
        //product go token    last
    }
    })
     result=await result.json()
     setp(result)
}
// console.log(pro)
// console.log(result)


const s=async(event)=>{
  let key=event.target.value
  // console.log(key)
  //   live seach 
  if (key){
  let r=await fetch(`http://localhost:5010/search/${key}`,{
    headers:{
      authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
      //product go token
  }
  })
  r=await r.json()
  // console.log(r)
  if(r){
    setp(r)
  }}else{
     getp()
  }
   }

// console.log(pro)
  return (
    <>

<form class="max-w-md ml-auto
 lg:-mt-16  md:size-1/4 md:-mt-16  
    ">  
          {/* -mt-16 home to nav  */}
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={s} type="search" id="default-search" class=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 lg:rounded-lg md:rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500      " placeholder="Search Mockups, Logos..." required />
        {/* <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
    </div>
</form>

    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
{
  pro.length>0?
    pro.map((e)=>{
        return(  
                 <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a class="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.category}/>
        </a>
        <div class="mt-4">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">company={e.company}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{e.name}</h2>
          <p class="mt-1">{e.price}$</p>
        </div>
      </div>

        )
    }) 
    :<h1 className='text-black font-bold shadow-lg mx-auto text-3xl my-24' >NO Result Found</h1>
}
</div>
  </div>
</section>

</>

  )
}

export default Home