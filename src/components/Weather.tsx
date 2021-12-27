import { useEffect } from "react";

let value = "";
const promise = new Promise((resolve) => {
  typeof window === "undefined" &&
    fetch("https://www.jma.go.jp/bosai/common/const/area.json")
      .then((v) => v.text())
      .then((v) => (value = v))
      .then(() => resolve(0));
});

const Weather = () => {
  if (!value) throw promise;
  useEffect(() => {
    console.log("実行されない");
    return () => console.log("実行されない2");
  });
  return <div>{value}</div>;
};
export default Weather;
