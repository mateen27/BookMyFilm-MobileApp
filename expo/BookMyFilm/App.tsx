import React from "react";
import AppNavigator from "./src/navigation/stack/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";
import ChatProvider from "./src/context/ChatProvider";

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <ChatProvider>
        <AppNavigator />
      </ChatProvider>
    </NavigationContainer>
  );
};

export default App;
