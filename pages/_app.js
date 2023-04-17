import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        body {
          font-family: "Axiforma", sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
