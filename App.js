import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import Loading from "./Loading";
import { Alert } from "react-native";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "97623f4afed0938ca6c5d411b9d826fe"; //openweathermap의 api값이다.

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    setTemp(temp);
    setCondition(weather[0].main);
    setDescription(weather[0].description);
    setIcon(weather[0].icon);
  }; // axios.get을 통해 위도 경도 api-key에 따른 data를 줌 API호출 부분이다.
  useEffect(() => {
    async function getLocation() {
      try {
        await Location.requestPermissionsAsync(); //위치기능 허용여부를 물어봄
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync(); // 현재 위치내용 중에서도 위도와 경도를 받아온다
        getWeather(latitude, longitude);
        setIsLoading(false);
      } catch (error) {
        Alert.alert("Can`t find", "Try Again");
      }
    }
    getLocation();
  }, []); // 앱이 마운트 될때에 위치 접속 기능 허용여부를 묻고 현재 위치를 받아옴

  return isLoading ? (
    <Loading />
  ) : (
    <Weather
      temp={temp}
      condition={condition}
      description={description}
      icon={icon}
    />
  );
}
