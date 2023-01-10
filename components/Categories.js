import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
import { useEffect } from "react";
import sanityClient, { urlFor } from '../sanity'
import { useState } from "react";
const Categories = () => {
  const [category,setCategory] = useState([])
  useEffect(() => {
    sanityClient.fetch(`
    *[_type=="category"]
    `).then(data=>setCategory(data))

  },[])

  console.log(category)
  return (
      <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
              paddingHorizontal: 15,
              paddingTop:10,
          }}
    >
      {
        category.map(cat => (
          <CategoryCard imgUrl={urlFor(cat.image).url()} title={cat.name} />
        ))
      }

    </ScrollView>
  );
};

export default Categories;
