import React from "react";
import styled from "styled-components";
import Logo from "../Static/image/logo.png";

const NavigationContainer = styled.nav`
  align-items: stretch;
  display: flex;
  padding: 1.2rem 0;
  box-shadow: none;
  z-index: auto;
  background-color: #fff;
  box-shadow: 0 2px 0 0 #f5f5f5;
  min-height: 3.25rem;
  position: relative;
`;

const NavigationWrapper = styled.div`
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  padding: 0 11px;
`;

const NavigationLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  max-height: 4rem;
  height: auto;
  max-width: 100%;
`;

const NavigationMenu = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  align-items: stretch;
  display: flex;
  box-shadow: none;
  padding: 0.5rem 0;
  background-color: #fff;
`;

const NavigationEnd = styled.div`
  justify-content: flex-end;
  margin-left: auto;
  align-items: stretch;
  display: flex;
`;

const NavigationItem = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #293347;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
`;

const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialButton = styled.i`
  background-color: transparent;
  border-radius: 100%;
  color: rgba(0, 0, 0, 0.5);
  transition: 0.5s ease;
  font-size: 1.5rem;
  padding: 8px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

export default class Navigation extends React.Component {
  public render() {
    return (
      <NavigationContainer>
        <NavigationWrapper>
          <NavigationLogo>
            <LogoImage src={Logo} />
          </NavigationLogo>
          <NavigationMenu>
            <NavigationEnd>
              <NavigationItem>
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
              </NavigationItem>
            </NavigationEnd>
          </NavigationMenu>
        </NavigationWrapper>
      </NavigationContainer>
    );
  }
}
