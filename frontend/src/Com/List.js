import React, { useEffect, useState } from 'react'

const List = () => {

const [pro,setp]=useState([])

useEffect(()=>{
    getp()
},[])

const getp=async()=>{
    let result = await fetch("http://localhost:5010/products",{
        headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            //product go token  last vidio
        }
    })
     result=await result.json()
     setp(result)
}
const del=async(id)=>{
    let result = await fetch(`http://localhost:5010/product/${id}`,{
        method:"Delete",
        headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            //product go token   last vidio
        } 
    })
      result = await result.json()
if(result){
    getp()
}
    }
    return (
 
<div class="relative  shadow-md sm:rounded-lg ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                company
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>

        {
    pro.map((e)=>{
        return(  
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {e.name}
                </th>
                <td class="px-6 py-4">
                    {e.company}
                </td>

                <td class="px-6 py-4">
                   {e.price}
                </td>
                <td class="px-4 m-12 py-4 text-center">

                <a href={"/update/"+e._id}  type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">UPDATE</a>

                <button onClick={()=>del(e._id)} type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">DELETE</button>
                  {/* upper e.id pass in tthe funtion okk */}



                </td>
                
            </tr>
        )})}

        </tbody>
    </table>
</div>
  )
}

export default List