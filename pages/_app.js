import "../styles/globals.css";
import { UserContextProvider } from "../utilities/useUser";
import { VideoContextProvider } from "../utilities/useVideo";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <VideoContextProvider>
        <Component {...pageProps} />
      </VideoContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
