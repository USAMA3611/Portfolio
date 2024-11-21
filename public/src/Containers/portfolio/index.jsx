import React, { useState } from "react";
import PageHeaderContent from "../../PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import ImageOne from "../../images/amazonclone.png";
import ImageTwo from "../../images/netflixclone.png";
import ImageThree from "../../images/animation.png";
import ImageFour from "../../images/clander.png";
import ImageFive from "../../images/clothing site.png";
import ImageSix from "../../images/food site.png";
import ImageSeven from "../../images/gymfitness.png";
import ImageEight from "../../images/invoice.png";
import ImageNine from "../../images/timer.png";
import ImageTen from "../../images/travel site.png";
import ImageEleven from "../../images/Portfolio site.png";

const portfolioData = [
  {
    id: 2,
    name: "Amazon Clone",
    image: ImageOne,
    link: "",
  },
  {
    id: 2,
    name: "Netflix Clone",
    image: ImageTwo,
    link: " ",
  },
  {
    id: 2,
    name: "Animation",
    image: ImageThree,
    link: "",
  },
  {
    id: 3,
    name: "Clander",
    image: ImageFour,
    link: " ",
  },
  {
    id: 3,
    name: "Clothing Site",
    image: ImageFive,
    link: " ",
  },
  {
    id: 3,
    name: "Food Site",
    image: ImageSix,
    link: " ",
  },
  {
    id: 3,
    name: "GYM Site",
    image: ImageSeven,
    link: " ",
  },
  {
    id: 3,
    name: "Invoice Management",
    image: ImageEight,
    link: " ",
  },
  {
    id: 3,
    name: "Timer",
    image: ImageNine,
    link: " ",
  },

  {
    id: 4,
    name: "Tour Site",
    image: ImageTen,
    link: " ",
  },
  {
    id: 4,
    name: "PortFolio site",
    image: ImageEleven, 
    link: " ",
  },
];

const filterData = [
  {
    filterdId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "HTML CSS",
  },
  {
    filterId: 3,
    label: "HTML CSS JAVASCRIPT",
  },

  {
    filterId: 4, 
    label: "REACT JS and TAILWIND",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  // console.log("=======================");
  // console.log(hoveredValue);
  // console.log("=======================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  

  return (
    <>
      <section id="portfolio" className="portfoliO">
        <PageHeaderContent
          headerText="My Portfolio" 
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className="portfolio__content">
          <ul className="portfolio__content__filter">
            {filterData.map((item) => (
              <li
                className={item.filterdId === filteredvalue ? "active" : " "}
                onClick={() => handleFilter(item.filterId)}
                key={item.filterId}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div className="portfolio__content__cards">
            {filteredItems.map((item, index) => (
              <div
                className="portfolio__content__cards__item"
                key={`cardItem${item.name.trim()}`}
                onMouseEnter={() => handleHover(index)}
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__img-wrapper">
                 <a> 
                  <img src={item.image} alt="dummy data"/> 
                 </a>
                </div>
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;
