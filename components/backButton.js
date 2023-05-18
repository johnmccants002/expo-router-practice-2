import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

export const BackButton = ({ onPress, backPath }) => {
  return (
    <Link href={`${backPath}`}>
      <AntDesign name="arrowleft" size={24} color="black" />
      {/* <Text style={{ marginLeft: 5 }}>Back</Text> */}
    </Link>
  );
};

// export default function App() {
//   const handleBackPress = () => {
//     // Implement your back button functionality here
//     console.log('Back button pressed!');
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <BackButton onPress={handleBackPress} />
//     </View>
//   );
// }
