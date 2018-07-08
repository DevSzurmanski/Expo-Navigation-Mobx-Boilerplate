import React from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles/globalLoaderStyles";

const Loading = ({ globalLoading }) => {
  if (!globalLoading) return null;
  return (
    <View style={styles.container}>
      <ActivityIndicator animating style={{ height: 80 }} size="large" />
    </View>
  );
};

export default Loading;
