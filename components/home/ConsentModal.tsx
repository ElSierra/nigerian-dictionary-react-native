import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  useWindowDimensions,
} from "react-native";
import { useConsentStore } from "../../store/zustand";
import ConsentParagraph from "./ConsentParagraph";
import { BlurView } from "expo-blur";
import ConsentButton from "./ConsentButton";

const ConsentModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const consent = useConsentStore((state) => state.consent);
  const dimensions = useWindowDimensions();
  const setConsent = useConsentStore((state) => state.setConsent);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      statusBarTranslucent

      visible={!consent.isConsent}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setConsent({
          isConsent: true,
        });
      }}
    >
      
      <View style={styles.centeredView}>
        <View style={[styles.modalView, {marginTop:dimensions.height/20}]}>
          <ConsentParagraph />
          <View style={{padding:10}}><ConsentButton/></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {

    marginHorizontal:10,
    backgroundColor: "#222222",
    borderRadius: 20,
    overflow:"hidden",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ConsentModal;
