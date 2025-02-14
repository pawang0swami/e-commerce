import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sign = () => {
  const [name, setn] = useState("");
  const [email, sete] = useState("");
  const [password, setp] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    const a = localStorage.getItem("user");
    if (a) {
      nav("/");
    }
    // uper help to not open sign up page when user in found
  });

  const Data = async () => {
    console.log(email, password, name);

    let result = await fetch("http://localhost:5010/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result.result));
    localStorage.setItem("token", JSON.stringify(result.token));

    if (result) {
      nav("/");
    }
  };

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-white">
              Slow-carb next level shoindxgoitch ethical authentic, poko
              scenester
            </h1>
            <p className="leading-relaxed mt-4">
              Poke slow-carb mixtape knausgaard, typewriter street art gentrify
              hammock starladder roathse. Craies vegan tousled etsy austin.
            </p>
          </div> */}
          <div className="lg:w-2/4 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            {/* <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0"> */}

            <h2 className="text-white text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-400"
              >
                Name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setn(e.target.value)}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => sete(e.target.value)}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-400">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setp(e.target.value)}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={Data}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Button
            </button>
            <p className="text-xs mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sign;
