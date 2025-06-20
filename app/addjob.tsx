import { uploadToCloudinary } from "@/config/cloudinary";
import { pickImage } from "@/config/imagePicker";
import { initialForm, JobModel } from "@/models/jobmodel";
import { FirestoreOperations } from "@/services/jobServices";
import { styles } from "@/styles/addjob";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button, Divider, Icon, TextInput } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function AddJob() {
  const [form, setFormData] = useState<JobModel>(initialForm);

  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChange = (field: keyof JobModel, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePickImage = async () => {
    const image = await pickImage();
    if (image) {
      setImage(image);
    }
  };

  const addJob = async () => {
    setLoading(true);
    try {
      if (
        form.companyName &&
        form.description &&
        form.jobTitle &&
        form.linkedinUrl &&
        form.location &&
        form.maxSalary &&
        form.minSalary &&
        image
      ) {
        const imageUrl = await uploadToCloudinary(image);

        if (!imageUrl) {
          alert("Image upload failed.");
          return;
        }

        const finalForm = {
          ...form,
          imageUrl,
        };
        const res = await FirestoreOperations.createJob(finalForm);
        if (res) {
          alert(res);
          setFormData(initialForm);
          setImage("");

          return;
        }
      } else {
        alert("Please fill all fields");
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.bars}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"} // 'padding' is better for iOS
          // style={{ flex: 1 }}
          keyboardVerticalOffset={0} // tweak if needed for headers
        >
          <ScrollView style={styles.container}>
            {/* Title and subtitle */}
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                alignItems: "baseline",
              }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <Icon source="arrow-left" size={24} />
              </TouchableOpacity>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>Post New Job</Text>
                <Text style={styles.subtitle}>Fill in the details below</Text>
              </View>
            </View>

            <Divider style={styles.divider}></Divider>

            {/* Upload Image Continare */}
            <Text style={styles.textInputTitle}>Job image</Text>
            <TouchableOpacity onPress={handlePickImage}>
              <View style={styles.uplaodImage}>
                {image ? (
                  <Image
                    resizeMode="cover"
                    source={{ uri: image }}
                    style={{ flex: 1, width: "100%", height: "100%" }}
                  />
                ) : (
                  <>
                    <Ionicons size={24} name="camera-outline"></Ionicons>
                    <Text style={styles.uploadImageText}>
                      Tap to upload image
                    </Text>
                  </>
                )}
              </View>
            </TouchableOpacity>

            {/* Job title */}
            <View style={styles.textAndIcon}>
              <Ionicons name="briefcase-outline" />
              <Text style={styles.textInputTitle}>Job title</Text>
            </View>

            <TextInput
              value={form.jobTitle}
              onChangeText={(text) => {
                handleChange("jobTitle", text);
              }}
              mode="outlined"
              outlineColor="grey"
              activeOutlineColor="#F5511D"
              outlineStyle={{ borderRadius: 12 }}
              placeholder="e.g Senior Frontend Developer"
            />

            {/* companuy title */}
            <View>
              <Text style={styles.textInputTitle}>Company Name</Text>
            </View>
            <TextInput
              value={form.companyName}
              onChangeText={(text) => {
                handleChange("companyName", text);
              }}
              mode="outlined"
              outlineColor="grey"
              activeOutlineColor="#F5511D"
              outlineStyle={{ borderRadius: 12 }}
              placeholder="e.g TechCorp Solutions"
            />

            {/* location title */}
            <View style={styles.textAndIcon}>
              <Ionicons name="location" />
              <Text style={styles.textInputTitle}>Location</Text>
            </View>

            <TextInput
              value={form.location}
              onChangeText={(text) => {
                handleChange("location", text);
              }}
              mode="outlined"
              outlineColor="grey"
              activeOutlineColor="#F5511D"
              outlineStyle={{ borderRadius: 12 }}
              placeholder="e.g San Francisco, CA"
            />

            {/* salary  */}
            <View style={styles.textAndIcon}>
              <Ionicons name="cash" />
              <Text style={styles.textInputTitle}>Salary Range</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextInput
                value={String(form.minSalary)}
                onChangeText={(text) => {
                  handleChange("minSalary", text);
                }}
                style={{ flex: 1, marginRight: 8 }} // adds spacing to the right
                mode="outlined"
                outlineColor="grey"
                activeOutlineColor="#F5511D"
                outlineStyle={{ borderRadius: 12 }}
                placeholder="Min (e.g. 2000)"
              />
              <TextInput
                value={String(form.maxSalary)}
                onChangeText={(text) => {
                  handleChange("maxSalary", text);
                }}
                style={{ flex: 1 }} // no margin here
                mode="outlined"
                outlineColor="grey"
                activeOutlineColor="#F5511D"
                outlineStyle={{ borderRadius: 12 }}
                placeholder="Max (e.g. 3000)"
              />
            </View>

            {/* job descriotion  */}
            <Text style={styles.textInputTitle}>Description</Text>
            <TextInput
              value={form.description}
              onChangeText={(text) => {
                handleChange("description", text);
              }}
              multiline
              mode="outlined"
              outlineColor="grey"
              activeOutlineColor="#F5511D"
              outlineStyle={{ borderRadius: 12 }}
              placeholder="e.g. San Francisco, CA"
              style={{
                height: 120, // make it taller
                //   borderWidth: 1,
                //   borderColor: "#ccc",
                //   borderRadius: 8,
                //   padding: 10,
                //   textAlignVertical: "top", // starts typing from top
              }}
            />

            {/* linedin url  */}
            <View style={styles.textAndIcon}>
              <Ionicons name="link" />
              <Text style={styles.textInputTitle}>Linkedin Job Link</Text>
            </View>

            <TextInput
              value={form.linkedinUrl}
              onChangeText={(text) => {
                handleChange("linkedinUrl", text);
              }}
              mode="outlined"
              outlineColor="grey"
              activeOutlineColor="#F5511D"
              outlineStyle={{ borderRadius: 12 }}
              placeholder="https://linedin.com/jobs/view/"
            />

            <Button
              icon="plus"
              onPress={addJob}
              style={{
                height: 55,
                borderRadius: 12,
                justifyContent: "center",
                marginBottom: 20,
                marginTop: 20,
              }}
              mode="contained"
              buttonColor="#F5511D"
            >
              {loading ? <ActivityIndicator /> : <Text> Post job</Text>}
            </Button>

            <Text style={{ textAlign: "center" }}>
              Review your job psot before publishing
            </Text>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
