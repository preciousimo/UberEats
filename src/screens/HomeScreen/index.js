import { StyleSheet, FlatList } from "react-native";
import RestuarantItem from "../../components/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestuarantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
  );
}

const styles = StyleSheet.create({});
