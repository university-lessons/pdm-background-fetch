import { Button, StyleSheet, View } from "react-native";

import { checkStatus, register, unregister } from "./src/services/MyTask";

export default function App() {
  const handleRegister = () => {
    register();
  };

  const handleUnregister = () => {
    unregister();
  };

  const handleCheckStatus = async () => {
    const result = await checkStatus();
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Button title="register" onPress={handleRegister} />
      <Button title="unregister" onPress={handleUnregister} />
      <Button title="check status" onPress={handleCheckStatus} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
