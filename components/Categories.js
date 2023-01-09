import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
              paddingHorizontal: 15,
              paddingTop:10,
          }}
      >
      <CategoryCard imgUrl='ttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' title='testing'/>
      <CategoryCard imgUrl='ttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' title='testing'/>
      <CategoryCard imgUrl='ttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' title='testing'/>
      <CategoryCard imgUrl='ttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' title='testing'/>
      <CategoryCard imgUrl='ttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' title='testing'/>
      <CategoryCard imgUrl='ttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' title='testing'/>
      <CategoryCard imgUrl='ttps://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' title='testing'/>
    </ScrollView>
  );
};

export default Categories;
