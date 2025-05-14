import { useState } from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  let Links = [
    { id: 0, href: "#", title: "Our Plans" },
    { id: 0, href: "#", title: "How It Works" },
    { id: 0, href: "#", title: "Our Menus" },
    { id: 0, href: "#", title: "Gift Cards" },
    { id: 0, href: "#", title: "Sustainability" },
    { id: 0, href: "#", title: "Thanksgiving Box" },
  ];
  const [Bars, SetBars] = useState(false);
  const Show = () => {
    SetBars(!Bars);
    console.log(Bars);
  };
  return (
    <>
      <div className="grid grid-cols-[80px_1280px_118px] items-center m-[0px_20px]  h-[80px] md:pt-[14.2px]">
        <div className="Logo">
          <img src="./public/logo.png" alt="" />
        </div>
        <div className="font-[Sans] hidden md:block">
          {Links.map(({ id, title, href }, index) => {
            return (
              <a
                className="ml-3.5 text-[#242424] text-[16px] leading-[24px] font-[600]"
                key={index}
                href={href}
              >
                {title}
              </a>
            );
          })}
        </div>
        <div className="LogBtn hidden md:block">
          <a
            href="#"
            className="inline-block border-2 border-[#067A46] p-[6px_35px] text-[#067A46]"
          >
            Log in
          </a>
        </div>
        <div className="Bars">
          <FaBars
            className="block md:hidden absolute right-5 top-8"
            onClick={Show}
          />
        </div>
      </div>
      <div
        className={`fixed top-[80px] right-0 bg-red-600 p-3 w-[200px] transition-all duration-500 md:hidden
    ${Bars ? "opacity-100 visible" : "opacity-0 invisible"}
  `}
      >
        {Links.map(({ id, title, href }, index) => {
          return (
            <a
              className="ml-3.5 text-[#fff] p-[5px_0px] text-[16px] leading-[24px] font-[600] block"
              key={index}
              href={href}
            >
              {title}
            </a>
          );
        })}
      </div>
    </>
  );
};
export default Navbar;
