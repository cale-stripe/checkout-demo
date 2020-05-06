import React from "react";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_p0axCEi3o8omdDRHREmnYoCW00ljTW3nYs");

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }

  handleChange = (event) => {
    this.setState({ username: event.target.value });
  };

  fetchCheckoutSession = () => {
    return fetch(`/checkout_session`, { method: "POST" }).then((response) =>
      response.json()
    );
  };

  handleCheckoutClick = async (event) => {
    // Call your backend to create the Checkout session.
    const { sessionId } = await this.fetchCheckoutSession();
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
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
        <button role="link" onClick={this.handleCheckoutClick}>
          Checkout
        </button>
      </div>
    );
  }
}

export default Home;
