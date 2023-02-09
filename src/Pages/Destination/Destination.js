import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { Typography, Box, Link, Chip, Avatar } from "@mui/material";

import { getCity } from "services/getCity";
import {
  getListOfKnownFor,
  getImageUrl,
  getCovidScore,
  getSafetyScore,
  getBudget,
} from "utils/processIncludedData";

const getImageUrls = ({ data, included }) => {
  return data.relationships.photos.data.map((datum) =>
    getImageUrl(datum.id, included)
  );
};

const getKnownFors = ({ data, included }) => {
  return data.relationships.known_for.data.map((datum) =>
    getListOfKnownFor(datum.id, included)
  );
};

const getSafetyDescription = (city) => {
  const safetyData = getSafetyScore(city);
  return `${safetyData.text} - ${safetyData.subText}`;
};

const getBudgetDescription = (city) => {
  const budgetData = getBudget(city);
  return `${budgetData.text} - ${budgetData.subText}`;
};

export const Destination = () => {
  const { id } = useParams();
  const [city, setCity] = useState();
  const [imageUrls, setImageUrls] = useState([]);
  const [knownFors, setKnownFors] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await getCity(id);
      setCity(result);
      setImageUrls(getImageUrls(result));
      setKnownFors(getKnownFors(result));
    };
    fetch();
  }, []);

  return city ? (
    <div>
      <Typography variant="h4">{city.data.attributes.long_name}</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Carousel sx={{ flex: 1 }}>
          {imageUrls.map((url) => (
            <Box
              height={800}
              sx={{
                background: `url(${url}) no-repeat`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
            />
          ))}
        </Carousel>
        <Box
          sx={{
            flex: 0.5,
            display: "flex",
            flexDirection: "column",
            margin: "16px",
            gap: "16px",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography variant="h6">Known For</Typography>
            {knownFors.map((knownFor) => (
              <Chip
                sx={{ margin: "2px" }}
                avatar={<Avatar src={knownFor.url} />}
                label={knownFor.name}
                variant="outlined"
              />
            ))}
          </Box>
          <Box>
            <Typography variant="h6">Covid Risk</Typography>
            <Typography variant="p">{getCovidScore(city)}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Safety Level</Typography>
            <Typography variant="p">{getSafetyDescription(city)}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Budget Level</Typography>
            <Typography variant="p">{getBudgetDescription(city)}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Airbnb</Typography>
            <Link href={city.data.attributes.airbnb_url} target="_blank">
              Link
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  ) : (
    <div>City not found.</div>
  );
};
