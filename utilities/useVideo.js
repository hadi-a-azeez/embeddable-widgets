import { useState, createContext, useContext } from "react";

export const VideoContext = createContext();

export const VideoContextProvider = (props) => {
  const [selected, setSelected] = useState("overview");
  const value = { selected, setSelected };

  return <VideoContext.Provider value={value} {...props} />;
};

export const useVideo = () => {
  const context = useContext(VideoContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`);
  }
  return context;
};
