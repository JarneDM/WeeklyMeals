import { Link } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Login() {
  return (
    <SafeAreaView className="flex-1 bg-green-500 justify-center items-center">
      <View>
        {/* here should come the logo of weeklymeals */}
        <Text className="text-white text-3xl font-bold mb-2">Welcome Back!</Text>
        <Text className="text-green-200 text-lg mb-6">Please login to your account</Text>
      </View>
      <View className="w-4/5 bg-white p-6 rounded-2xl shadow">
        <Text className="text-2xl font-semibold items-center flex flex-col text-center mb-3">Login</Text>

        <Text>Email:</Text>
        <TextInput placeholder="Enter email" className="border border-gray-300 p-2 my-2 rounded-lg placeholder:text-gray-400" />

        <Text>Password:</Text>
        <TextInput
          placeholder="Enter password"
          secureTextEntry={true}
          className="border border-gray-300 p-2 my-2 rounded-lg placeholder:text-gray-400"
        />

        <TouchableOpacity className="bg-green-600 p-2 rounded-lg mt-4">
          <Text className="text-white text-center">Login</Text>
        </TouchableOpacity>

        <Link href="/(auth)/register" className="text-center mt-3">
          <Text>
            Already have an account? <Text className="text-blue-500 underline">Register</Text>
          </Text>
        </Link>

        <Link href="/" className="text-center mt-3">
          <Text className="text-black underline">Go to beginning</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default Login;
