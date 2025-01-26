import React from "react";
import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface GameAlertProps {
  visible: boolean;
  score: number;
  onClose: () => void;
}

const GameAlert: React.FC<GameAlertProps> = ({
  visible,
  score,
  onClose,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Game Over</Text>
          <Text style={styles.modalMessage}>Final Score: {score}</Text>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>PLAY AGAIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "000",
    shadowColor: "000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 20,
    marginVertical: 15,
    color: "#333",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: "#FF4500",
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default GameAlert;
