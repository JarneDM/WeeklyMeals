import { Link } from "expo-router";
import { Text, View } from "react-native";
import "./index.css";

export default function Index() {
  return (
    <View className="bg-orange-400/70 h-full flex items-center justify-center">
      <Text className="text-white text-2xl font-medium">
        Welcome to <Text className="text-green-300 font-bold">WeeklyMeals!</Text>
      </Text>
      <View className="flex flex-row justify-between w-48">
        <Link href="/(auth)/login" className="mt-4 px-4 py-2 bg-white rounded">
          <Text className="text-green-800 font-medium">Login</Text>
        </Link>
        <Link href="/(auth)/register" className="mt-4 px-4 py-2 bg-white rounded">
          <Text className="text-green-800 font-medium">Register</Text>
        </Link>
      </View>
    </View>
  );
}
