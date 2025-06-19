import { useJob } from "@/contexts/JobContexts";
import { router } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Icon, Text } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function JobDetail() {
  const { selectedJob } = useJob();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView style={{ flex: 1 }}>
            <View style={styles.body}>
              {/* Appbar */}
              <View style={styles.appBar}>
                <TouchableOpacity onPress={() => router.back()}>
                  <Icon source="arrow-left" size={24} />
                </TouchableOpacity>
                <Text variant="headlineMedium">Jobs</Text>
                <Text> </Text>
              </View>

              <Image
                style={{
                  height: 200,
                  width: "100%",
                  borderRadius: 12,
                  marginBottom: 10,
                }}
                source={{ uri: selectedJob?.imageUrl }}
              ></Image>

              <Text variant="titleLarge">{selectedJob?.jobTitle}</Text>
              <View>
                <Text style={styles.subText} variant="labelMedium">
                  {selectedJob?.companyName}
                </Text>
                <Text style={styles.subText} variant="labelMedium">
                  {selectedJob?.location}
                </Text>
              </View>

              <Text style={styles.title} variant="titleMedium">
                About the job
              </Text>
              <Text variant="labelLarge">{selectedJob?.description}</Text>
            </View>
          </ScrollView>

          <View style={styles.bottomButton}>
            <Button
              labelStyle={{ fontSize: 16, fontWeight: "bold" }}
              style={styles.button}
              mode="contained"
            >
              Apply on Linkedin
            </Button>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  appBar: {
    width: "100%",
    marginBottom: 20.5,
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  body: {
    paddingHorizontal: 15,
    alignItems: "stretch",
  },
  subText: {
    color: "#57788F",
    marginVertical: 5,
  },
  title: {
    marginVertical: 12,
  },
  button: {
    backgroundColor: "#F5511D",
    borderRadius: 12,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButton: {
    padding: 15,
    backgroundColor: "#fff",
  },
});
