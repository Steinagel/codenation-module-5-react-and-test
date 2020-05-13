import React from "react";
import "./Filters.scss";
import Container from "../Container";

class Search extends React.Component {
  render() {
    return (
      <div className="filters__search">
        <input
          type="text"
          className="filters__search__input"
          placeholder="Pesquisar"
        />

        <button className="filters__search__icon">
          <i className="fa fa-search" />
        </button>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <button
        className={`filters__item${
          this.props.isSelected === true ? " filters__item--selected" : ""
        }`}
      >
        {this.props.name} <i className="fas fa-sort-down" />
      </button>
    );
  }
}

class Filters extends React.Component {
  render() {
    return (
      <Container data-testid="filters">
        <section className="filters">
          <Search />
          <Button name="Nome" isSelected={true} />
          <Button name="País" />
          <Button name="Empresa" />
          <Button name="Departamento" />
          <Button name="Data de admissão" />
        </section>
      </Container>
    );
  }
}

export default Filters;
