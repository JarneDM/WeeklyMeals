import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import { supabase } from "../../lib/supabase";

const loginSchema = yup.object().shape({
  email: yup.string().email("Enter a valid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Login() {
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setAuthError(null);
    setIsSubmitting(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email.trim(),
      password: values.password,
    });
    setIsSubmitting(false);

    if (error) {
      setAuthError(error.message);
      return;
    }

    router.replace("/(tabs)/home");
  });

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
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Enter email"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              className="border border-gray-300 p-2 my-2 rounded-lg placeholder:text-gray-400"
            />
          )}
        />
        {errors.email ? <Text className="text-red-600">{errors.email.message}</Text> : null}

        <Text>Password:</Text>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextInput
              autoCapitalize="none"
              placeholder="Enter password"
              secureTextEntry={true}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              className="border border-gray-300 p-2 my-2 rounded-lg placeholder:text-gray-400"
            />
          )}
        />
        {errors.password ? <Text className="text-red-600">{errors.password.message}</Text> : null}

        {authError ? <Text className="text-red-600 mt-2">{authError}</Text> : null}

        <TouchableOpacity className="bg-green-600 p-2 rounded-lg mt-4 flex-row justify-center" onPress={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? <ActivityIndicator color="#FFFFFF" /> : <Text className="text-white text-center">Login</Text>}
        </TouchableOpacity>

        <Link href="/(auth)/register" className="text-center mt-3">
          <Text>
            Don{"'"}t have an account? <Text className="text-blue-500 underline">Register</Text>
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
