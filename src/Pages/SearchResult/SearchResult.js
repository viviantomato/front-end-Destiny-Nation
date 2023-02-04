import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import { CityPreview } from "components/CityPreview";
import { searchCities, searchCitiesEmpty } from "services/searchCities";

import "./SearchResult.css";

export const SearchResult = () => {
  const { query } = useParams();

  const [cities, setCities] = useState([]);
  const [extraInfo, setExtraInfo] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await searchCities(query);
      console.log(result);
      setCities(
        result.data.filter(
          (city) => city.attributes.destination_type === "City"
        )
      );
      setExtraInfo(result.included);
    };
    fetch();
  }, []);

  return (
    <div className="search-result">
      {cities.length ? (
        cities.map((city) => (
          <CityPreview key={city.id} city={city} extraInfo={extraInfo} />
        ))
      ) : (
        <Box
          sx={{
            height: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">
            No city found with name "{query}"
          </Typography>
        </Box>
      )}
    </div>
  );
};
