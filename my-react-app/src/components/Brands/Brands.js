import React from "react";
import disney from "../../images/disney.webp";
import pixar from "../../images/pixar.webp";
import marvel from "../../images/marvel.webp";
import startwar from "../../images/starwar.webp";
import national from "../../images/national.webp";
import hotstar from "../../images/hotstar.webp";

import { Container, Cards } from "./Brands_Style";

const Brands = () => {
  return (
    <Container>
      <Cards>
        <video
          src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132"
          autoPlay
          muted
          loop
        />
        <img src={disney} alt="" />
      </Cards>

      <Cards>
        <video
          src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483"
          autoPlay
          muted
          loop
        />
        <img src={pixar} alt="" />
      </Cards>

      <Cards>
        <video
          src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549"
          autoPlay
          muted
          loop
        />
        <img src={marvel} alt="" />
      </Cards>

      <Cards>
        <video
          src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512"
          autoPlay
          muted
          loop
        />
        <img src={startwar} alt="" />
      </Cards>

      <Cards>
        <video
          src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208"
          autoPlay
          muted
          loop
        />
        <img src={national} alt="" />
      </Cards>

      <Cards>
        <video
          src="https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qc9clm_1669284974594"
          autoPlay
          muted
          loop
        />
        <img src={hotstar} alt="" />
      </Cards>
    </Container>
  );
};

export default Brands;
