import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>Cale's Fantasy Suite</h1>
        Enter your username:
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <Link
          to={{
            pathname: `/analysis`,
            state: { username: this.state.username },
          }}
        >
          <button type="button">Go</button>
        </Link>
      </div>
    );
  }
}

export default Home;
