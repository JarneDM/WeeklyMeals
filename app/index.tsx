import { Text, TouchableOpacity, View } from "react-native";
import "./index.css";

export default function Index() {
  return (
    <View className="bg-green-600 h-full flex items-center justify-center">
      <Text className="text-white text-2xl font-medium">
        Welcome to <Text className="text-green-300 font-bold">WeeklyMeals!</Text>
      </Text>
      <View className="flex flex-row justify-between w-48">
        <TouchableOpacity className="mt-4 px-4 py-2 bg-white rounded">
          <Text className="text-green-800 font-medium">Login</Text>
        </TouchableOpacity>
        <TouchableOpacity className="mt-4 px-4 py-2 bg-white rounded">
          <Text className="text-green-800 font-medium">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
