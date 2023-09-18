import React from 'react'
import AppNavigator from './src/navigation/stack/AppNavigator'
import { NavigationContainer } from "@react-navigation/native";

const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

export default App