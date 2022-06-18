import { SafeAreaView, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestraurantItems, {
  localRestaurants,
} from "../components/RestraurantItems";

export default function Home() {
  const [resturantData, setResturantData] = useState(localRestaurants);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={0}>
        <Categories />
        <RestraurantItems restaurantsData={resturantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
