import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { selectBasketItems, selectBasketTotal } from "./app/slices/basketSlice";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();

  const basketTotal = useSelector(selectBasketTotal);

  if (items.length === 0) return null;
  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#1874d2] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01a296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View basket
        </Text>
        <Text>
          <Currency quantity={basketTotal} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
