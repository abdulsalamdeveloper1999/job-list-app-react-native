import { useJob } from "@/contexts/JobContexts";
import { JobModel } from "@/models/jobmodel";
import { FirestoreOperations } from "@/services/jobServices";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Chip, FAB, Icon, Text, TextInput } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const choiceChips = ["All", "Saved", "Applied"];
  const [jobs, setJobs] = useState<JobModel[]>([]);
  const { setSelectedJob } = useJob();
  const [selectedChip, setSelectedChip] = useState("All"); // default selection

  useEffect(() => {
    getJobs();
  }, [jobs]);

  const getJobs = async () => {
    const res = await FirestoreOperations.getJobs();
    setJobs(res);
  };

  const handleRoute = (job: JobModel) => {
    setSelectedJob(job);
    router.push("/jobDetail");
  };

  const gotoAddJob = () => {
    router.push("/addjob");
  };

  const JobCard = ({ item }: { item: JobModel }) => {
    return (
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "row",
          gap: 16,
          marginBottom: 16,
          width: "100%",
        }}
      >
        <Image
          style={{ height: 70, width: 70, borderRadius: 8 }}
          source={{
            uri: item.imageUrl,
          }}
        ></Image>
        {/* Column */}
        <View style={{ flex: 1 }}>
          <Text variant="titleSmall">{item.jobTitle}</Text>
          <Text variant="bodySmall">
            Remote · {item.minSalary}$ - {item.maxSalary}$
          </Text>

          <Text variant="bodySmall">{item.companyName}</Text>
        </View>
        <Icon source="bookmark-outline" size={24}></Icon>
      </View>
    );
  };

  const handleLogout = async () => {
    const res = await FirestoreOperations.logout();
    if (res) {
      router.replace("/login");
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.body}>
          {/* Appbar */}
          <View style={styles.appBar}>
            <Text> </Text>
            <Text variant="headlineMedium">Jobs</Text>
            <TouchableOpacity onPress={handleLogout}>
              <Icon source="logout" color={"0D171C"} size={24} />
            </TouchableOpacity>
          </View>

          {/* Search */}
          <TextInput
            style={{ width: "100%" }}
            outlineStyle={{
              borderRadius: 12,

              backgroundColor: "#F5511D20",
            }}
            activeOutlineColor="#F5511D"
            mode="outlined"
            outlineColor="transparent"
            placeholder="Search"
            placeholderTextColor="#F5511D"
          ></TextInput>

          <View style={styles.choiceChip}>
            {choiceChips.map((choice) => (
              <Chip
                key={choice}
                onPress={() => setSelectedChip(choice)}
                style={{
                  backgroundColor:
                    selectedChip === choice ? "#F5511D" : "#F5511D20",
                }}
                textStyle={{
                  color: selectedChip === choice ? "#fff" : "#F5511D",
                }}
              >
                {choice}
              </Chip>
            ))}
          </View>

          {/* Job Card */}
          <FlatList
            keyExtractor={(item) => item.id!}
            data={jobs}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleRoute(item)}>
                <JobCard item={item} />
              </TouchableOpacity>
            )}
          ></FlatList>
        </View>
      </SafeAreaView>
      <FAB
        icon="plus"
        color="white"
        onPress={gotoAddJob}
        style={{
          backgroundColor: "#F5511D",

          position: "absolute",
          right: 20,
          bottom: 60,
        }}
      />
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
  choiceChip: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginVertical: 24,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
