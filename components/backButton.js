import React from "react";
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

export const BackButton = ({ onPress, backPath }) => {
  const router = useRouter();

  return (
    <>
      {Platform.OS === "ios" || Platform.OS === "android" ? (
        <TouchableOpacity onPress={router.back}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      ) : (
        <Link href={`${backPath}`}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </Link>
      )}
    </>
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
