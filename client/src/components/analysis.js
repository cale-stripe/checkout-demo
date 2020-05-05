import React from "react";
import { Link } from "react-router-dom";

class Analysis extends React.Component {
  state = {
    players: null,
  };
  componentDidMount() {
    const { username } = this.props.location.state;
    fetch(`/players/${username}`, {})
      .then((res) => res.json())
      .then((response) => {
        const items = response.map((row) => {
          return (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td> {row.rating}</td>
            </tr>
          );
        });
        this.setState({ players: items });
      });
  }

  render() {
    return (
      <div>
        <h1>Full Player Analysis</h1>

        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>{this.state.players}</tbody>
        </table>

        <br />

        <Link to="/">Go home</Link>
      </div>
    );
  }
}

export default Analysis;
