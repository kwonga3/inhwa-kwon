import React from "react";
import styled from "styled-components";
import { media } from "../../src/config/_mixin";
import SkillCard from "./SkillCard";

const SkillContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -14rem;
  padding-bottom: 1rem;
  padding: 2.5rem 1.5rem;
`;

const SkillWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 0;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #e6ecf8;
  color: #293347;
  display: flex;
  justify-content: space-around;
  padding: 1.25rem;
  margin-left: 0;
  margin-right: 0;
  ${media.tablet`
        flex-direction: column;
    `}
`;

const skillCards = [
  {
    icon: "fas fa-video",
    cardTitle: "프로듀서",
    cardDescription: "영상을 기획, 촬영, 편집할 수 있습니다.",
    cardAbility: "영상 종류",
    cardAbilityArray: ["드라마", "단편영화", "다큐멘터리", "예능", "광고"],
    cardTool: "영상 도구",
    cardToolArray: ["Photoshop", "Premiere Pro"]
  },
  {
    icon: "fas fa-laptop",
    cardTitle: "웹 개발자",
    cardDescription: "풀스택 개발자를 목표로 하고 있습니다.",
    cardAbility: "사용하는 언어",
    cardAbilityArray: ["HTML", "CSS", "React", "Django"],
    cardTool: "개발 도구",
    cardToolArray: ["Visual Studio Code", "SourceTree", "Github", "CodeSandbox"]
  }
];

export default class Skill extends React.Component {
  public render() {
    return (
      <SkillContainer>
        <SkillWrapper>
          {skillCards.map((skillCards, index) => (
            <SkillCard {...skillCards} key={index} index={index} />
          ))}
        </SkillWrapper>
      </SkillContainer>
    );
  }
}
