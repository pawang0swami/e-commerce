import React, { useEffect, useState } from 'react'

const Home = () => {

const [pro,setp]=useState([])

useEffect(()=>{
 getp()
},[])

const getp=async()=>{
    let result = await fetch("http://localhost:5010/products")
     result=await result.json()
     setp(result)
}
console.log(pro)

  return (
    <>
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-wrap -m-4">
{
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
}
</div>
  </div>
</section>
</>

  )
}

export default Home