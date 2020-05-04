import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image } from "react-native";

export default function Weather({ temp, condition, description, icon }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfContainer}>
        <Image
          style={{ height: 50, width: 50 }}
          source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
        />
        <Text style={styles.temp}>{temp}℃</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text>State: {condition}</Text>
        <Text>Detail: {description}</Text>
      </View>
    </View>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 24,
  },
});
