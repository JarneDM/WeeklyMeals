import { Link } from "expo-router";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Register() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text>Register Screen</Text>
      <Link href="/(auth)/login">
        <Text className="text-blue-500">Go to Login</Text>
      </Link>
    </SafeAreaView>
  );
}

export default Register;
