import { useState } from "react";
import { Button, Text, View } from "react-native";
import { CustomStack } from "../../../../components/custom-stack";
import { cardStyleInterpolator } from "../../../../components/custom-transition";
import { useDrawerStatus, DrawerToggleButton } from "@react-navigation/drawer";
import { useSegments, useRouter } from "expo-router";
import { BackButton } from "../../../../components/backButton";

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
    <View style={{ flex: 1 }}>
      <CustomStack
        screenOptions={{
          ...selected[1],
          headerLeft: (props) =>
            lastSegment == "(home)" ? (
              <DrawerToggleButton {...props} />
            ) : (
              <BackButton onPress={router.back} />
            ),
          headerShown: true,

          // API Reference: https://reactnavigation.org/docs/stack-navigator#options
        }}
      />
      <View
        style={{
          borderTopColor: "#eee",
          borderTopWidth: 1,
          backgroundColor: "white",
        }}
      >
        <Text style={{ padding: 8, opacity: 0.6 }}>
          Press these buttons to change the layout transition{"\n"}↓ then press
          "Next" to see the transition. ↓
        </Text>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          {animationSettings.map((value, i) => (
            <Button
              color={index === i ? "#2196F3" : "#ccc"}
              title={value[0]}
              key={String(i)}
              onPress={() => setIndex(i)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
