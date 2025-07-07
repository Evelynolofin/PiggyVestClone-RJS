import React from 'react'
import Button from '../components/reuseable/Button';
import storiesHeader from "../assets/stories-header.png";
// import Storiessingle from "../assets/Stories-single.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import button from '../components/reuseable/Button';

const Stories = () => {
  return (
    <>
      <div className="flex justify-between mt-30 mb-50 max-w-[1280px] p-15">
        <div className="text-left">
          <h1 className="font-bold text-[48px] text-[#122231] pr-[300px] mb-5">
            Loved by our Customers
          </h1>
          <p className="text-[20px] pr-[200px] mb-5 text-[#3D4F60]">
            Stories of happy savers who Piggyvest has helped or is helping save
            for what truly matters to them.
          </p>
          <Button title="Add your story" bgColor="#122231" textColor="#fff" />
        </div>

        <div className="w-[800px]">
          <img src={storiesHeader} alt="" />
        </div>
      </div>

      <section className="flex items-center p-15">
        <div className="w-[900px]">
          <img src={storiesHeader} alt="" />
        </div>
        <div className="pr-[150px] pl-[40px]">
          <h1 className="font-bold text-[33px] text-left text-[#122231] mb-7">
            Join 5+ million people who save and invest with us
          </h1>
          <div className="flex gap-4">
            <Button
              title="Get on iphone"
              iconTitle={<FaApple />}
              borderColor=""
            />
            <Button
              title="Get on andriod"
              iconTitle={<FaGooglePlay />}
              borderColor=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Stories
