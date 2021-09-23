import React from "react";
import Icon1 from "../../images/skills.svg";
import Icon2 from "../../images/me.svg";
import Icon3 from "../../images/team.svg";
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
        <WorksCard>
          <WorksIcon src={Icon1} />
          <WorksH2>TicTacToe</WorksH2>
          <WorksP>Fun game written in Vanilla JavaScript</WorksP>
        </WorksCard>
        <WorksCard>
          <WorksIcon src={Icon2} />
          <WorksH2>Tibia Central</WorksH2>
          <WorksP>MMO Based Social Media Platform</WorksP>
        </WorksCard>
        <WorksCard>
          <WorksIcon src={Icon3} />
          <WorksH2>JobWatch</WorksH2>
          <WorksP>A Job Tracker</WorksP>
        </WorksCard>
      </WorksWrapper>
    </WorksContainer>
  );
};

export default Works;
