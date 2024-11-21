import React, { useState } from "react";
import {
  FaArrowCircleLeft,
  FaBars,
} from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  {
    label: "HOME",
    path: "/",  
  },
  {
    label: "ABOUT ME",
    path: "/about",
  },
  {
    label: "SKILLS",
    path: "/skills",
  },
  {
    label: "RESUME",
    path: "/resume",
  },
  {
    label: "PORTFOLIO",
    path: "/portfolio",
  },
  {
    label: "CONTACT",
    path: "/contact",
  },
];


const Navbar = ()=>{
  const [toggleIcon, setTogglesIcon] = useState(false);
    

  const handleToggleIcon = ()=>{
       setTogglesIcon (!toggleIcon);
  };

  return(
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to= {"/"} className="navbar__container__logo">
          <FaArrowCircleLeft size={30} />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : " "}`}>
          {data.map((item, key)=>(
            <li key={key} className="navbar__container__menu__item">
              <Link className="navbar__container__menu__item__links"
                to={item.path} >
                  {item.label}
                
              </Link>
            </li>
          ))}

        </ul>
           <div className="nav-icon" onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30}/> : <FaBars size={30} />}  

           </div>
      </nav>
    </div>
  );
};

export default Navbar;
