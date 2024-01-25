import React from "react";

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <img src={"../icons/sun.svg"} className="welcomeWeatherLogo" />
      <span className="chooseCityLabel">Find Weather of your city</span>
      <form className="searchBox" onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City"
        />
        <button type={"submit"}>
            <img src={"../icons/search.svg"} />
        </button>
      </form>
    </>
  );
};
export default CityComponent;
