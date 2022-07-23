import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { Routes } from "./src/Routes";
import theme from "./src/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" />

      <ThemeProvider theme={theme}>
        <View style={{ flex: 1, backgroundColor: theme.COLORS.BACKGROUND }}>
          <Routes />
        </View>
      </ThemeProvider>
    </NavigationContainer>
  );
}
