import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  return (
    <SafeAreaView className="flex-1 items-center">
      <Text className="text-2xl font-bold">Welcome to WeeklyMeals!</Text>
    </SafeAreaView>
  );
}

export default Home;
