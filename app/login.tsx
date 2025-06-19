import { auth } from "@/config/firebaseConfig";

import { Ionicons } from "@expo/vector-icons";

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

import { TextInput } from "react-native-paper";

import { styles } from "@/styles/signup";
import { router } from "expo-router";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  //controller
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const socialIcons = ["logo-google", "logo-facebook", "logo-apple"];

  //function to create user
  const loginUser = async () => {
    setLoading(true); // start loading
    try {
      await signInWithEmailAndPassword(auth, email, password);
      //   alert("User created successfully");
      router.replace("/home");
    } catch (error: any) {
      alert(`error creating user: ${error.message}`);
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: "black" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.title}>Login here</Text>

          <Text style={styles.subtitle}>Welcome back</Text>

          <TextInput
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

          <TouchableOpacity style={styles.button} onPress={loginUser}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.textButton}>Login</Text>
            )}
          </TouchableOpacity>

          <Text onPress={() => router.push("/signup")}>
            Don&apos;t have an account
          </Text>

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
