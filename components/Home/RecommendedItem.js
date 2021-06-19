import { CardItem, Right } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import StarRating from "react-native-star-rating";

import { appTheme } from "../../constants";

const RecommendedItem = () => {
  return (
    <CardItem>
      <Image
        source={require("../../assets/2.png")}
        style={{ height: 90, width: 90, resizeMode: "cover", borderRadius: 5 }}
      />
      <Right style={{ alignItems: "flex-start", paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 14, fontWeight: "500" }}>
          Item name | Lorem ipsum dolor sit.
        </Text>
        <Text
          style={{ fontSize: 12, color: appTheme.appColors.primaryLightColor }}
        >
          Mary Queen of scots
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: appTheme.appColors.darkColor,
            fontWeight: "700",
          }}
        >
          Tzshs 79,999
        </Text>
        <Text
          style={{ fontSize: 12, color: appTheme.appColors.primaryLightColor }}
        >
          Saving
          <Text
            style={{
              fontSize: 11,
              color: appTheme.appColors.primaryColor,
              fontWeight: "bold",
            }}
          >
            {"  "} Tzsh 21000
          </Text>
        </Text>
        <StarRating
          fullStarColor={appTheme.appColors.secondary}
          animation="wobble"
          disabled={false}
          maxStars={5}
          rating={3.4}
          starSize={11}
        />
      </Right>
    </CardItem>
  );
};

export default RecommendedItem;

const styles = StyleSheet.create({});
