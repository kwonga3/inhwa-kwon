import React from "react";
import styled from "styled-components";

const BioContainer = styled.section`
  margin-top: -15px;
  padding: 7rem 1.5rem 16rem 1.5rem;
  background-color: #8c43ff;
  color: #fff;
  text-align: center !important;
`;

const BioBody = styled.div`
  margin: 0 auto;
  position: relative;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
  justify-content: center;
  margin-bottom: -0.75rem;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
`;

const BioHeader = styled.div`
  margin-bottom: 1.5rem;
  font-weight: 800;
  font-size: 2rem;
  font-weight: 800;
  line-height: 1.125;
  word-break: break-word;
  font-size: 1.5rem !important;
`;

const BioSubHeader = styled.div`
  font-weight: 300;
  line-height: 1.5;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.25;
  word-break: break-word;
`;

export default class Bio extends React.Component {
  public render() {
    return (
      <BioContainer>
        <BioBody>
          <BioHeader>안녕하세요, 저는 권인화입니다. 만나서 반갑습니다.</BioHeader>
          <BioSubHeader>
            저는 무언가 만드는 걸 좋아합니다. 영상제작, 웹 사이트 제작에 대한
            열정에는 자신이 있습니다.
          </BioSubHeader>
        </BioBody>
      </BioContainer>
    );
  }
}
