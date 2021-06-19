import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { appTheme } from "../../constants";

const SwiperItem = ({ source }) => {
  return (
    <View
      style={{
        width: appTheme.dimenstions.width,
        height: appTheme.dimenstions.height / 5,
      }}
    >
      <Image
        source={source}
        style={{
          height: null,
          width: null,
          flex: 1,
          resizeMode: "cover",
        }}
      />
    </View>
  );
};

export default SwiperItem;

const styles = StyleSheet.create({});
