import { View, Text } from "react-native";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const DrawerLayout = (props) => {
  const router = useRouter();
  const drawerContent = (props) => {
    return (
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          display: "flex",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <View style={{ display: "flex" }}>
          <DrawerItem
            label="Home"
            icon={(props) => (
              <MaterialCommunityIcons name="home-outline" {...props} />
            )}
            onPress={() => router.push("/home")}
          />
          <DrawerItem
            label="Profile"
            icon={(props) => (
              <MaterialCommunityIcons name="home-outline" {...props} />
            )}
            onPress={() => router.push("/home")}
          />
        </View>
        <DrawerItem
          style={{}}
          label="Settings"
          icon={(props) => (
            <MaterialCommunityIcons name="cog-outline" {...props} />
          )}
          onPress={() => router.push("/home")}
        />
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer
      useLegacyImplementation
      drawerContent={drawerContent}
      screenOptions={{ headerShown: false }}
    />
  );
};

export default DrawerLayout;
