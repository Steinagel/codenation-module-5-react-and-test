import React from "react";

import Button from "./components/Button";
import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
} from "./components/Card";
import FormGroup from "./components/FormGroup";
import Container from "./components/Container";
import Label from "./components/Label";
import Loading from "./components/Loading";
import Select from "./components/Select";
import data from "./data/data.json";
import "./App.css";

import {
  filterByStatus,
  filterByGender,
  generateEpisodesCharacters,
} from "./utils/filters";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      characters: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    //Slow task here - while loading you can call apis for example
    setTimeout(() => {
      this.setState({
        characters: data.results,
        loading: false,
      });
    }, 2000);
  }

  componentDidUpdate() {}

  handleClickStatus(event, status) {
    event.preventDefault();

    if (status !== "") {
      this.setState({
        characters: filterByStatus(data.results, status),
      });
    }
  }

  handleClickGender(event, gender) {
    event.preventDefault();

    if (gender !== "") {
      this.setState({
        characters: filterByGender(data.results, gender),
      });
    }
  }

  handleChange(episode) {
    const episodes = generateEpisodesCharacters(data.results);
    this.setState({
      characters: episodes[episode],
    });
  }

  render() {
    return (
      <Container>
        <FormGroup>
          <Label label="Status" />
          <div>
            <Button
              name="Todos"
              handleClick={(event) => this.handleClickStatus(event, "")}
            />
            <Button
              name="Vivo"
              handleClick={(event) => this.handleClickStatus(event, "Alive")}
            />
            <Button
              name="Morto"
              handleClick={(event) => this.handleClickStatus(event, "Dead")}
            />
            <Button
              name="Desconhecido"
              handleClick={(event) => this.handleClickStatus(event, "unknown")}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label label="Sexo" />
          <div>
            <Button
              name="Todos"
              handleClick={(event) => this.handleClickGender(event, "")}
            />
            <Button
              name="Homem"
              handleClick={(event) => this.handleClickGender(event, "Male")}
            />
            <Button
              name="Mulher"
              handleClick={(event) => this.handleClickGender(event, "Female")}
            />
            <Button
              name="Desconhecido"
              handleClick={(event) => this.handleClickGender(event, "unknown")}
            />
          </div>
        </FormGroup>

        <FormGroup>
          <Label label="Episódio" />
          <Select
            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
            handleChange={(value) => this.handleChange(value)}
          />
        </FormGroup>

        {this.state.loading ? <Loading /> : null}

        <section>
          {this.state.characters.map((character) => {
            return (
              <Card key={character.id}>
                <CardImg image={character.image} alt={character.name} />
                <CardBody>
                  <CardTitle title={character.name} />
                  <CardText text={`Situação: ${character.status}`} />
                  <CardText text={`Sexo: ${character.gender}`} />
                </CardBody>
              </Card>
            );
          })}
        </section>
      </Container>
    );
  }
}

export default App;
