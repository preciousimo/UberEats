import { View, Text, Image, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DishListItem from "../../components/DishListItem";
import restaurants from "../../../assets/data/restaurants.json";
import Header from "./Header";
import styles from "./styles"
const restaurant = restaurants[0];

const RestaurantDetailsPage = () => {
  return (
    <View style={styles.page}>
      <FlatList
        ListHeaderComponent={() => <Header restaurant={restaurant}/>}
        data={restaurant.dishes}
        renderItem={({ item }) => <DishListItem dish={item} />}
      />

      <Ionicons
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
    </View>
  );
};

export default RestaurantDetailsPage;
