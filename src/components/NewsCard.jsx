import React, { useEffect } from "react";
import ReactDOM from 'react-dom';
import Tilt from 'react-parallax-tilt';
import toast from "react-hot-toast";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function NewsCard({ type, id, title, image, author, desc, date, link }) {
  // Function to convert date to like "21 Oct 2019" format
  function convertDate(dateString) {
    // Parse the input date string
    const date = new Date(dateString);

    // Define arrays for month and day names
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract the date components
    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    // Format the date to "21 Oct 2019"
    return `${day} ${month} ${year}`;
  }

  //save post to local storage
  const saveFavorites = () => {
    try {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      favorites.push({
        id: id,
        title: title,
        image: image,
        author: author,
        desc: desc,
        date: date,
        link: link,
      });

      localStorage.setItem("favorites", JSON.stringify(favorites));
      toast.success("Added to Favorites");
    } catch (error) {
      toast.error("Failed to add to Favorites");
      console.log(error);
    }
  };

  //remove post from local storage
  const removeFavorites = () => {
    try {
      let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      let newFavorites = favorites.filter((item) => item.id !== id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      toast.success("Removed from Favorites");
    } catch (error) {
      toast.error("Failed to remove from Favorites");
      console.log(error);
    }
  };

  return (
    <Tilt>
    <div className="bg-blue-50 overflow-hidden border-b-4 border-blue-500 w-full md:w-80  rounded-lg shadow-2xl p-1">
      <img
        src={
          image
            ? image
            : "https://plus.unsplash.com/premium_photo-1688561384438-bfa9273e2c00?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="News Image"
        className="w-full object-cover h-48 sm:h-48 md:h-64 rounded-md "
      />

      <a href={link} className="cursor-pointer" target="_blank">
        <div className="p-4 md:p-6">
          <p className="text-blue-500 font-semibold text-xs mb-1 leading-none">
            {author ? author : ""}
          </p>
          <h3 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal">
            {title ? title : "Lorem ipsum dolor sit amet."}
          </h3>
          <div className="text-sm flex flex-col justify-center">
            <p>{desc ? desc : ""}....</p>
            <p className="leading-none mt-5 ">{convertDate(date)}</p>
          </div>
        </div>
      </a>

      <div className=" flex justify-end p-2">
        {type === "home" ? (
          <button
            className="bg-[#3c82f6] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#295db1] hover:scale-105 active:scale-95 transition-all ease-in-out duration-200"
            onClick={saveFavorites}
          >
            Add to Favorites
          </button>
        ) : (
          <button
            className="bg-[#3c82f6] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#295db1] hover:scale-105 active:scale-95 transition-all ease-in-out duration-200"
            onClick={removeFavorites}
          >
            Remove from Favorites
          </button>
        )}
      </div>
    </div>
    </Tilt>
  );
}

export default NewsCard;
