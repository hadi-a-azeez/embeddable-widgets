import "../styles/globals.css";
import { UserContextProvider } from "../utilities/useUser";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
