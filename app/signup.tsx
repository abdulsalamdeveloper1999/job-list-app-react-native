import { auth } from "@/config/firebaseConfig";

import { Ionicons } from "@expo/vector-icons";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { TextInput } from "react-native-paper";

import { styles } from "@/styles/signup";
import { useRouter } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  //controller
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const socialIcons = ["logo-google", "logo-facebook", "logo-apple"];

  const router = useRouter();

  //function to create user
  const createUser = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User created successfully");
      router.back();
    } catch (error: any) {
      alert(`error creating user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: "black" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Create Account</Text>

          <Text style={styles.subtitle}>
            Create an account so you can explore of the existing jobs
          </Text>

          <TextInput
            autoCapitalize="none"
            style={styles.input}
            outlineStyle={{ borderRadius: 12 }}
            activeOutlineColor="#F5511D"
            mode="outlined"
            placeholderTextColor="grey"
            placeholder="Please enter your email"
            inputMode="email"
            onChangeText={setEmail}
            value={email}
            outlineColor="transparent"
          />

          <TextInput
            autoCapitalize="none"
            outlineStyle={{ borderRadius: 12 }}
            style={styles.input}
            activeOutlineColor="#F5511D"
            mode="outlined"
            placeholderTextColor="grey"
            placeholder="Please enter your password"
            secureTextEntry
            outlineColor="transparent"
            onChangeText={setPassword}
            value={password}
          />

          <TouchableOpacity style={styles.button} onPress={createUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.textButton}>Sign Up</Text>
            )}
          </TouchableOpacity>

          <Text onPress={() => router.back()}>Already have an account</Text>

          <Text style={styles.socialContinue}>Or continue with</Text>

          <View style={styles.socialIcons}>
            {socialIcons.map((icon) => (
              <Ionicons
                size={20}
                style={styles.icons}
                key={icon}
                name={icon as any}
              ></Ionicons>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
