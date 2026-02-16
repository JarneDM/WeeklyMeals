import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as yup from "yup";
import { supabase } from "../../lib/supabase";

const registerSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email address").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords do not match")
    .required("Confirm your password"),
});

function Register() {
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);
  const [authMessage, setAuthMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setAuthError(null);
    setAuthMessage(null);
    setIsSubmitting(true);
    const { data, error } = await supabase.auth.signUp({
      email: values.email.trim(),
      password: values.password,
    });
    setIsSubmitting(false);

    if (error) {
      setAuthError(error.message);
      return;
    }

    if (data.session) {
      router.replace("/");
      return;
    }

    setAuthMessage("Check your email to confirm your account.");
  });

  return (
    <SafeAreaView className="flex-1 bg-green-500 justify-center items-center">
      <View>
        <Text className="text-white text-3xl font-bold mb-2">Create Account</Text>
        <Text className="text-green-200 text-lg mb-6">Start planning meals together</Text>
      </View>
      <View className="w-4/5 bg-white p-6 rounded-2xl shadow">
        <Text className="text-2xl font-semibold items-center flex flex-col text-center mb-3">Register</Text>

        <Text>Name:</Text>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <TextInput
              autoCapitalize="words"
              placeholder="Enter name"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              className="border border-gray-300 p-2 my-2 rounded-lg placeholder:text-gray-400"
            />
          )}
        />
        {errors.name ? <Text className="text-red-600">{errors.name.message}</Text> : null}

        <Text>Email:</Text>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              autoCapitalize="none"
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

        <Text>Confirm Password:</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <TextInput
              autoCapitalize="none"
              placeholder="Confirm password"
              secureTextEntry={true}
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              className="border border-gray-300 p-2 my-2 rounded-lg placeholder:text-gray-400"
            />
          )}
        />
        {errors.confirmPassword ? <Text className="text-red-600">{errors.confirmPassword.message}</Text> : null}

        {authError ? <Text className="text-red-600 mt-2">{authError}</Text> : null}
        {authMessage ? <Text className="text-green-700 mt-2">{authMessage}</Text> : null}

        <TouchableOpacity className="bg-green-600 p-2 rounded-lg mt-4 flex-row justify-center" onPress={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? <ActivityIndicator color="#FFFFFF" /> : <Text className="text-white text-center">Register</Text>}
        </TouchableOpacity>

        <Link href="/(auth)/login" className="text-center mt-3">
          <Text>
            Already have an account? <Text className="text-blue-500 underline">Login</Text>
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
}

export default Register;
