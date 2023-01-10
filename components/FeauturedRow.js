import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestourantCart from "./RestourantCart";
import { useEffect } from "react";
import sanityClient, { urlFor } from "../sanity";
import { useState } from "react";
const FeauturedRow = ({ id, title, description, featuredCategory }) => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="featured" && _id==$id] {
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
              type->{
                name
              }
          }
        }[0]
    `,
        { id }
      )
      .then((data) => setRestaurants(data?.restaurants));
  }, []);

  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {restaurants?.map((restaurant) => (
          <RestourantCart
            key={restaurant?._id}
            id={restaurant?._id}
            imgUrl={urlFor(restaurant?.image).url()}
            title={restaurant?.name}
            rating={restaurant?.rating}
            genre={restaurant?.type.name}
            address={restaurant?.address}
            short_descr={restaurant?.short_desc}
            dishes={restaurant?.dishes}
            long={restaurant?.long}
            lat={restaurant?.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeauturedRow;
