import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text={"Delivery"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text={"Pickup"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
  <TouchableOpacity
    style={{
      backgroundColor: activeTab === text ? "#000" : "#fff",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={{
        color: activeTab === text ? "#fff" : "#000",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
