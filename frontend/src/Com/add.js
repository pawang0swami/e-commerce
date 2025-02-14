import React, { useState } from "react";

const Add = () => {
  const [name, setname] = React.useState("");
  const [price, setprice] = React.useState("");
  const [category, setcategory] = React.useState("");
  const [company, setcompany] = React.useState("");

  // const [error,seterror]=React.useState(false)

  const addp = async () => {
    if (!name || !price || !category || !company) {
      //   seterror(true)
      return false;
    }
    //      upper help  to not send date database

    // console.log(name,price,company,category)
    const userid = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5010/addproduct", {
      method: "post",
      body: JSON.stringify({ name, price, company, category, userid }),
      //    backend and upper name is must same
      headers: {
        "Content-Type": "application/json",

        authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
        //product go token    last vidio
      },
    });
    // console.log(userid)
    result = await result.json();
    // console.log(result);
  };

  return (
    <div>
      <div className="bg-slate-900  ">
        <form className="max-w-sm mx-auto pt-2 pb-7 ">
          <h1 className="dark:text-white mb-20 text-center text-3xl ">
            Add product
          </h1>

          <div className="mb-5">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              product name
            </label>
            <input
              type="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter product name"
              required
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </div>
          <div className="mb-5">
            <label
              for="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              price{" "}
            </label>
            <input
              type="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter product price"
              required
              onChange={(e) => setprice(e.target.value)}
              value={price}
            />
          </div>
          <div className="mb-5">
            <label
              for="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              image link (=category)
            </label>
            <input
              type="category"
              id="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter product image link"
              required
              onChange={(e) => setcategory(e.target.value)}
              value={category}
            />
          </div>
          <div className="mb-5">
            <label
              for="company"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              company
            </label>
            <input
              type="company"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="enter product company"
              required
              onChange={(e) => setcompany(e.target.value)}
              value={company}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            onClick={addp}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
