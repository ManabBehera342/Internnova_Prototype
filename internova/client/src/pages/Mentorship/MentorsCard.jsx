import React from "react";

const MentorsCard = ({ imgSrc, Name ,specialist}) => {
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
      {/* Ensuring image fits the container */}
      <div className="relative w-full aspect-w-4 aspect-h-3 rounded-t-3xl overflow-hidden">
        <img
          src={imgSrc}
          alt={`${Name}'s profile`}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-between p-4 space-y-2">
        <div className="space-y-1">
          <h2 className="text-lg font-medium tracking-wide">{Name}</h2>
          <p className="dark:text-gray-800 text-xs">{specialist}</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-2 font-medium tracking-wide rounded-md bg-violet-600 text-gray-50 hover:bg-violet-800"
        >
          CONNECT
        </button>
      </div>
    </div>
  );
};

export default MentorsCard;
