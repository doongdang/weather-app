import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, Image, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { convert } from "./TimeConvert";

export default function Weather({ temp, condition, description, icon, dt }) {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <StatusBar barStyle={"light-content"} />
      <View style={styles.halfContainer}>
        <Image
          style={{ height: 50, width: 50 }}
          source={{ uri: `http://openweathermap.org/img/wn/${icon}@2x.png` }}
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}>
        <Text style={styles.writing}>State: {condition}</Text>
        <Text style={styles.writing}>Detail: {description}</Text>
        <Text style={styles.writing}>Update: {convert(dt)}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  dt: PropTypes.number.isRequired,
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
    color: "white",
  },
  writing: {
    color: "white",
    fontSize: 15,
    paddingVertical: 10,
  },
});
