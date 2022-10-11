import { View, Text, StyleSheet, FlatList } from "react-native";

const BasketDishItem = ({ basketDish }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>1</Text>
      </View>
      <Text style={styles.namee}>{basketDish.name}</Text>
      <Text style={styles.text}>₦{basketDish.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  namee: {
    fontWeight: "600",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },
  text: {
    marginLeft: "auto",
  },

  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 5,
    borderRadius: 3,
  },
  item: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 19,
  },
});

export default BasketDishItem;
