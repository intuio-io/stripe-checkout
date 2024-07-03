import { View, Text } from "react-native";
import React, { useEffect } from "react";
import tw from "twrnc";
import colors from "../constants/colors";
import { TouchableOpacity, Alert } from "react-native";

const Success = ({ navigation }) => {
  // useEffect(() => {
  //   Alert.alert("Success, Payment completed successfuly");
  // }, []);
  return (
    <View style={tw`flex-1 items-center justify-center mx-2`}>
      <Text style={tw`text-2xl text-[${colors.primary}] text-center mb-6`}>
        You have successfully completed the payment.
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text
          style={tw`bg-[${colors.primary}] text-white px-6 py-2.5 rounded-md`}
        >
          Tap to continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Success;
