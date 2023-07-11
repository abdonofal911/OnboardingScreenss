import React from "react";
import { StyleSheet, Image, Text, View, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Swiper from "react-native-swiper";
//import SplashScreen from "react-native-splash-screen";
//import AppLoading from "expo-app-loading";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

const w = Dimensions.get("screen").width;
const h = Dimensions.get("screen").height;

const App = () => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  //   if (!fontLoaded) {
  //   return <AppLoading />;
  //  } else {
  return (
    <Swiper
      buttonWrapperStyle={styles.myButtonWrapperStyle}
      style={styles.wrapper}
      showsButtons={true}
      paginationStyle={styles.myPaginationStyle}
      activeDotColor="#BA56AC"
      dotColor="#998FA2"
      nextButton={
        <View style={styles.myButton}>
          <AntDesign name="arrowright" size={22} color="#FFF" />
        </View>
      }
      prevButton={
        <View style={styles.myButton}>
          <AntDesign name="arrowleft" size={22} color="#FFF" />
        </View>
      }
    >
      <View style={styles.slide}>
        <Image source={require("./Images/img.png")} style={styles.img} />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require("./Images/img2.png")} style={styles.img} />
        <Text style={styles.title}>Get Started </Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require("./Images/img3.png")} style={styles.img} />
        <Text style={styles.title}>Discover</Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>
      <View style={styles.slide}>
        <Image source={require("./Images/img4.png")} style={styles.img} />
        <Text style={styles.title}>Know More</Text>
        <Text style={styles.text}>
          When I was 5 years old, my mother always told me that happiness was
          the key to life. When I went to school, they asked me what I wanted to
          be when I grew up.
        </Text>
      </View>
    </Swiper>
  );
  // }
};

export default App;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingTop: 80,
    marginHorizontal: 30,
  },
  img: {
    alignSelf: "center",
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
    height: h * 0.5,
    width: w * 0.9,
  },
  title: {
    fontFamily: "Montserrat_700Bold",
    marginTop: 60,
    marginHorizontal: 10,
    fontSize: 32,
    fontWeight: "bold",
  },
  text: {
    color: "#767676",
    fontFamily: "Montserrat_400Regular",
    marginTop: 20,
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 10,
  },
  myButtonWrapperStyle: {
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  wrapper: {},
  myPaginationStyle: {
    marginRight: w * 0.7,
    marginBottom: h * 0.02,
  },
  myButton: {
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    backgroundColor: "#BA56AC",
    marginHorizontal: 20,
  },
});
