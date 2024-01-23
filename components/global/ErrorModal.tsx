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

import { BlurView } from "expo-blur";
import { useErrorModalStore } from "../../store/zustand";

const ErrorModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const errorState = useErrorModalStore((state) => state.errorModal);
  const setErrorState = useErrorModalStore((state) => state.setErrorModal);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      statusBarTranslucent
      visible={errorState.visible}
      onRequestClose={() => {
        setErrorState({ visible: false, message: "" });
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>{errorState.message}</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setErrorState({ visible: false, message: "" })}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
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
    marginHorizontal: 10,
    backgroundColor: "#222222",
    borderRadius: 20,
    overflow: "hidden",
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

export default ErrorModal;
