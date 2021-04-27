import * as React from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import Bio from "./Bio";
import Skill from "./Skill";
import Footer from "./Footer";
import { GlobalStyle } from "src/global-styles";
import { BackTop } from "antd";
import Work from "./Work";

class App extends React.Component {
  public render() {
    return (
      <>
        <GlobalStyle />
        <BackTop />
        <Navigation />
        <Profile />
        <Bio />
        <Skill />
        <Work />
        <Footer />
      </>
    );
  }
}

export default App;
