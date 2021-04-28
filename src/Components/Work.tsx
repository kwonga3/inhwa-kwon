import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { media } from "src/config/_mixin";
import BKT from "../Static/image/bktechcokr-gif.gif";
import WHO from "../Static/image/whoticket-gif.gif";

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
  font-size: 1rem;
  word-break: break-word;
`;

const WorkBodyBold = styled.div`
  margin-top: 0.5rem;
  font-weight: 600;
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

const BKTImage = styled.img`
  overflow: hidden;
  border-radius: 20px;
  margin: 5px;
  // background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  //   url("https://media.giphy.com/media/7bBOWS03YeJi/giphy.gif");
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

const WHOImage = styled.img`
  overflow: hidden;
  border-radius: 20px;
  margin: 5px;
  // background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  //   url("https://media.giphy.com/media/7bBOWS03YeJi/giphy.gif");
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
            <WorkTitle>Web Project</WorkTitle>
            <WorkBodyBold>제가 제작한 웹 프로젝트입니다.</WorkBodyBold>
            <VideoContainer>
              <a target="_blank" href="http://www.bk-tech.co.kr/">
                <BKTImage src={BKT} />
              </a>
              <VideoDescriptionContainer>
                <WorkTitle>회사 홈페이지</WorkTitle>
                <WorkBody>회사소개 홈페이지</WorkBody>
                <WorkBodyBold>사용한 언어</WorkBodyBold>
                <WorkBody>JAVA</WorkBody>
                <WorkBody>Javascript</WorkBody>
                <WorkBody>HTML</WorkBody>
                <WorkBody>CSS</WorkBody>
              </VideoDescriptionContainer>
            </VideoContainer>

            <WorkBodyBold>제가 참여한 웹 프로젝트입니다.</WorkBodyBold>
            <VideoContainer>
              <a target="_blank" href="https://github.com/kwonga3/WHO-project">
                <WHOImage src={WHO} />
              </a>
              <VideoDescriptionContainer>
                <WorkTitle>WHOTicket</WorkTitle>
                <WorkBody>블록체인 시스템을</WorkBody>
                <WorkBody>이용한 티켓구매사이트</WorkBody>
                <WorkBodyBold>사용한 언어</WorkBodyBold>
                <WorkBody>JAVA</WorkBody>
                <WorkBody>Javascript</WorkBody>
                <WorkBody>HTML</WorkBody>
                <WorkBody>CSS</WorkBody>
              </VideoDescriptionContainer>
            </VideoContainer>
          </VideoSection>

          <VideoSection>
            <WorkTitle>영상 작업</WorkTitle>
            <WorkBodyBold>제가 참여한 영상들 입니다.</WorkBodyBold>
            <VideoContainer>
              <VideoContentContainer>
                <ExtendedReactPlayer
                  width="100%"
                  height="100%"
                  url={"https://youtu.be/BRWFwP99iE4"}
                />
              </VideoContentContainer>
              <VideoDescriptionContainer>
                <WorkTitle>마트 홍보</WorkTitle>
                <WorkBody>장르: 홍보영상</WorkBody>

                <WorkBody>역할: 기획, 촬영, 편집</WorkBody>
              </VideoDescriptionContainer>
            </VideoContainer>

            <VideoContainer>
              <VideoContentContainer>
                <ExtendedReactPlayer
                  width="100%"
                  height="100%"
                  url={"https://youtu.be/mrbGk1twpUY"}
                />
              </VideoContentContainer>
              <VideoDescriptionContainer>
                <WorkTitle>드라이기 리뷰</WorkTitle>
                <WorkBody>장르: 리뷰영상</WorkBody>

                <WorkBody>역할: 기획, 촬영, 편집</WorkBody>
              </VideoDescriptionContainer>
            </VideoContainer>

            <VideoContainer>
              <VideoContentContainer>
                <ExtendedReactPlayer
                  width="100%"
                  height="100%"
                  url={"https://youtu.be/pE_hQ0HEPVo"}
                />
              </VideoContentContainer>
              <VideoDescriptionContainer>
                <WorkTitle>요리 레시피</WorkTitle>
                <WorkBody>장르: 레시피영상</WorkBody>

                <WorkBody>역할: 기획, 촬영, 편집</WorkBody>
              </VideoDescriptionContainer>
            </VideoContainer>
          </VideoSection>
        </WorkContainer>
      </>
    );
  }
}
