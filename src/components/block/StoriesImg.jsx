import React from 'react'
import storiesImg from '../../assets/storiesImg.png'
import Button from '../reuseable/Button';
import { FaApple, FaGooglePlay } from "react-icons/fa";
import tclogo from '../../assets/tclogo@2x.png'
import output from '../../assets/output.png'
import brand1 from "../../assets/brand1.png";
import cio from '../../assets/cio.svg'
import fast from '../../assets/fast.svg'
import pym from '../../assets/pym-removebg-preview.svg'

const StoriesImg = () => {
  return (
    <>
      <div className="flex mt-50 max-w[1280] items-center">
        <div className="w-[700px]">
          <img src={storiesImg} alt="stories" />
        </div>
        <div className="pr-[150px] pl-[50px]">
          <h1 className="font-bold text-[33px] text-left text-[#122231]">
            Join 5+ million people who save and invest with us
          </h1>
          <div className="block flex gap-3 mt-5">
            <Button
              title="Get on iphone"
              borderColor=""
              iconTitle={<FaApple />}
            />
            <Button
              title="Get on Android"
              borderColor=""
              iconTitle={<FaGooglePlay />}
            />
          </div>
        </div>
      </div>

      <section className='mt-35 maax-w-[1280px]'>
        <h1 className="font-bold text-[33px] text-[#122231] mb-6">As featured in</h1>
        <div className="flex gap-20 justify-center items-center max-tablet:flex-wrap">
          <img src={tclogo} alt="" className='max-w-[120px] h-[35px]'/>
          <img src={output} alt=""  className='max-w-[120px] h-[50px]'/>
          <img src={brand1} alt="" className='max-w-[120px] h-[30px]' />
          <img src={pym} alt="" className='max-w-[120px] h-[50px]' />
          <img src={fast} alt="" className='max-w-[120px] h-[120px]'/>
          <img src={cio} alt="" className='max-w-[120px] h-[60px]' />
        </div>
      </section>
    </>
  );
}

export default StoriesImg
