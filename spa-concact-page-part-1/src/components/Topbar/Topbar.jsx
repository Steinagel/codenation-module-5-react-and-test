import React from "react";
import Container from "../Container";

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import "./Topbar.scss";

class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar" data-testid="topbar">
        <Container className="topbar__container--centralize">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </Container>
      </header>
    );
  }
}

export default Topbar;
