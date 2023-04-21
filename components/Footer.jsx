/* eslint-disable import/no-cycle */
import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import images from '../assets';
import { Button } from '.';

const FooterLinks = ({ heading, items }) => (
  <div className="flex-1 justify-start items-start">
    <h3 className="font-poppins dark:text-white text-nft-black-1 font-semibold mb-10 text-xl">{heading}</h3>
    {items.map((item, i) => (
      <p key={i} className="font-poppins dark:text-white text-nft-black-1 font-normal text-base cursor-pointer dark:hover:text-nft-gray-1 my-3 hover:text-nft-black-1">{item}</p>
    ))}
  </div>
);
const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="flexCenter flex-col dark:border-nft-black-1 border-t border-nft-gray-1 sm:py-8 py-16 ">
      <div className=" w-full minmd:w-4/5 flex flex-row md:flex-col sm:px-4 px-16">
        <div className="flexStart flex-1 flex-col">
          <div className="flexCenter cursor-pointer">
            <Image
              src={images.logo02}
              width={32}
              height={32}
              objectFit="contain"
              alt="logo"
            />
            <p className="dark:text-white text-nft-black-1 font-semibold text-lg ml-1">
              Cryptoket
            </p>
          </div>
          <p className="font-poppins dark:font-nft-gray-1 font-nft-black-1 font-semibold text-base mt-6">
            Get latest updates
          </p>
          <div className="flexBetween minlg:557 md:w-full w-357 mt-6 dark:bg-nft-black-2 bg-white border dark:border-nft-black-2 border-nft-gray-2 rounded-md">
            <input
              type="email"
              placeholder="email here"
              className="h-full flex-1 w-full dark:bg-nft-black-2 bg-white px-4 rounded-md dark:text-white text-nft-black-1 font-normal test-xs minlg:text-lg outline-none"
            />
            <div className="flex-initial">
              <Button btnName="Email me" classStyles="rounded-md" />
            </div>
          </div>
        </div>
        <div className="flexBetweenStart flex-1 flex-wrap ml-10 md:ml-0 md:mt-8">
          <FooterLinks heading="Cryptoket" items={['Explore', 'How it works', 'Contact us']} />
          <FooterLinks heading="Support" items={['Help Support', 'Terms of Service', 'Legal', 'Privacy Policy']} />
        </div>
      </div>

      <div className="flexCenter w-full border-t dark:border-nft-black-1 border-nft-gray-1 sm:px-4 px-16 mt-4">
        <div className="flexBetween flex-row w-full minmd:w-4/5 sm:flex-col mt-7">
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-base">
            Cryptoket, Inc. All rights reserved
          </p>
          <div className="flex flex-row sm:mt-4">
            {[
              images.instagram,
              images.twitter,
              images.discord,
              images.telegram,
            ].map((image, i) => (
              <div key={i} className="mx-2 cursor-pointer">
                <Image
                  key={i}
                  objectFit="contain"
                  alt="social"
                  src={image}
                  width={25}
                  height={25}
                  className={theme === 'light' ? 'filter invert' : ''}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
