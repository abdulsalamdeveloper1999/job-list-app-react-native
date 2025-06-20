import { JobProvider } from "@/contexts/JobContexts";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <JobProvider>
      <Stack screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
        name="signup"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="login"
        options={{ headerShown: false }}
      ></Stack.Screen> */}
      </Stack>
    </JobProvider>
  );
}
