import React from "react";
import PageHeaderContent from "../../PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import "./style.scss";
import { skillsData } from "./utills";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";

const Skill = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <PageHeaderContent
          headerText="My Skills"
          icon={<BsInfoCircleFill size={40} />}
        />
        <div className="skills__content-wrapper">
          {skillsData.map((item, i) => (
            <div key={i} className="skills__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >
                <h3 className="skills__content-wrapper__inner-content__category-text">
                  {item.label}
                </h3>
                <div className="skills__content-wrapper__inner-content__progressbar-container">
                  {item.data.map((skillItem, j) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity:1", "opacity: 0"]}
                      iterationCount="1"
                    >
                      <div className="progressbar-wrapper" key={j}>
                        <p>{skillItem.skillName}</p>
                        <Line
                          percent={skillItem.percentage}
                          strokeWidth="4"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth="4"
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Skill;
