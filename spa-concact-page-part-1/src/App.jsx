import React from "react";

import Topbar from "./components/Topbar";
import Filters from "./components/Filters";
import Contacts from "./components/Contacts";
import Contact from "./components/Contact";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
    };
  }
  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />

        <Contacts>
          {this.state.contacts.map((item, index) => (
            <Contact data={{ index: item }} />
          ))}
        </Contacts>
      </React.Fragment>
    );
  }
}

export default App;
