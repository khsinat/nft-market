import React from 'react';

const Banner = ({ parentStyles, childStyles, name }) => (
  <div className={`nft-gradient relative w-full flex items-center z-0 overflow-hidden ${parentStyles}`}>
    <p className={`font-bold text-white text-5xl ${childStyles}`}>{name}</p>
    <div className="absolute w-48 h-48 sm:h-32 sm:w-32 rounded-full white-bg -top-9 -left-20 z-20" />
    <div className="absolute w-72 h-72  sm:w-56 sm:h-56 rounded-full white-bg -bottom-9 -right-20 z-20" />
  </div>

);

export default Banner;
