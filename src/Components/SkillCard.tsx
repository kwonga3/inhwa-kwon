import React from "react";
import styled from "styled-components";

const SkillCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 35px;
  justify-content: flex-start;
`;

const Icon = styled.i`
  color: #8c43ff;
  font-size: 50px;
`;

const SkillTitle = styled.div`
  margin-top: 1em;
  margin-bottom: 0.5rem;
  font-weight: 800;
  color: #293347;
  font-size: 2em;
  line-height: 1.125;
  word-break: break-word;
`;

const SkillBody = styled.span`
  font-size: 18px;
  margin-top: 0.3em;
`;

const SkillSubTitle = styled.div`
  color: #8c43ff;
  margin-top: 15px;
  font-size: 18px;
  font-weight: 900;
`;

interface IProps {
  icon: string;
  cardTitle: string;
  cardDescription: string;
  cardAbility: string;
  cardAbilityArray: string[];
  cardTool: string;
  cardToolArray: string[];
  index: number;
}

export default class SkillCard extends React.Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  public render() {
    const {
      icon,
      cardTitle,
      cardDescription,
      cardAbility,
      cardAbilityArray,
      cardTool,
      cardToolArray,
      index
    } = this.props;
    return (
      <>
        <SkillCardContainer>
          <Icon className={icon} />
          <SkillTitle>{cardTitle}</SkillTitle>
          <SkillBody>{cardDescription}</SkillBody>
          <SkillSubTitle>{cardAbility}</SkillSubTitle>
          {cardAbilityArray.map((cardAbilityItem, index) => (
            <SkillBody key={index}>{cardAbilityItem}</SkillBody>
          ))}
          <SkillSubTitle>{cardTool}</SkillSubTitle>
          {cardToolArray.map((cardToolItem, index) => (
            <SkillBody key={index}>{cardToolItem}</SkillBody>
          ))}
        </SkillCardContainer>
        {index === 0 ? (
          <div style={{ height: "100%", border: "1px solid #E6ECF8" }} />
        ) : null}
      </>
    );
  }
}
