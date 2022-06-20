import { View, Text, Image } from "react-native";
import React from "react";

export default function About({ route }) {
  const { name, image, catagories, price, reviews, rating } = route.params;
  const formattedCatagories = catagories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCatagories} ${
    price ? ` • ${price}` : ""
  } • 🎫 • ${rating} 🌟(${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      fontWeight: "400",
      fontSize: 15.5,
      marginHorizontal: 15,
    }}
  >
    {description}
  </Text>
);
