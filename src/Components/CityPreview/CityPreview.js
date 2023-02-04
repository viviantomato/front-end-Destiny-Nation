import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import LocationCityIcon from "@mui/icons-material/LocationCity";

import "./CityPreview.css";

const getImageUrl = (id, data) => {
  const image = data.find((datum) => datum.id === id && datum.type === "photo");
  return image?.attributes?.image?.full ?? "";
};

export const CityPreview = ({ city, extraInfo }) => {
  const navigate = useNavigate();

  const longName = city.attributes.long_name;
  const imageId = city?.relationships?.featured_photo?.data?.id;

  return (
    <div className="city-preview">
      <Card sx={{ width: "100%" }}>
        <CardActionArea
          className="card-action-area"
          onClick={() => navigate(`/destination/${city.id}`)}
        >
          {getImageUrl(imageId, extraInfo) ? (
            <CardMedia
              component="img"
              height="140px"
              sx={{ minWidth: "200px", maxWidth: "200px" }}
              image={getImageUrl(imageId, extraInfo)}
            />
          ) : (
            <CardMedia
              height="140px"
              sx={{
                minWidth: "200px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <LocationCityIcon sx={{ fontSize: 140 }} />
            </CardMedia>
          )}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {longName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};
