import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function RestraurantItem() {
  return (
    <View>
      <RestraurantImage />
    </View>
  );
}

const RestraurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqI6O0wsQI5Jc6Q6Lwr7wzAUyCtQ1O5AW-jg&usqp=CAU",
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);
