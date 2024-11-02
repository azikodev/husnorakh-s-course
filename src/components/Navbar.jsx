import React from "react";

function Navbar() {
  return (
    <div className="navbar py-[30px] lg:mb-[90px] mb-[40px]">
      <div className="lg:flex-1"></div>
      <div className="lg:flex-none flex-1">
        <ul className="flex lg:gap-[60px] gap-[18px] justify-between items-center w-full max-container">
          <li className="lg:text-[25px]  text-[14px]  montserrat-600">
            <a href="#about_course">О КУРСЕ</a>
          </li>
          <li className="lg:text-[25px] text-[14px]  montserrat-600">
            <a href="#prices">ТАРИФЫ</a>
          </li>
          <li className="lg:text-[25px]  text-[14px] montserrat-600">
            <a href="#FAQ">ВОПРОСЫ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
