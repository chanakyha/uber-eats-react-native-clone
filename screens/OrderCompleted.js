import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
import MenuItems from "../components/MenuItems";

export default function OrderCompleted({ route, hideCheckBox, marginLeft }) {
  const { items, restaurantName, totalUSD, total } = route.params;
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={{ margin: 15, alignItems: "center", height: "100%" }}>
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your Order at {restaurantName} was placed for {totalUSD}
        </Text>
        <MenuItems hideCheckBox={1} foods={items} />
        <LottieView
          style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/cooking.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
      </View>
    </SafeAreaView>
  );
}
