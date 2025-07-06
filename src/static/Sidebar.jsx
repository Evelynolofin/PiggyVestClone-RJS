import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/reuseable/Button'
import { LuChevronDown } from 'react-icons/lu'

const Sidebar = ({handleToggle}) => {
  return (
    <div className="bg-[#f2f7f8] min-h-[80vh] fixed w-full">
      <div className="flex flex-col items-center justify-center gap-4 mt-15 font-semibold">
        <nav className="flex items-center gap-2">
          <span>Save</span>
          <span>
            <LuChevronDown />
          </span>
        </nav>
        <Link onClick={handleToggle} to="/invest">
          <nav>Invest</nav>
        </Link>
        <Link onClick={handleToggle} to="/stories">
          <nav>Stories</nav>
        </Link>
        <nav>FAQs</nav>
        <nav className="flex items-center gap-2">
          <span>Resources</span>
          <span>
            <LuChevronDown />
          </span>
        </nav>
        <Button title="Sign In" borderColor="#122231" />

        <Button
          title="Create A Free Account"
          bgColor="#122231"
          textColor="white"
        />
      </div>
    </div>
  );
}

export default Sidebar
