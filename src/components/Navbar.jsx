import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({
  selectedCategory,
  handleCategoryChange,
  setSearchQuery,
  searchQuery,
}) {
  console.log(searchQuery);
  return (
    <div className="mb-10">
      <div className="bg-blue-500  p-4 flex items-center justify-between rounded-xl">
        <Link to={"/"}>
          <h1 className="text-xl md:text-2xl font-bold text-slate-50">Dainik Sambad</h1>
        </Link>
        <div className="flex items-center justify-between space-x-6">
        <div>
            <Link to={"/"}>
              <h3 className="font-semibold cursor-pointer text-white">Home</h3>
            </Link>
          </div> 

          <div>
            <Link to={"/favorites"}>
              <h3 className="font-semibold cursor-pointer text-white">Favorites</h3>
            </Link>
          </div>

          <div className="hidden md:block">
            <select
              name="category"
              id=""
              className="p-2 rounded-md"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="general">General</option>
              <option value="business">Business</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="science">Science</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
            </select>
          </div>
          <div>
            <input
              className="hidden md:block w-32 px-2 py-1 md:w-44 md:p-2 rounded-md"
              type="text"
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
