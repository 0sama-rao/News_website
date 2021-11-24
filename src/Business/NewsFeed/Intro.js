import React, {Component} from 'react';

import Accordion from 'react-bootstrap/Accordion';

import './Intro.css';

const Intro = props => {

  return(<div class = "banner-main-content">
      <h2>LATEST BUSINESS AND TECH NEWS PLATFORM</h2>
      <h3>Leading Tech News Portal</h3>

      <button>
          <a href = "#">Know More</a>
      </button>

      <div class = "current-news-head">
        <h3>More Related To Business</h3>
          <h3>Why the govt needs to vigorously increase tax collection and</h3>

          <h3>How one of the country’s oldest and largest wire-makers ta</h3>

          <h3>How Pakistan offers a major opportunity for digital banking </h3>

          <h3>Govt raises Rs1.096tr through T-bills </h3>
          <h3>UBL, United Motors ink agreement  </h3>
          <h3>Stock market loses 93 points, closes at 48,632 points    </h3>
      </div>
  </div>

);
}

export default Intro;
