import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../store";
import ConnectionStatus from "../components/ConnectionStatus";

describe("ConnectionStatus component", () => {
  test('renders "Connection lost" message when offline', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ConnectionStatus />
      </Provider>
    );

    // Simulate offline event
    window.dispatchEvent(new Event("offline"));

    const connectionLostMessage = getByText(/Connection lost/i);
    expect(connectionLostMessage).toBeInTheDocument();
  });

  test('renders "You are online" message when online', () => {
    const { getByText } = render(
      <Provider store={store}>
        <ConnectionStatus />
      </Provider>
    );

    // Simulate online event
    window.dispatchEvent(new Event("online"));

    const youAreOnlineMessage = getByText(/You are online/i);
    expect(youAreOnlineMessage).toBeInTheDocument();
  });
});
