import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { searchCities } from "services/searchCities";

export const SearchResult = () => {
  const { query } = useParams();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await searchCities(query);
      console.log(result);
      setCities(
        result.data.filter(
          (city) => city.attributes.destination_type === "City"
        )
      );
    };
    fetch();
  }, []);

  return (
    <div>
      {cities.map((city) => (
        <div>{city.attributes.long_name}</div>
      ))}
    </div>
  );
};
