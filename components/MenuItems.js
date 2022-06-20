import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const foods = [
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/tandoori-chicken-whole-with-naan-and-raita-picture-id953514746?k=20&m=953514746&s=612x612&w=0&h=We9WAV6sG3DQaVaAESUlYlXt93yyQojSwobNuyhlXns=",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/tandoori-chicken-whole-with-naan-and-raita-picture-id953514746?k=20&m=953514746&s=612x612&w=0&h=We9WAV6sG3DQaVaAESUlYlXt93yyQojSwobNuyhlXns=",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/tandoori-chicken-whole-with-naan-and-raita-picture-id953514746?k=20&m=953514746&s=612x612&w=0&h=We9WAV6sG3DQaVaAESUlYlXt93yyQojSwobNuyhlXns=",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/tandoori-chicken-whole-with-naan-and-raita-picture-id953514746?k=20&m=953514746&s=612x612&w=0&h=We9WAV6sG3DQaVaAESUlYlXt93yyQojSwobNuyhlXns=",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/tandoori-chicken-whole-with-naan-and-raita-picture-id953514746?k=20&m=953514746&s=612x612&w=0&h=We9WAV6sG3DQaVaAESUlYlXt93yyQojSwobNuyhlXns=",
  },
];

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={0}>
      {foods.map((food, key) => (
        <View key={key}>
          <View style={styles.menuItem}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation={"vertical"}
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = ({ food }) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
