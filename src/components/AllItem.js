import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import tw from "../../src/lib/tailwind";
import Heart from "../../assets/icons/Heart";

const AllItem = ({ item, onPress, fill, stroke }) => (
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
    <TouchableOpacity testID="favIcon" onPress={onPress}>
      <Heart fill={fill} stroke={stroke} />
    </TouchableOpacity>
  </View>
);

export default AllItem;
