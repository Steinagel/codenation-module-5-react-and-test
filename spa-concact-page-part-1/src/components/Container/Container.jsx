import React from "react";
import "./Container.scss";

class Container extends React.Component {
  render() {
    return (
      <div
        className={`container${
          this.props.className === undefined ? "" : " " + this.props.className
        }`} // Just training the idea of passing extra classnames without the classnames pkg
        data-testid={this.props["data-testid"]}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Container;
