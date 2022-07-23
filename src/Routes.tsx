import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "./pages/Home";
import { Pokemon } from "./pages/Pokemon";
import { RootStackParamList } from "./@types/stack-routes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
