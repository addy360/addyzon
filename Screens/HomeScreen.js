import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Input,
  Item,
  Left,
  Right,
  Text,
} from "native-base";
import React from "react";
import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { DrawerActions } from "@react-navigation/native";

import { appTheme } from "../constants";
import SwiperItem from "../components/Home/SwiperItem";
import { getImages } from "../testData";
import RecommendedItem from "../components/Home/RecommendedItem";

const HomeScreen = ({ navigation }) => {
  const images = getImages();
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
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          >
            <Icon
              name="md-menu"
              style={{ color: appTheme.appColors.lightColor, marginRight: 10 }}
            />
          </TouchableOpacity>
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
          zIndex: 1,
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
      <Content
        style={{
          backgroundColor: appTheme.appColors.lightColor,
          marginTop: 72,
        }}
      >
        <View
          style={{
            height: 50,
            backgroundColor: appTheme.appColors.whiteColor,
            flexDirection: "row",
            paddingHorizontal: 5,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text>Hello, John Doe</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Your Account</Text>
            <Icon name="arrow-forward" style={{ fontSize: 18 }} />
          </View>
        </View>
        <SwiperFlatList
          autoplay
          autoplayDelay={2}
          autoplayLoop
          index={0}
          showPagination
        >
          {images.map((url, i) => (
            <SwiperItem source={require("../assets/1.jpg")} key={i} />
          ))}
        </SwiperFlatList>
        <Card>
          <CardItem
            header
            style={{
              borderBottomWidth: 1,
              borderBottomColor: appTheme.appColors.secondary,
            }}
          >
            <Text>Your recommendations</Text>
          </CardItem>
          {images.map((url, i) => (
            <RecommendedItem key={i} />
          ))}
        </Card>
      </Content>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
