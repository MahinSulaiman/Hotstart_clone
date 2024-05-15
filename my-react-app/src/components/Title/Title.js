import React from "react";
import { Image, TitleDiv, Txt, SButton, BtnTxt, PButton } from "./Title_Style";

const Title = ({imgUrl}) => {
  return (
    <TitleDiv>
      <Image
        src={imgUrl}
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
