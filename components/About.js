import { View, Text, Image } from "react-native";
import React from "react";

const yelpRestaurantInfo = {
  name: "Farmhouse Kitchen Thai Cusine",
  image:
    "https://www.madridcoolblog.com/wp-content/uploads/2016/08/MADRID-COOL-BLOG-RANDOM-entrada-G-800x534.jpg",
  price: "$$",
  reviews: "1500",
  rating: 4.5,
  catagories: [{ title: "Thai" }, { title: "Comfort Food" }],
};

const { name, image, catagories, price, reviews, rating } = yelpRestaurantInfo;
const formattedCatagories = catagories.map((cat) => cat.title).join(" • ");

const description = `${formattedCatagories} ${
  price ? ` • ${price}` : ""
} • 🎫 • ${rating} 🌟(${reviews}+)`;

export default function About() {
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
