import React from "react";
import hero from "../../assets/Hero.png";
import "../../styles/hero.css";


import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";

import img01 from '../../assets/img.png';
import text01 from '../../assets/text.png';

import hero4 from '../../assets/three.png';
import delivery from '../../assets/delivery.png'

import mahim from '../../assets/1.png'
import harun from '../../assets/2.png'
import hanif from '../../assets/3.png'

const Hero = () => {
  return (
    <div className="section">
      <div className="section__wrapper">
        <img src={hero} alt="Hero image" />

        <h3>
          Welcome to our restaurant, where the rich flavours of Bengal come
          alive! Experience the vibrant and diverse traditional food culture of
          Bengal, known for its unique blend of spices, fresh ingredients, and
          timeless recipes. Join us for a culinary journey that celebrates the
          essence of Bengali heritage in every bite.
        </h3>
      </div>

      <div className="secondHero">
        <div className="secondBox">
          <div className="fourImg__wrapper">
            <div className="img__wrapper">
              <img src={card1} />
              <img src={card2} />
              <img src={card3} />
              <img src={card4} />
            </div>
          </div>
        </div>
      </div>

      <div className="thirdHero">
        <div className="third__wrapper">
          <div className="wrapper__img">
            <img src={img01}/>
          </div>
          <div className="text__wrapper">
            <img src={text01}/>
          </div>
        </div>
      </div>
      <div className="fourthHero">
        <div className="fourth__wrapper">
          <div className="fourth__img">
            <img src={hero4}/>
          </div>
          <div className="deliver__img">
            <img src={delivery} />
          </div>
        </div>
      </div>
      <div className="fifthHero">
        <div className="fifth__wrapper">
          <div className="text">
            <h1>What Our Customers Say</h1>
          </div>
          <div className="friendsBox">
            <img src={mahim} />
            <img src={harun} />
            <img src={hanif} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
