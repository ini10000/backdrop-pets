import React, { useEffect, useCallback, useState } from "react";
import { RefreshControl, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import FavouriteItem from "../components/FavouriteItem";
import tw from "../lib/tailwind";

const Favourites = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [fill, setFill] = useState("#DE0202");
  const [stroke, setStroke] = useState("#DE0202");

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      setData(JSON.parse(jsonValue));
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      getData();
      setRefreshing(false);
    } catch (error) {
      console.error(error);
    }
  }, [refreshing]);

  const renderItem = ({ item }) => {
    const index = data.indexOf(item);
    return (
      <FavouriteItem
        item={item}
        onPress={() => {
          setFill("#DE0202");
          setStroke("#DE0202");
          setSelectedId(item.id);
          setData(data.splice(index, 1));
          storeData(data);
        }}
        fill={fill}
        stroke={stroke}
      />
    );
  };

  return (
    <View style={tw`flex-1 justify-between p-[24px]`}>
      <View style={tw`flex flex-col justify-between`}>
        <View style={tw`p-[25px]`}>
          <Text
            style={tw`text-[#212227] text-[16px] font-def font-600 leading-[24px]`}
          >
            Cats I Like
          </Text>
        </View>
        <View style={tw`px-[12px]`}>
          {isLoading ? (
            <View style={tw`justify-between items-center`}>
              <Text
                style={tw`text-[#212227] text-[14px] font-def font-600 leading-[24px]`}
              >
                No favourites chosen
              </Text>
            </View>
          ) : data.length === 0 ? (
            <View style={tw`justify-between items-center`}>
              <Text
                style={tw`text-[#212227] text-[14px] font-def font-600 leading-[24px]`}
              >
                No favourites chosen
              </Text>
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item) => "_" + item.id}
              extraData={selectedId}
              numColumns={2}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={() => setTimeout(() => onRefresh(), 200)}
                />
              }
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Favourites;
