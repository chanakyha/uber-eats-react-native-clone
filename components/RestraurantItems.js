import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestraurantItems({ restaurantsData, navigation }) {
  return (
    <>
      {restaurantsData ? (
        restaurantsData.map((resturant, key) => (
          <TouchableOpacity
            key={key}
            activeOpacity={1}
            style={{ marginBottom: 30 }}
            onPress={() => {
              navigation.navigate("RestaurantDetail", {
                name: resturant.name,
                image: resturant.image_url,
                price: resturant.price,
                reviews: resturant.review_count,
                catagories: resturant.categories,
                rating: resturant.rating,
              });
            }}
          >
            <View
              style={{ marginTop: 10, backgroundColor: "#fff", padding: 15 }}
            >
              <RestraurantImage
                image={resturant.image_url || resturant.imageUrl}
              />
              <RestraurantInfo
                rating={resturant.rating}
                name={resturant.name}
              />
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size={"large"} color="#000" />
          <Text style={{ marginLeft: 5 }}>Noting Found at the moment !!</Text>
        </View>
      )}
    </>
  );
}

const RestraurantImage = ({ image }) => (
  <>
    <Image
      source={{
        uri: image,
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
    </TouchableOpacity>
  </>
);

const RestraurantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 10,
    }}
  >
    <View>
      <Text
        style={{
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 ??? min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);
