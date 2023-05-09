import React, { useState, useEffect } from "react";

function Geolocation() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const apiKey = "YOUR_OPENCAGE_API_KEY";
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();
      const city = data.results[0].components.city;

      setLocation(city);
    });
  }, []);

  return <div>Your location: {location}</div>;
}

export default Geolocation;
