import React from "react";
import { Image, TitleDiv, Txt, SButton, BtnTxt, PButton } from "./Title_Style";

const Title = () => {
  return (
    <TitleDiv>
      <Image
        src="https://img10.hotstar.com/image/upload/f_auto,h_124/sources/r1/cms/prod/6589/1366589-t-d3c00f1f2831"
        alt="hridayam"
      />
      <h4 >Blockbuster</h4>
      <h3>
        2022 . 2h 51m . Malayalam . <span>U/A 13+</span>
      </h3>
      <Txt>
        From carefree college days to becoming a successful wedding
        <br />
        photographer, this coming-of-age story depicts the colours of
        <br />
        Arun Neelakandan's exciting life.
      </Txt>

      <h3>Romance | Drama | RomCom | Couples</h3>

      <SButton>
        <BtnTxt>Subscribe to Watch</BtnTxt>
      </SButton>
      <PButton>
        <BtnTxt>+</BtnTxt>
      </PButton>
    </TitleDiv>
  );
};

export default Title;
