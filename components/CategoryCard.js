import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} className="w-20 h-20 rounded-full" />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
