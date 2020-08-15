import React from 'react';
import { BlurView } from "expo-blur";
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';
import { AppLoading } from 'expo';
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/Feather";


export default function App() {
  let [fontsLoaded] = useFonts({
    'Asap-SemiBold': require('./assets/fonts/Asap-SemiBold.ttf'),
    'Asap-Medium': require('./assets/fonts/Asap-Medium.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else{
    return (
      <View style={styles.mainview}>
            <ImageBackground source={require("./assets/sun.jpg")} style={styles.postcontainer1} blurRadius={50}>
            <View style={styles.subview}>
            <View style={styles.view1}>
              <Text style={styles.textprofile}>Discover</Text>
            </View>
            <View style={styles.view2}>
            <Icon name="more-vertical" size={20} style={styles.icon} />
             </View>
             </View> 
            </ImageBackground> 
         <ScrollView style={styles.ScrollView}>
          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme1.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme2.png")} />
          </View>
          </View>

          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme3.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme4.png")} />
          </View>
          </View>

          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme5.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme6.png")} />
          </View>
          </View>

          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme7.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme8.png")} />
          </View>
          </View>

          <View style={styles.normalView}>
          <View style={styles.postimgview1}>
            <Image style={styles.meme1} source={require("./assets/meme9.png")} />
          </View>
          <View style={styles.postimgview2}>
             <Image style={styles.meme2} source={require("./assets/meme10.png")} />
          </View>
          </View>
         </ScrollView>
      </View>   
    )
  };
}

const styles = StyleSheet.create({
  subview: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainview: {
    flex: 1
  },
  view1: {
    marginLeft: "43.5%",
    flex: 9
  },
  view2: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  
  postcontainer1: {
    width: "100%",
    height: 40,
    marginTop:35,
    justifyContent: "center",
    alignItems: "center"
  },
  textprofile: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Asap-SemiBold"
  },
  icon: {
    color: "white",
   
  },
  ScrollView: {
    backgroundColor: "#181D20"
  },
  normalView: {
    flexDirection: "row",
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  postimgview1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  postimgview2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  meme1: {
    height: 175,
    width: 175
  },
  meme2: {
    height: 175,
    width: 175
  }
});
