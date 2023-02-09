import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress } from "@mui/material";

import { CityPreview } from "components/CityPreview";
import { searchCities, searchCitiesEmpty } from "services/searchCities";

import "./SearchResult.css";

export const SearchResult = () => {
  const { query } = useParams();

  const [cities, setCities] = useState([]);
  const [extraInfo, setExtraInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const result = await searchCities(query);
      setIsLoading(false);
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

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
