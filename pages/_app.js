import "@/styles/globals.css";
import { store } from "../store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <style jsx global>{`
          body {
            font-family: "Axiforma", sans-serif;
          }
        `}</style>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
