import React, { useContext } from 'react';
import Image from 'next/image';
import images from '../assets';
import { NFTContext } from '../context/NFTContext';

const CreatorCard = ({ rank, creatorImage, creatorName, creatorEths }) => {
  const { nftCurrency } = useContext(NFTContext);
  return (
    <div className="min-w-190 minlg:min-w-240 dark:bg-nft-black-3  bg-white border dark:border-nft-black-3 border-nft-gray-1 rounded-3xl flex flex-col p-4 m-4">
      <div className="bg-nft-red-violet  flexCenter rounded-full w-7 h-7 minlg:w-10 minlg:h-10">
        <p className="font-poppins text-white font-semibold text-base minlg:text-lg">{rank}</p>
      </div>
      <div className="my-2 flex  justify-center">
        <div className="relative w-20 h-20 minlg:w-28 minlg:h-28">
          <Image
            src={creatorImage}
            layout="fill"
            objectFit="cover"
            alt="creatorName"
            className="rounded-full"

          />
          <div className="absolute w-5 h-5 minlg:w-7 minlg:h-7 bottom-2 -right-0">
            <Image
              src={images.tick}
              objectFit="contain"
              layout="fill"
              alt="tick"
            />
          </div>
        </div>
      </div>
      <div className="mt-3 flex-col flexCenter text-center minlg:mt-7">
        <p className="dark:text-white  font-poppins text-nft-black-1 font-semibold text-base">{creatorName}</p>
        <p className="dark:text-white  font-poppins text-nft-black-1 font-semibold text-base">{creatorEths.toFixed(2)}
          <span> {nftCurrency}</span>

        </p>
      </div>
    </div>
  );
};

export default CreatorCard;
