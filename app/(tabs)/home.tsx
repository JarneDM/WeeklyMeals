import { LinearGradient } from "expo-linear-gradient";
import { ChefHat } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  return (
    <LinearGradient
      colors={["#f2813f", "#f27b35", "#e35706"]}
      // uncomment for horizontal gradient
      // start={[0, 0]}
      // end={[1, 0]}
      className="flex-1 items-center justify-center rounded-xl p-4"
    >
      <SafeAreaView className="h-full">
        {/* this is the header */}
        <View className="flex flex-row items-center w-full">
          <View className="bg-white p-3 shadow-sm rounded-xl w-16 items-center justify-center flex flex-col mx-3">
            <ChefHat size={32} color="#000000" />
          </View>
          <View>
            <Text className="text-white font-bold text-4xl">WeeklyMeals</Text>
            <Text className="text-white/70">Simple meal planning</Text>
          </View>
        </View>
        {/* here comes the card components maybe or some quick actions | or both */}
      </SafeAreaView>
    </LinearGradient>
  );
}

export default Home;
