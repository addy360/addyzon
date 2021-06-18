import {
  Button,
  Container,
  Header,
  Icon,
  Input,
  Item,
  Left,
  Right,
  Text,
} from "native-base";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { appTheme } from "../constants";

const HomeScreen = () => {
  return (
    <Container>
      <Header
        style={{
          backgroundColor: appTheme.appColors.primaryColor,
          height: 90,
          borderBottomColor: appTheme.appColors.primaryLightColor,
          borderBottomWidth: 1,
          justifyContent: "flex-start",
        }}
      >
        <Left style={{ flexDirection: "row" }}>
          <Icon
            name="md-menu"
            style={{ color: appTheme.appColors.lightColor, marginRight: 10 }}
          />
          <AntDesign
            name="amazon"
            size={24}
            color={appTheme.appColors.lightColor}
          />
        </Left>
        <Right>
          <Icon
            name="md-cart"
            style={{ color: appTheme.appColors.lightColor }}
          />
        </Right>
      </Header>
      <View
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 90,
          height: 70,
          backgroundColor: appTheme.appColors.primaryColor,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 10,
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              height: 50,
              width: 100,
              backgroundColor: appTheme.appColors.lightColor,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 12 }}>Shop By</Text>
            <Text style={{ fontWeight: "bold" }}>Category</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: appTheme.appColors.whiteColor,
            marginHorizontal: 10,
            borderRadius: 4,
          }}
        >
          <Item>
            <Icon
              name="search"
              style={{ color: appTheme.appColors.lightColor }}
            />
            <Input placeholder="Search" />
          </Item>
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
