import React, { useState } from "react";
import Button from "../components/reuseable/Button";
import { Link } from "react-router-dom";
import { LuChevronDown } from "react-icons/lu";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";


const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };


  return (
    <>
      <div className="flex justify-between items-center">
        <section className=" max-w-[1280px] px-16 h-full flex gap-6">
          <Link to="/">
            <main>
              <img src="./logo.svg" alt="logo" />
            </main>
          </Link>
          <main className="flex  mx-12 gap-9 items-center font-medium max-tablet:hidden">
            <nav className="flex items-center gap-1">
              <span>Save</span>
              <span>
                <LuChevronDown />
              </span>
            </nav>
            <Link to="/Invest">
              <nav>Invest</nav>
            </Link>
            <Link to="/Stories">
              <nav>Stories</nav>
            </Link>
            <nav>FAQs</nav>
            <nav className="flex items-center gap-1">
              <span>Resources</span>
              <span>
                <LuChevronDown />
              </span>
            </nav>
          </main>
        </section>
        <section className="flex gap-2 items-center max-tablet:hidden">
          <Button title="Sign In" borderColor="#122231" />
          <Button
            title="Create a free account"
            bgColor={"#122231"}
            textColor="#fff"
          />
        </section>

        <section className="hidden max-tablet:block">
          {toggle ?(
            <RxCross2 size={38} onClick={handleToggle}/>
          ) : (
            <RxHamburgerMenu size={38} onClick={handleToggle}/>
          )
        }
        </section>
      </div>

      <div>
        {toggle && <Sidebar handleToggle={handleToggle}/>}
      </div>
    </>
  );
};

export default Header;
