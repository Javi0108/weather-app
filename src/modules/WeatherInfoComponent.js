import React from "react";
import {WeatherIcons} from "../App";

export const WeatherInfoIcons = {
    sunset: "../icons/temp.svg",
    sunrise: "../icons/temp.svg",
    humidity: "../icons/humidity.svg",
    wind: "../icons/wind.svg",
    pressure: "../icons/pressure.svg",
};

const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        <div className="infoContainer">
            <img src={WeatherInfoIcons[name]} className="infoIcon"/>
            <span className="infoLabel">
                {value}
                <span>{name}</span>
            </span>
        </div>
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
    const isDay = weather?.weather[0].icon?.includes('d')
    const getTime = (timeStamp) => {
        return `${new Date(timeStamp * 1000).getHours()} : ${new Date(timeStamp * 1000).getMinutes()}`
    }
    return (
        <>
            <div className="weatherContainer">
                <span className="condition">
                    <span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
                    {`  |  ${weather?.weather[0].description}`}
                </span>
                <img src={WeatherIcons[weather?.weather[0].icon]} className="weatherIcon"/>
            </div>
            <span className="location">{`${weather?.name}, ${weather?.sys?.country}`}</span>

            <span className="weatherInfoLabel">Weather Info</span>
            <div className="weatherInfoContainer">
                <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"}
                                      value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`}/>
                <WeatherInfoComponent name={"humidity"} value={weather?.main?.humidity}/>
                <WeatherInfoComponent name={"wind"} value={weather?.wind?.speed}/>
                <WeatherInfoComponent name={"pressure"} value={weather?.main?.pressure}/>
            </div>
        </>
    );
};

export default WeatherComponent;