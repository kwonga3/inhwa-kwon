import React from "react";
import styled from "styled-components";
import Logo from "../Static/image/logo.png";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem 4rem;
  background-color: #8c43ff;
  color: #fff;
  margin: 0 auto;
  position: relative;
`;

const LogoImage = styled.img`
  max-height: 4rem;
  height: auto;
  max-width: 100%;
`;

const FooterMessage = styled.div`
  color: #fff;
  max-width: 320px;
  font-weight: 300;
  margin: 2rem auto;
  opacity: 0.7;
  line-height: 1.125;
  word-break: break-word;
  font-size: 1.5rem !important;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialButton = styled.i`
  background-color: transparent;
  border: 2px solid white;
  border-radius: 100%;
  color: white;
  transition: 0.2s ease;
  font-size: 20px;
  padding: 8px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: #8c43ff;
  }
`;

export default class Footer extends React.Component {
  public render() {
    return (
      <FooterContainer>
        <LogoImage src={Logo} />
        <FooterMessage>항상 즐겁게 배우면서 성장하자</FooterMessage>
        <SocialContainer>
          {/* <a
            target="_blank"
            href="https://www.linkedin.com/in/geon-lee-26771614b/"
          >
            <SocialButton className="fab fa-linkedin-in" />
          </a> */}
          <SocialButton
            onClick={() => window.open("mailto:kwonga3@gmail.com")}
            className="far fa-envelope"
          />
          <a target="_blank" href="https://github.com/kwonga3">
            <SocialButton className="fab fa-github" />
          </a>
          {/* <a
            target="_blank"
            href="https://www.youtube.com/channel/UCc0sQY-o1HupAvho3z1S86A"
          >
            <SocialButton className="fab fa-youtube" />
          </a> */}
        </SocialContainer>
      </FooterContainer>
    );
  }
}
