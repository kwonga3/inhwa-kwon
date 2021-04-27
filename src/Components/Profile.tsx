import React from "react";
import styled from "styled-components";
import Computer from "../Static/image/computer.png";
import Avatar from "../Static/image/avatar.png";
import { media } from "src/config/_mixin";

const ProfileContainer = styled.section`
  background-color: #fff;
  color: #0a0a0a;
  padding-top: 2rem;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center !important;
`;

const ProfileBodyContainer = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`;

const ProfileBodyWrapper = styled.div`
  margin: 0 auto;
  position: relative;
`;

const ProfileBody = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -0.75rem;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
`;

const ProfileBodyInner = styled.div`
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
`;

const ProfileBodyHeader = styled.h1`
  color: #293347;
  color: #0a0a0a;
  margin-bottom: 1.5rem;
  color: #293347;
  color: #363636;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1.125;
  word-break: break-word;
  font-size: 2.5rem !important;
`;

const ProfileBodySubHeader = styled.h2`
  color: rgba(10, 10, 10, 0.9);
  margin-bottom: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.25;
  word-break: break-word;
`;

const ProfileImage = styled.img`
  margin: 2rem 0;
  width: 250px;
  height: auto;
  max-width: 100%;
  animation: float 6s ease-in-out infinite;
  /* font-family: "Nanum Myeongjo", serif; */
  @keyframes float {
    0% {
      -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 1));
      filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 1));
      transform: translatey(0px);
    }
    50% {
      -webkit-filter: drop-shadow(0 25px 15px rgba(0, 0, 0, 0.5));
      filter: drop-shadow(0 25px 15px rgba(0, 0, 0, 0.5));

      transform: ${props =>
        props.dir === "UP" ? "translatey(20px)" : "translatey(-20px)"};
    }
    100% {
      -webkit-filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 1));
      filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 1));
      transform: translatey(0px);
    }
  }
  ${media.tablet`
    width: 200px;
    `}
`;

const ProfileFooter = styled.div`
  padding: 0rem 1.5rem;
  flex-grow: 0;
  flex-shrink: 0;
`;

const ComputerImage = styled.img`
  margin-bottom: -0.45rem;
  width: 100%;
  max-width: 860px;
  margin-bottom: -0.4rem;
  height: auto;
`;

export default class Profile extends React.Component {
  public render() {
    return (
      <ProfileContainer>
        <ProfileBodyContainer>
          <ProfileBodyWrapper>
            <ProfileBody>
              <ProfileBodyInner>
                <ProfileBodyHeader>Backend Developer</ProfileBodyHeader>
                <ProfileBodySubHeader>
                  저는 코딩과 영상 제작을 좋아합니다, 그리고 제가 하는 일에
                  애정을 갖고 있습니다.
                </ProfileBodySubHeader>
                <ProfileImage src={Avatar} />
              </ProfileBodyInner>
            </ProfileBody>
          </ProfileBodyWrapper>
        </ProfileBodyContainer>
        <ProfileFooter>
          <ComputerImage src={Computer} />
        </ProfileFooter>
      </ProfileContainer>
    );
  }
}
