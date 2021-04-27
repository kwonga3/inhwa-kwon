import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { media } from "src/config/_mixin";
import HLK from "../Static/image/hlk.png";

const WorkContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem 0;
`;

const WorkTitle = styled.div`
  font-weight: 900;
  font-size: 2rem;
  word-break: break-word;
`;

const WorkBody = styled.div`
  margin-top: 0.5rem;
  font-weight: 300;
  line-height: 1.5;
  font-size: 1.25rem;
  word-break: break-word;
`;

const VideoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
`;

const ExtendedReactPlayer = styled(ReactPlayer)`
  overflow: hidden;
  border-radius: 20px;
  margin: 5px;
  transition: 1s ease;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }
`;

const VideoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin-top: 1rem;
  ${media.tablet`
    flex-direction: column;
  `}
`;

const VideoContentContainer = styled.div`
  width: 480px;
  height: 270px;
  transition: 0.2s ease;
  ${media.tablet`
  width: 320px;
  height: 180px;
`}
`;

const VideoDescriptionContainer = styled.div`
  margin: 20px 20px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HLKImage = styled.img`
  overflow: hidden;
  border-radius: 20px;
  margin: 5px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("https://media.giphy.com/media/7bBOWS03YeJi/giphy.gif");
  background-size: 100%;
  background-position: 50% 50%;
  transition: 1s ease;
  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  }
  width: 480px;
  height: 270px;
  ${media.tablet`
  width: 320px;
  height: 180px;
`}
`;

export default class Work extends React.Component {
  public render() {
    return (
      <>
        <WorkContainer>
          <VideoSection>
            <WorkTitle>영상 작업물</WorkTitle>
            <WorkBody>제가 참여한 영상들 입니다.</WorkBody>
            <VideoContainer>
              <VideoContentContainer>
                <ExtendedReactPlayer
                  width="100%"
                  height="100%"
                  url={"https://www.youtube.com/watch?v=M998P_6waeU&t=127s"}
                />
              </VideoContentContainer>
              <VideoDescriptionContainer>
                <WorkTitle>의무경찰홍보영상</WorkTitle>
                <WorkBody>장르: 홍보영상</WorkBody>

                <WorkBody>역할: 기획, 촬영, 편집</WorkBody>
              </VideoDescriptionContainer>
            </VideoContainer>
            <VideoContainer>
              <VideoContentContainer>
                <ExtendedReactPlayer
                  width="100%"
                  height="100%"
                  url={"https://www.youtube.com/watch?v=0ByjLXQDshU"}
                />
              </VideoContentContainer>
              <VideoDescriptionContainer>
                <WorkTitle>게임독립만세</WorkTitle>
                <WorkBody>역할: 다큐멘터리</WorkBody>

                <WorkBody>역할: 기획, 촬영, 편집</WorkBody>
              </VideoDescriptionContainer>
            </VideoContainer>
          </VideoSection>
          <VideoSection>
            <WorkTitle>웹 작업물</WorkTitle>
            <WorkBody>제가 참여한 웹 프로젝트 작업물입니다.</WorkBody>
            <VideoContainer>
              <a target="_blank" href="https://www.higherlowerkorea.com/">
                <HLKImage src={HLK} />
              </a>
              <VideoDescriptionContainer>
                <WorkTitle>더많이 더적게</WorkTitle>
                <WorkBody>사용한 언어</WorkBody>
                <WorkBody>HTML</WorkBody>
                <WorkBody>CSS</WorkBody>
                <WorkBody>React</WorkBody>
              </VideoDescriptionContainer>
            </VideoContainer>
          </VideoSection>
        </WorkContainer>
      </>
    );
  }
}
