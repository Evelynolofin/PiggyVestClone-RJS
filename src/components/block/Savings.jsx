import React from 'react'
import { LuCornerDownRight } from "react-icons/lu";

const Savings = () => {
  const piggyCard = [
    {
      title: "Automated Savings",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "#0F60D6",
      backGround: "#0Fff",
    },
    {
      title: "Fixed Savings",
      desc: "Lock away money for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit",
      btnTitle: "Safe Lock",
      color: "#2295F2",
      backGround: "#2295F2",
    },
    {
      title: "Goal-Oriented Savings",
      desc: "Reach all savings goals faster. Save towards multiple goals on your own or with a group",
      btnTitle: "Target Savings",
      color: "#39C277",
      backGround: "#39C277",
    },
    {
      title: "Flex Naira",
      desc: "Save, transfer, manage, organise and withdraw your money at any time",
      btnTitle: "Flex Naira",
      color: "#E5489B",
      backGround: "#E5489B",
    },
    {
      title: "Flex Dollar",
      desc: "Save and grow money in foreign currencies such as dollars",
      btnTitle: "Flex Dollar",
      color: "#0C1825",
      backGround: "#0C1825",
    },
    {
      title: "House Money",
      desc: "Plan for your rent and household expenses",
      btnTitle: "House Money",
      color: "#FF783C",
      backGround: "#FF783C",
    },
  ];


  return (
    <>
      <div
        className="mb-8"
        style={{
          color: "#122231",
        }}
      >
        <h1 className="text-[48px] font-bold mb-4">
          Many ways to build your savings
        </h1>
        <p className="text-[24px]">
          Earn 12%-20% when you save with any of these Piggyvest plans.
        </p>
      </div>

      <section className=" grid grid-cols-2 justify-between max-w-[1200px]">
        {piggyCard?.map((data, i) => (
          <main
            className=" bg-white h-[400px] w-[400px] m-9 p-5 hover:bg-[#0F60D6] hover:text-[#fff] rounded-xl"
            key={i}
            style={
              {
                // background: `${data.backGround}`,
              }
            }
          >
            <h1
              className="text-[30px] font-bold"
              style={{
                color: `${data.color}`,
              }}
            >
              {data.title}
            </h1>
            <p>{data.desc}</p>
            <button className="flex">
              <span>
                <LuCornerDownRight />
              </span>
              <p>{data.btnTitle}</p>
            </button>
          </main>
        ))}
      </section>
    </>
  );

}

export default Savings
