import { Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      {/* <Stack.Screen name="index" />
      <Stack.Screen name="Screen/LoginScreen/LoginScreen" options={{ headerShown: false }} /> */}

      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
