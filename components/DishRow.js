import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { useState } from "react";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemsById,
} from "./app/slices/basketSlice";
const DishRow = ({ id, name, description, price, image }) => {
  const [isPressed, setIsPressed] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state) => selectBasketItemsById(state, id));

  const handlePress = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };
  const handleRemove = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${isPressed} && border-b-0`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-500 mt-2">
              <Currency quantity={price} currency="USD" />
            </Text>
          </View>
          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#f3f3f4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-200 p-4 rounded-lg"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={!items.length} onPress={handleRemove}>
              <MinusCircleIcon
                color={items.length > 0 ? "#1874d2" : "gray"}
                size={40}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={handlePress}>
              <PlusCircleIcon color="#1874d2" size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
