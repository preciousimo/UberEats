import { StyleSheet, FlatList, View } from "react-native";
import RestuarantItem from "../../components/RestaurantItem";
import restaurants from "../../../assets/data/restaurants.json";

export default function HomeScreen() {
  return (
    <View styles={styles.page}>
      <FlatList
        data={restaurants}
        renderItem={({ item }) => <RestuarantItem restaurant={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
    }
});
