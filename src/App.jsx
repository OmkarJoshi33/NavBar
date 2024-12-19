import { React } from "react";
import { useState } from "react";
import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const handleclick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);

    var x = document.getElementById("Div1");
    var y = document.getElementById("hamburg");
    var z = document.getElementById("unl");

    if(isOpen===false)
    {
      z.style.display = "none";
      x.style.width="15%"
      x.style.background="inherit"
      x.style.transition="all 1s ease-in-out"
    }
    else
    {
      z.style.display = "block";
      x.style.width="60%"
      x.style.background="black"
       x.style.transition="all  1s ease-out"

    }
  };

  return (
    <>
      <div
        id="Div1"
        className=" relative 2xl:flex xl:flex lg:flex md:flex sm:flex  2xl:h-auto 2xl:w-screen  bg-black text-white  xl:h-auto xl:w-screen  lg:h-auto lg:w-screen md:h-auto md:w-screen  sm:h-auto sm:w-screen block h-screen w-3/5  "
      >
        <div
          id="hamburg"
          className="2xl:hidden xl:hidden lg:hidden md:hidden  sm:hidden flex rounded-md bg-inherit absolute left-0 right-0 h-auto w-full justify-end "
        >
          <button
            className="block fill-white bg-black p-3"
            onClick={handleclick}
          >
            <GiHamburgerMenu className="flex  bg-inherit size-8 " />
          </button>
        </div>
        <ul
          id="unl"
          className=" 2xl:container bg-inherit text-lg 2xl:flex xl:flex lg:flex md:flex sm:flex relative gap-5 2xl:h-full 2xl:w-full 2xl:items-center 2xl:justify-end 2xl:px-10    xl:gap-5 xl:h-full xl:w-full xl:items-center xl:justify-end xl:px-10  lg:gap-5 lg:h-full lg:w-full lg:items-center lg:justify-end lg:px-10 md:gap-5 md:h-full md:w-full md:items-center md:justify-end md:px-10    sm:gap-5 sm:h-full sm:w-full sm:items-center sm:justify-end 2xl:py-0 xl:py-0 lg:py-0 md:py-0 sm:px-10 sm:py-0 block h-screen w-3/5 py-12 px-5"
        >
          <li className="2xl:block bg-inherit  2xl:p-2 xl:p-4 lg:block lg:p-4  md:block md:p-4 sm:block sm:p-4 hover:text-gray-400 hover:font-medium p-3">
            Home
          </li>
          <li className="2xl:block bg-inherit 2xl:p-2 xl:block xl:p-4 lg:block lg:p-4  md:block md:p-4 sm:block sm:p-4 hover:text-gray-400 hover:font-medium p-3 ">
            About
          </li>
          <li className="2xl:block bg-inherit  2xl:p-2 xl:block xl:p-4 lg:block lg:p-4  md:block md:p-4 sm:block sm:p-4 hover:text-gray-400 hover:font-medium p-3">
            Skills
          </li>
          <li className="2xl:block bg-inherit  2xl:p-2 xl:block xl:p-4 lg:block lg:p-4  md:block md:p-4 sm:block sm:p-4 hover:text-gray-400 hover:font-medium p-3">
            Projects
          </li>
          <li className="2xl:block bg-inherit  2xl:p-2 xl:block xl:p-4 lg:block lg:p-4  md:block md:p-4 sm:block sm:p-4 hover:text-gray-400 hover:font-medium p-3 ">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
