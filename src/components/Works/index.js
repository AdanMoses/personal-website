import React from "react";
import Icon1 from "../../images/skills.svg";
import Icon2 from "../../images/me.svg";
import Icon3 from "../../images/team.svg";
import Image from "next/image";
import {
  WorksContainer,
  WorksH1,
  WorksWrapper,
  WorksCard,
  WorksIcon,
  WorksH2,
  WorksP,
} from "./WorksElements";

const Works = () => {
  return (
    <WorksContainer id="works">
      <WorksH1>My Work</WorksH1>
      <WorksWrapper>
        <WorksCard href="https://adanmoses.github.io/tictactoe/" target="_blank">
          <Image src={Icon1} alt="icon for portfolio showcase" width={100} height={100} />
          <WorksH2>TicTacToe</WorksH2>
          <WorksP>Fun game written in Vanilla JavaScript</WorksP>
        </WorksCard>
        <WorksCard href="https://cohousing-australia-website-adanmoses.vercel.app/" target="_blank">
          <Image src={Icon2} alt="icon for portfolio showcase" width={100} height={100} />
          <WorksH2>CoHousing Australia Website</WorksH2>
          <WorksP>Website for the Not-for-profit organisation CoHousing Australia (WIP)</WorksP>
        </WorksCard>
        <WorksCard href="https://codepen.io/adanmoses/pen/XWYarwG" target="_blank">
          <Image src={Icon3} alt="icon for portfolio showcase" width={100} height={100} />
          <WorksH2>CSS Flex Grid Library</WorksH2>
          <WorksP>Responsive CSS library to create grids based on viewport and grid sizes. Read more in the "comments" section of the Codepen</WorksP>
        </WorksCard>
      </WorksWrapper>
    </WorksContainer>
  );
};

export default Works;
