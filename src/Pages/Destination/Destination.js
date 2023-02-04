import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getCity } from "services/getCity";

export const Destination = () => {
  const { id } = useParams();
  const [city, setCity] = useState();

  useEffect(() => {
    const fetch = async () => {
      const result = await getCity(id);
      console.log(result);
      setCity(result);
    };
    fetch();
  }, []);

  return city ? (
    <h2> {city.data.attributes.long_name}</h2>
  ) : (
    <div>City not found.</div>
  );
};
