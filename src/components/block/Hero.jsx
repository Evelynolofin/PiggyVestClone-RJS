import React from 'react'
import heroImage from '../../assets/heroimg.png'
import { LuNotepadText } from "react-icons/lu";
import { MdArrowForwardIos } from "react-icons/md";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Button from '../reuseable/Button';

const Hero = () => {
  return (
    <div className="min-h-[850px]">
      <div className="max-w-[1280px] h-full px-16 mx-auto flex justify-between  items-center pt-[120px] max-tablet:flex-col">
        <section className="max-w-[450px] max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:max-w-[600px] max-tablet:mb-6">
          <main className="flex items-center bg-blue-400 w-[350px] text-white font-semibold p-3 rounded-full justify-center mb-6">
            <LuNotepadText />
            <span>The 2024 PiggyVest Savings Report</span>
            <MdArrowForwardIos />
          </main>
          <h1 className='font-bold text-[42px] mb-6 text-left'>
            The Better Way to Save & Invest
            </h1>
          <p className='text-lg mb-6 text-left'>
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <main className="flex gap-3">
            <Button
              title="Get on Iphone"
              bgColor="#122231"
              textColor="#fff"
              iconTitle={<FaApple />}
            />
            <Button
              title="Get on Android"
              bgColor="#122231"
              textColor="#fff"
              iconTitle={<FaGooglePlay />}
            />
          </main>
        </section>
        <section className="max-w-[600px]">
          <img className="w-full" src={heroImage} alt="" />
        </section>
      </div>
    </div>
  );
}

export default Hero
