import React from 'react'

const Nav = () => {
  return (
    <div className=" bg-gray-100 py-4 px-16 flex justify-between items-center w-full">
      <h1 className=" text-gray-800 text-2xl font-bold ">Pixora</h1>

      <div className="flex gap-4">
        <button className="btn transparent">Login</button>
        <button className="btn primary">Sign up</button>
      </div>
   
    </div>
  );
}

export default Nav