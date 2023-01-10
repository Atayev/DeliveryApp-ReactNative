import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import {
  UserIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeauturedRow from "../components/FeauturedRow";
import { useState } from "react";
import { useEffect } from "react";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCat, setFeaturedCat] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      },
    }
    `
      )
      .then((data) => setFeaturedCat(data));
  }, []);

  console.log(featuredCat);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="mt-10 bg-white pt-5">
      <View className="flex-row items-center mx-4 pb-2 space-x-2">
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCbb" />
      </View>
      <View className="flex-row items-center space-x-2 pb-2 px-3">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon size={20} color="gray" />
          <TextInput
            placeholder="Restourants and cuisins"
            keyboardType="default"
          />
        </View>
        <AdjustmentsHorizontalIcon size={15} color="#00CCbb" />
      </View>
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />

        {featuredCat?.map((feature) => (
          <FeauturedRow
            key={feature?._id}
            title={feature?.name}
            description={feature?.short_description}
            id={feature?._id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
