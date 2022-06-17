import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <View style={{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton
        text={"Delivery"}
        textColor={"#fff"}
        btnColor={"#000"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text={"Pick Up"}
        textColor={"#000"}
        btnColor={"#fff"}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = ({
  text,
  textColor,
  btnColor,
  activeTab,
  setActiveTab,
}) => (
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
