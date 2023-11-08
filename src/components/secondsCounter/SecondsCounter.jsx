import './secondsCounter.css'

export function SecondsCounter({ counter }) {

  return <p id='countdown' style={{ color: "red", fontSize: "40px" }}> {counter} </p>;
}
