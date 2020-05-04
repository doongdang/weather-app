import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Loading from "./Loading";
import { Alert } from "react-native";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getLocation() {
      try {
        await Location.requestPermissionsAsync();
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
        setIsLoading(false);
      } catch (error) {
        Alert.alert("Can`t find", "Try Again");
      }
    }
    getLocation();
  }, []);

  return isLoading ? <Loading /> : null;
}
