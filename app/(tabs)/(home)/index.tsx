import { colors } from "@/theme/colors";
import { View, Text, Button, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const fileNames = ["test.md", "test2.md", "gym.md"];

export default function HomeScreen() {
  return (
    <GestureHandlerRootView>
      <ScrollView style={styles.root}>
        <View style={styles.layout}>
          <Text style={styles.heading}>Select schema</Text>
          {fileNames.map((x) => (
            <Button key={x} onPress={() => {}} title={x} />
          ))}
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.light.background,
  },
  layout: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  heading: {
    color: colors.light.text,
    fontSize: 24,
    fontWeight: "bold",
  },
});
