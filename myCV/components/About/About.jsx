import React from "react"
import "./About.css"


 const About = ({ hero }) => {
  return (
    <div>
    <div className="aboutMe">
      
       {hero.aboutMe.map((item) => {
        return (
          <div key={JSON.stringify(item)}>
            <p className="about">📕 {item.aboutMe}</p>
            <p>{item.info}</p>
          </div>
        );
      })} 
    </div>
  </div>
  );

};

export default About;