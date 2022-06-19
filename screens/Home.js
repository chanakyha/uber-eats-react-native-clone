import { SafeAreaView, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestraurantItems from "../components/RestraurantItems";

const YELP_API_KEY =
  "peYJR2NQYQK-p9jE9usTPK95OY3WscSfPt4pTh05sBcQi-6LCwPRIPPn5iWrqEgmTPQw4K7V30W2L8tNN-Vt25nIRdH5M_sG-GSHVJdHxqhF3we2HRlA3uxPnwuuYnYx  ";

export default function Home() {
  const [resturantData, setResturantData] = useState([]);
  const [city, setCity] = useState("San Francisco");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setResturantData(
          json?.businesses?.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 15 }}>
        <HeaderTabs setActiveTab={setActiveTab} activeTab={activeTab} />
        <SearchBar city={city} setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={0}>
        <Categories />
        <RestraurantItems restaurantsData={resturantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
