import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ city, setCity }) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
          flex: 1,
        }}
      >
        <View style={{ marginLeft: 10 }}>
          <Ionicons name="location-sharp" size={24} />
        </View>

        <TextInput
          style={{
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            flex: 1,
            paddingHorizontal: 8,
            height: "100%",
          }}
          onChangeText={(text) => setCity(text)}
          placeholder="Search"
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            margin: 8,
            backgroundColor: "#fff",
            padding: 9,
            borderRadius: 30,
            alignItems: "center",
          }}
          onPress={() => {
            console.log(city);
          }}
        >
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
          <Text>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
