import { useState } from "react";
import { Button, Text, View } from "react-native";
import { CustomStack } from "../../../../components/custom-stack";
import { cardStyleInterpolator } from "../../../../components/custom-transition";
import { useDrawerStatus, DrawerToggleButton } from "@react-navigation/drawer";
import { useSegments, useRouter } from "expo-router";
import { BackButton } from "../../../../components/backButton";
import { Stack } from "expo-router";
import { convertToPath } from "../../../../helpers/helpers";
export const unstable_settings = {
  initialRouteName: "home",
};

const animationSettings = [
  ["default", {}],
  [
    "custom slide",
    {
      cardStyleInterpolator,
    },
  ],
  [
    "vertical",
    {
      gestureDirection: "vertical",
      cardStyleInterpolator: ({ current, layouts }) => {
        return {
          cardStyle: {
            transform: [
              {
                translateY: current.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [layouts.screen.height, 0],
                }),
              },
            ],
          },
        };
      },
    },
  ],
];

export default function Layout({ segment }) {
  const [index, setIndex] = useState(0);
  const segments = useSegments();
  console.log("SEGMENTS: ", segments);
  const selected = animationSettings[index];
  console.log("LAYOUT CALLED");
  const lastSegment = segments[segments.length - 1];
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Stack
        screenOptions={
          {
            // API Reference: https://reactnavigation.org/docs/native-stack-navigator#options
          }
        }
      >
        <Stack.Screen
          name="index"
          screenOptions={{
            headerLeft: () => <DrawerToggleButton />,
          }}
          options={{
            headerLargeTitle: true,
            title: "Expo Router",
            headerLeft: () => <DrawerToggleButton />,
            headerSearchBarOptions: { placeholder: "Search" },
          }}
        />
        <Stack.Screen
          name="second"
          options={{
            headerLargeTitle: true,
            title: "Search",
            headerLeft: () => <BackButton backPath={convertToPath(segments)} />,
            headerSearchBarOptions: { placeholder: "Search" },
          }}
        />
      </Stack>
    </>
  );
}
