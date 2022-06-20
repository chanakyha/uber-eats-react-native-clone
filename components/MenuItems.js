import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

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
    title: "French Fries",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$8.50",
    image:
      "https://www.thespruceeats.com/thmb/IHKuXcx3uUI1IWkM_cnnQdFH-zQ=/3485x2323/filters:fill(auto,1)/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg",
  },
  {
    title: "Salsa Burger",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$28.80",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg",
  },
  {
    title: "Pizza",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$30.20",
    image:
      "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg",
  },
  {
    title: "Noodles",
    description:
      "Amazing Indian Dish with tenderloin chicken off sizzling sauce of mayoo",
    price: "$9.60",
    image:
      "https://thechutneylife.com/wp-content/uploads/2017/09/Veg-Hakka-Noodles-The-Chutney-Life-4.jpg",
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

export default function MenuItems({ restaurantName }) {
  const dispatch = useDispatch();
  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );
  const isFoodInCart = (food, cartItems) => {
    return Boolean(cartItems.find((item) => item.title === food.title));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={0}>
      {foods.map((food, key) => (
        <View key={key}>
          <View style={styles.menuItem}>
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
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
