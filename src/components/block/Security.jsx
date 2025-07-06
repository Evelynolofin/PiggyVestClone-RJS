import React from 'react'
import { LuCornerDownRight } from "react-icons/lu";

const Security = () => {
  return (
    <div className="flex max-w-[1280px] px-16 gap-5">
      <div>
        <img src="./securitylock.svg" alt="key" />
      </div>
      <div
        style={{ color: "#122231" }}
        className="w-[700px] flex flex-col items-center justify-center text-left"
      >
        <h1 className="font-bold text-[28px] mb-4">
          Your security is our priority
        </h1>
        <p className="mb-2">
          PiggyVest uses the highest level of Internet Security and it is
          secured by 256 bits SSL security encryption to ensure that your
          information is completely protected from fraud.
        </p>
        <div className="flex font-bold text-left mb-35">
          <LuCornerDownRight /> <h4>More on our security measures</h4>
        </div>
      </div>
    </div>
  );
}

export default Security
