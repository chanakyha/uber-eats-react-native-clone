import { View, Text, Image } from "react-native";
import React from "react";

const image =
  "https://www.madridcoolblog.com/wp-content/uploads/2016/08/MADRID-COOL-BLOG-RANDOM-entrada-G-800x534.jpg";
const title = "Farmhouse Kitchen Thai Cusine";
const description = "Thai • Comfort Food • $$ • 🎫 • 4 ⭐ • (2913+) ";
export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
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
