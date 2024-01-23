import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ConsentParagraph = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{padding:20}}>
        <Text style={styles.title}>
          Consent to Collect Device Identifier </Text>
        <Text style={styles.paragraph}>
          To continue and use the Kini app, you must accept the following terms
          regarding the collection of your device's unique identifier (such as
          the Android ID or advertising ID). We collect this information to
          provide personalized features, ensure the security of our app, and
          improve user experience. This collection is essential for the
          operation of Kini.
        </Text>
        <Text style={styles.paragraph}>
          Your device ID will be used exclusively for ensuring the app's
          functionality and integrity and will not be disclosed to third
          parties, except as necessary for service provision, app analytics, or
          compliance with legal obligations. If you choose not to provide
          consent for data collection, unfortunately, you will not be able to
          use the Kini app.
        </Text>
        <Text style={styles.paragraph}>
          As a user, you will have the ability to manage your data preferences
          within the app settings, except for essential data collections
          necessary for the app's operation. Kini is dedicated to protecting
          your data through advanced encryption and secure data handling
          practices and adheres to all applicable data protection laws including
          GDPR.
        </Text>
       
      </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    

  },
  scrollView: {
    flex: 1,
   
  },
  title: {
    fontSize: 22,
    fontFamily: "PoppinsBold",
    marginBottom: 15,
    color:"white"
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: "Poppins",
    color: "#ffffff",
  },
  button: {
    backgroundColor: "#0066ff", // Change this to your app's primary color
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ConsentParagraph;
