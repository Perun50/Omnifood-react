import React from 'react';
import techcrunch from "../../img/logos/techcrunch.png";
import businessInsider from "../../img/logos/businessInsider.png";
import theNewYorkTimes from "../../img/logos/theNewYorkTimes.png";
import forbes from "../../img/logos/forbes.png";
import usaToday from "../../img/logos/usaToday.png";
import "./Featured.css";

function Featured() {
  return (
    <section class="section-featured">
    <div class="container">
      <h2 class="heading-featured-in">As featured in</h2>
      <div class="logos">
        <img src={techcrunch} alt="Techcrunch logo" />
        <img
          src={businessInsider}
          alt="Business Insider logo"
        />
        <img
          src={theNewYorkTimes}
          alt="The New York Times logo"
        />
        <img src={forbes} alt="Forbes logo" />
        <img src={usaToday} alt="USA Today logo" />
      </div>
    </div>
  </section>
  )
}

export default Featured