import React, { useEffect, useState, useCallback } from "react";
import {
  RefreshControl,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import tw from "../lib/tailwind";
import Heart from "../../assets/icons/Heart";

const All = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [faves, setFaves] = useState([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const CatArray = data.filter((item) => item.image);
  const base_url = "https://api.thecatapi.com/v1";
  const key =
    "live_EzqbiYw2LGCAytuvQRtrNb6Dje4Ig8QwZfBFrdMB0HtjZriFVeb2gtqDD2EZqkEq";

  useEffect(() => {
    fetch(`${base_url}/breeds?api_key=${key}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@storage_Key");
      setFaves(JSON.parse(jsonValue));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@storage_Key", jsonValue);
    } catch (e) {
      console.error(e);
    }
  };

  const setFavID = (item) => {
    if (faves.includes(item)) {
      setFaves(faves.splice(faves.indexOf(item), 1));
    } else {
      setFaves([...faves, item]);
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

  const Item = ({ item, onPress, fill, stroke }) => (
    <View style={tw`flex flex-row justify-between items-center mb-4`}>
      <View style={tw`flex flex-row items-center`}>
        <Image
          source={{
            uri: item.image.url,
          }}
          style={tw`h-10 w-10 rounded-[10px] mr-4`}
        />
        <Text style={tw`text-[#212227] text-[16px] font-def font-400`}>
          {item.name}
        </Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Heart fill={fill} stroke={stroke} />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => {
    let fill = "#FFFFFF";
    let stroke = "#E5E5E5";

    fill = !faves.includes(item) ? "#FFFFFF" : "#DE0202";
    stroke = !faves.includes(item) ? "#E5E5E5" : "#DE0202";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          setFavID(item);
          storeData(faves);
        }}
        fill={fill}
        stroke={stroke}
      />
    );
  };

  return (
    <View style={tw`flex-1 justify-between p-[24px]`}>
      <View style={tw`flex flex-1 flex-col justify-between`}>
        <View style={tw`p-[25px]`}>
          <Text
            style={tw`text-[#212227] text-[16px] font-def font-600 leading-[24px]`}
          >
            All Cats
          </Text>
        </View>
        <View style={tw`px-[25px]`}>
          {isLoading ? (
            <View style={tw`justify-between items-center`}>
              <Text flex-1>Loading...</Text>
            </View>
          ) : (
            <FlatList
              data={CatArray}
              renderItem={renderItem}
              keyExtractor={({ id }) => id}
              extraData={selectedId}
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

export default All;
