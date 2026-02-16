import { updateUser } from "@/core/modules/api.user";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { supabase } from "../../lib/supabase";

function Profile() {
  const [name, setName] = React.useState("");
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <SafeAreaView className="flex-1 relative">
      {/* here comes the users info later */}
      <View className="w-full flex flex-col items-center justify-center">
        <Text className="text-2xl font-bold">User Profile</Text>
        <TextInput
          className="border border-gray-300 p-2 my-2 rounded-lg placeholder:text-gray-400 w-5/6"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        ></TextInput>
        <TouchableOpacity className="bg-green-500 p-2 rounded-lg mt-2" onPress={() => updateUser(name)}>
          <Text className="text-white text-center">Update Profile</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity className="p-4 bg-slate-400/70 rounded-lg m-4 absolute bottom-1 right-8 w-[80%]" onPress={handleLogout}>
        <Text className=" text-center">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default Profile;
