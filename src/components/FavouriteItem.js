import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { PureComponent } from "react";

import tw from "../../src/lib/tailwind";
import Heart from "../../assets/icons/Heart";

class FavouriteItem extends PureComponent {
  render() {
    const { item, onPress, fill, stroke } = this.props;
    return (
      <View onPress={onPress} style={tw`w-[150px] m-[12px]`}>
        <Image
          source={{
            uri: item.image.url,
          }}
          style={tw`h-[150px] w-[150px] rounded-[10px]`}
        />
        <View style={tw`flex flex-row justify-between items-center`}>
          <Text
            style={tw`text-[#212227] text-[16px] font-def font-400 mt-[5px]`}
          >
            {item.name}
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Heart fill={fill} stroke={stroke} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FavouriteItem;
